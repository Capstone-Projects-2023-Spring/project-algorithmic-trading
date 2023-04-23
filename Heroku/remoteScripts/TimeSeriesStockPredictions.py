# get_ipython().system('pip install numpy')
# get_ipython().system('pip install pandas')
# get_ipython().system('pip install torch')
# get_ipython().system('pip install matplotlib')
# get_ipython().system('pip install alpha_vantage')
# get_ipython().system('pip install scikit-learn')
# get_ipython().system('pip install pandas_market_calendars')
# get_ipython().system('pip install lxml')


# import libraries
import numpy as np
import pandas
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset
from torch.utils.data import DataLoader
from datetime import datetime
from dateutil.relativedelta import relativedelta
import pandas_market_calendars as mcal
import time
import psycopg2
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()



# config file (placing here for now, some fields will change on later implementations)

config = {
    "alpha_vantage": {
        "key": "2JMCN347HZ3BU9RC",
        "symbol": "SPY",
        "outputsize": "full",
        "key_adjusted_close": "5. adjusted close",
    },
    "data": {
        "window_size": 30,
        "train_split_size": 1,
    },
    "plots": {
        "xticks_interval": 90,  # show a date every 90 days
        "color_actual": "#001f3f",
        "color_train": "#3D9970",
        "color_val": "#0074D9",
        "color_pred_train": "#3D9970",
        "color_pred_val": "#0074D9",
        "color_pred_test": "#FF4136",
    },
    "model": {
        "input_size": 1,  # since for now we are only using close price
        "num_lstm_layers": 2,
        "lstm_size": 32,
        "dropout": 0.2,
    },
    "training": {
        "device": "cuda",
        "batch_size": 64,
        "num_epoch": 100,
        "epoch_stop": 10,
        "learning_rate": 0.01,
        "scheduler_step_size": 40,
    }
}




SP500Data = pandas.read_csv("project-algorithmic-trading/Heroku/remoteScripts/S&P500Companies.csv")
tickers = SP500Data["Symbol"]

#tickers = ['MMM']



today = datetime.now()
next_weeks = mcal.date_range(
    mcal.get_calendar('NYSE').schedule(start_date=today, end_date=(today + relativedelta(months=1))), frequency='1D')
next_weeks = [date.strftime('%Y-%m-%d') for date in next_weeks]
next_weeks = next_weeks[1:]
next_day = next_weeks[0]



connection_string = (os.environ['HEROKU_CONN_STRING'] + "?gssencmode=disable")[8:]
connection_string = 'postgresql' + connection_string

# Establish a connection to the remote database
engine = create_engine(connection_string)
conn = engine.raw_connection()
cur = conn.cursor()


# get data from the configuration file
def get_data(ticker):

    data_query = "SELECT Close FROM backlog WHERE Ticker = {} ORDER BY Date ASC".format("'" + ticker + "'")
    date_query = "SELECT DISTINCT Date from backlog where Ticker = {} ORDER BY Date ASC".format("'" + ticker + "'")

    cur.execute(data_query)
    close_price_data = cur.fetchall()
    close_price_data = np.array(close_price_data)
    
    cur.execute(date_query)
    date_data = cur.fetchall()

    return date_data, close_price_data


class Normalization:
    def __init__(self):
        self.mu = None
        self.sd = None

    def fit_transform(self, x):
        self.mu = np.mean(x, axis=(0), keepdims=True)
        self.sd = np.std(x, axis=(0), keepdims=True)
        normalized_x = (x - self.mu) / self.sd
        return normalized_x

    def inverse_transform(self, x):
        return (x * self.sd) + self.mu


def prepare_data_x(x, window_size):
    # perform windowing
    n_row = x.shape[0] - window_size + 1
    output = np.lib.stride_tricks.as_strided(x, shape=(n_row, window_size), strides=(x.strides[0], x.strides[0]))
    return output[:-1], output[-1]


def prepare_data_y(x, window_size):
    # use the next day as label
    output = x[window_size:]
    return output


# Class to prepare data for training and LSTM model
class TimeSeriesDataset(Dataset):
    def __init__(self, x, y):
        x = np.expand_dims(x,
                           2)  # right now we have only 1 feature, so we need to convert `x` into [batch, sequence,
        # features]
        self.x = x.astype(np.float32)
        self.y = y.astype(np.float32)

    def __len__(self):
        return len(self.x)

    def __getitem__(self, idx):
        return self.x[idx], self.y[idx]


