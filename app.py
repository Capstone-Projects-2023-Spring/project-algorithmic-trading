import matplotlib
matplotlib.use('Agg')

from flask import Flask, request, Response, render_template
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset
from torch.utils.data import DataLoader
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
from alpha_vantage.timeseries import TimeSeries

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/render', methods=['POST'])
def render():
    config = {
        "alpha_vantage": {
            "key": "2JMCN347HZ3BU9RC",
            "symbol": "SPY",
            "outputsize": "full",
            "key_adjusted_close": "5. adjusted close",
        },
        "data": {
            "window_size": 20,
            "train_split_size": 0.80,
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
            "device": "cpu",
            "batch_size": 64,
            "num_epoch": 100,
            "learning_rate": 0.01,
            "scheduler_step_size": 40,
        }
    }

    # get data from the configuration file
    def get_data(config):
        ts = TimeSeries(key=config["alpha_vantage"]["key"])
        data, meta_data = ts.get_daily_adjusted(config["alpha_vantage"]["symbol"],
                                                outputsize=config["alpha_vantage"]["outputsize"])

        date_data = [date for date in data.keys()]
        date_data.reverse()

        close_price_data = [float(data[date][config["alpha_vantage"]["key_adjusted_close"]]) for date in data.keys()]
        close_price_data.reverse()
        close_price_data = np.array(close_price_data)

        num_data_points = len(date_data)
        display_date_range = "from " + date_data[0] + " to " + date_data[num_data_points - 1]
        print("Number data points", num_data_points, display_date_range)

        return date_data, close_price_data, num_data_points, display_date_range

    date_data, close_price_data, num_data_points, display_date_range = get_data(config)

    # class with functions to normalize the data for more accurate predictions

    class Normalization():
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

    scaler = Normalization()
    normalized_close_price_data = scaler.fit_transform(close_price_data)

    # prep for data training

    def prepare_data_x(x, window_size):
        # perform windowing
        n_row = x.shape[0] - window_size + 1
        output = np.lib.stride_tricks.as_strided(x, shape=(n_row, window_size), strides=(x.strides[0], x.strides[0]))
        return output[:-1], output[-1]

    def prepare_data_y(x, window_size):
        # use the next day as label
        output = x[window_size:]
        return output

    data_x, data_x_unseen = prepare_data_x(normalized_close_price_data, window_size=config["data"]["window_size"])
    data_y = prepare_data_y(normalized_close_price_data, window_size=config["data"]["window_size"])

    # split dataset into training and validation sets

    split_index = int(data_y.shape[0] * config["data"]["train_split_size"])
    data_x_train = data_x[:split_index]
    data_x_val = data_x[split_index:]
    data_y_train = data_y[:split_index]
    data_y_val = data_y[split_index:]

    # Class to prepare data for training and LSTM model
    class TimeSeriesDataset(Dataset):
        def __init__(self, x, y):
            x = np.expand_dims(x,
                               2)  # right now we have only 1 feature, so we need to convert `x` into [batch, sequence, features]
            self.x = x.astype(np.float32)
            self.y = y.astype(np.float32)

        def __len__(self):
            return len(self.x)

        def __getitem__(self, idx):
            return (self.x[idx], self.y[idx])

    # prepare and shuffle data

    train_dataset = TimeSeriesDataset(data_x_train, data_y_train)
    val_dataset = TimeSeriesDataset(data_x_val, data_y_val)

    train_dataloader = DataLoader(train_dataset, batch_size=config["training"]["batch_size"], shuffle=True)
    val_dataloader = DataLoader(val_dataset, batch_size=config["training"]["batch_size"], shuffle=True)

    split_index = int(data_y.shape[0] * config["data"]["train_split_size"])
    data_x_train = data_x[:split_index]
    data_x_val = data_x[split_index:]
    data_y_train = data_y[:split_index]
    data_y_val = data_y[split_index:]

    # neural network model definition

    class LSTMModel(nn.Module):
        def __init__(self, input_size=1, hidden_layer_size=32, num_layers=2, output_size=1, dropout=0.2):
            super().__init__()
            self.hidden_layer_size = hidden_layer_size

            self.linear_1 = nn.Linear(input_size, hidden_layer_size)
            self.relu = nn.ReLU()
            self.lstm = nn.LSTM(hidden_layer_size, hidden_size=self.hidden_layer_size, num_layers=num_layers,
                                batch_first=True)
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

    #     user_input = request.form['user_input']
    #
    #     databaseConnection = DatabaseThread(os.environ['RENDER_HOST'], os.environ['RENDER_DB_NAME'],
    #                                         os.environ['RENDER_DB_USER'], os.environ['RENDER_DB_PASSWORD'])
    #     # Do something with user_input
    #     queryResult = databaseConnection.execute_query(user_input)
    #     print(queryResult)

    model = LSTMModel(input_size=config["model"]["input_size"], hidden_layer_size=config["model"]["lstm_size"],
                      num_layers=config["model"]["num_lstm_layers"], output_size=1,
                      dropout=config["model"]["dropout"])
    model.load_state_dict(torch.load("S&P500_model"))

    predicted_train = np.array([])

    for idx, (x, y) in enumerate(train_dataloader):
        x = x.to(config["training"]["device"])
        out = model(x)
        out = out.cpu().detach().numpy()
        predicted_train = np.concatenate((predicted_train, out))

    # predict on the validation data, to see how the model does

    predicted_val = np.array([])

    for idx, (x, y) in enumerate(val_dataloader):
        x = x.to(config["training"]["device"])
        out = model(x)
        out = out.cpu().detach().numpy()
        predicted_val = np.concatenate((predicted_val, out))

    data_y_train_pred = np.zeros(num_data_points)
    data_y_val_pred = np.zeros(num_data_points)

    data_y_train_pred[
    config["data"]["window_size"]:split_index + config["data"]["window_size"]] = scaler.inverse_transform(
        predicted_train)
    data_y_val_pred[split_index + config["data"]["window_size"]:] = scaler.inverse_transform(predicted_val)

    data_y_train_pred = np.where(data_y_train_pred == 0, None, data_y_train_pred)
    data_y_val_pred = np.where(data_y_val_pred == 0, None, data_y_val_pred)

    # plot data
    fig = figure(figsize=(25, 5), dpi=80)
    fig.patch.set_facecolor((1.0, 1.0, 1.0))
    plt.plot(date_data, close_price_data, label="Actual prices", color=config["plots"]["color_actual"])
    plt.plot(date_data, data_y_train_pred, label="Predicted prices (train)",
             color=config["plots"]["color_pred_train"])
    plt.plot(date_data, data_y_val_pred, label="Predicted prices (validation)",
             color=config["plots"]["color_pred_val"])
    plt.title("Compare predicted prices to actual prices")
    xticks = [date_data[i] if ((i % config["plots"]["xticks_interval"] == 0 and (num_data_points - i) >
                                config["plots"]["xticks_interval"]) or i == num_data_points - 1) else None for i in
              range(num_data_points)]  # make x ticks nice
    x = np.arange(0, len(xticks))
    plt.xticks(x, xticks, rotation='vertical')
    plt.grid(visible=None, which='major', axis='y', linestyle='--')
    plt.legend()
    plt.savefig('static/images/S&P500plot.png', dpi=fig.dpi, bbox_inches='tight')

    return render_template('plot.html', url='/static/images/S&P500plot.png')


if __name__ == '__main__':
    app.run()