# neural network model definition
class LSTMModel(nn.Module):
    def __init__(self, input_size=1, hidden_layer_size=32, num_layers=2, output_size=1, dropout=0.2):
        super().__init__()
        self.hidden_layer_size = hidden_layer_size

        self.linear_1 = nn.Linear(input_size, hidden_layer_size)
        self.relu = nn.ReLU()
        self.lstm = nn.LSTM(hidden_layer_size, hidden_size=self.hidden_layer_size, num_layers=num_layers, batch_first=True)
        self.dropout = nn.Dropout(dropout)
        self.linear_2 = nn.Linear(num_layers * hidden_layer_size, output_size)

        self.init_weights()

    def init_weights(self):
        for name, param in self.lstm.named_parameters():
            if 'bias' in name:
                nn.init.constant_(param, 0.0)
            elif 'weight_ih' in name:
                nn.init.kaiming_normal_(param)
            elif 'weight_hh' in name:
                nn.init.orthogonal_(param)

    def forward(self, x):
        batchsize = x.shape[0]

        # layer 1
        x = self.linear_1(x)
        x = self.relu(x)

        # LSTM layer
        lstm_out, (h_n, c_n) = self.lstm(x)

        # reshape output from hidden cell into [batch, features] for `linear_2`
        x = h_n.permute(1, 0, 2).reshape(batchsize, -1)

        # layer 2
        x = self.dropout(x)
        predictions = self.linear_2(x)
        return predictions[:, -1]


# function for training LSTM model
def run_epoch(dataloader, is_training=False):
    epoch_loss = 0

    if is_training:
        model.train()
    else:
        model.eval()

    for idx, (x, y) in enumerate(dataloader):
        if is_training:
            optimizer.zero_grad()

        batchsize = x.shape[0]

        x = x.to(config["training"]["device"])
        y = y.to(config["training"]["device"])

        out = model(x)
        loss = criterion(out.contiguous(), y.contiguous())

        if is_training:
            loss.backward()
            optimizer.step()

        epoch_loss += (loss.detach().item() / batchsize)

    lr = scheduler.get_last_lr()[0]

    return epoch_loss, lr


## Predict the Next Day
check = time.time()

for i, ticker in enumerate(tickers):
    start = time.time()
    print("Working on Ticker {}, {}/500".format(str(ticker),str(i)))
    date_data, close_price_data = get_data(ticker)

    scaler = Normalization()
    normalized_close_price_data = scaler.fit_transform(close_price_data)

    data_x, data_x_unseen = prepare_data_x(normalized_close_price_data, window_size=config["data"]["window_size"])
    data_y = prepare_data_y(normalized_close_price_data, window_size=config["data"]["window_size"])

    split_index = int(data_y.shape[0] * config["data"]["train_split_size"])
    data_x_train = data_x[:split_index]
    data_x_val = data_x[split_index:]
    data_y_train = data_y[:split_index]
    data_y_val = data_y[split_index:]

    train_dataset = TimeSeriesDataset(data_x_train, data_y_train)
    train_dataloader = DataLoader(train_dataset, batch_size=config["training"]["batch_size"], shuffle=True)

    model = LSTMModel(input_size=config["model"]["input_size"], hidden_layer_size=config["model"]["lstm_size"],
                      num_layers=config["model"]["num_lstm_layers"], output_size=1, dropout=config["model"]["dropout"])
    model = model.to(config["training"]["device"])

    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=config["training"]["learning_rate"], betas=(0.9, 0.98), eps=1e-9)
    scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=config["training"]["scheduler_step_size"], gamma=0.1)


    print('{} training'.format(ticker))
    for epoch in range(config["training"]["num_epoch"]):
        loss_train, lr_train = run_epoch(train_dataloader, is_training=True)
        scheduler.step()

        print('Epoch[{}/{}] | loss train:{:.6f}| lr:{:.6f}'
              .format(epoch + 1, config["training"]["num_epoch"], loss_train, lr_train))

    model.eval()

    torch.tensor(data_x_unseen)
    x = torch.tensor(data_x_unseen).float().to(config["training"]["device"]).unsqueeze(0).unsqueeze(
        2)  # this is the data type and shape required, [batch, sequence, feature]
    prediction = model(x)
    prediction = prediction.cpu().detach().numpy()
    prediction[0] = scaler.inverse_transform(prediction[0])
    end =  time.time()
    database_write_query = "INSERT INTO model_prediction (Stock, Predicted_Close, Date, Execution_Time) VALUES ({},{},{},{})"\
        .format("'" + ticker + "'", "'" + str(prediction[0]) + "'", "'" + next_day + "'", "'" + str(end - start) + "'")
    cur.execute(database_write_query)
    conn.commit()
cur.close()
conn.close()


