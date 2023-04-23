import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

import psycopg2
import pandas as pd
from sqlalchemy import create_engine
import io
import time
import os
import requests
import json

import datetime
import pandas_market_calendars as mcal
nyse = mcal.get_calendar('NYSE')
today = datetime.date.today()

valid_day = nyse.valid_days(start_date=today, end_date=today)

if len(valid_day == 0 or (datetime.datetime.today().weekday() >= 5)):
    exit()


connection_string = (os.environ['DATABASE_URL'] + "?gssencmode=disable")[8:]
connection_string = 'postgresql' + connection_string

# Establish a connection to the remote database
engine = create_engine(connection_string)
conn = engine.raw_connection()
cur = conn.cursor()

# Insert data into the database
cur.execute("SELECT date from backlog ORDER BY date DESC LIMIT 1")
last_data_date, = cur.fetchone()

print("The last date with data in the database: ", last_data_date)


SP500Data = pd.read_csv("Heroku/dbPopulation/S&P500Companies.csv")
stocks = SP500Data["Symbol"]




def get_time_series_data(symbol):
    api_key = os.environ['ALPHA_VANTAGE_KEY']
    base_url = 'https://www.alphavantage.co/query?'
    params = {'function': 'TIME_SERIES_DAILY_ADJUSTED', 'symbol': stock, 'apikey': api_key, 'outputsize': 'full'}

    response = None
    max_retries = 5
    retries = 0
    stock_information = []
    while retries < max_retries:
        response = requests.get(base_url, params=params)
        if 'Time Series (Daily)' in response.json():
            for date, daily_data in json.loads(response.text)['Time Series (Daily)'].items():
                open_price = float(daily_data['1. open'])
                high_price = float(daily_data['2. high'])
                low_price = float(daily_data['3. low'])
                close_price = float(daily_data['4. close'])
                volume = int(daily_data['6. volume'])
                stock_information.append([stock, date, open_price, close_price, low_price, high_price, volume])
            time.sleep(5)
            stock_dataframe = pd.DataFrame(stock_information,
                                           columns=['ticker', 'date', 'open', 'close', 'low', 'high', 'volume'])
            stock_dataframe['date'] = pd.to_datetime(stock_dataframe['date']).dt.date

            return stock_dataframe
        else:
            retries += 1
            print("API call failed, retrying: attempt " + str(retries) + "/" + str(max_retries))
            time.sleep(5)  # wait for 5 seconds before retrying

    raise Exception(f'Failed to get time series data for symbol {symbol}')

cur.execute("""CREATE TABLE IF NOT EXISTS daily_updates_temp
(
    ticker varchar,
    date DATE NOT NULL,
    open float,
    close float,
    low float,
    high float,
    volume float
);""")
conn.commit()

count = 0
# all_stock_data = pd.DataFrame(columns=['ticker', 'date', 'open', 'close', 'low', 'high', 'volume'])
for stock in stocks:
    count += 1
    print("Working on " + stock + " count: " + str(count) + "/500")
    stock_data = get_time_series_data(stock)
    stock_data = stock_data[(stock_data['date'] > last_data_date)]
    output = io.StringIO()
    stock_data.to_csv(output, sep='\t', header=False, index=False)
    output.seek(0)
    contents = output.getvalue()
    cur.copy_from(output, 'daily_updates_temp', null="")
    conn.commit()

cur.execute("""Insert into backlog select * From daily_updates_temp ON CONFLICT DO NOTHING;""")
cur.execute("""DROP TABLE daily_updates_temp;""")
conn.commit()

# Theoritically just importing the script here should make it run
import remoteRunningScript

#import subprocess
#subprocess.run(['python', 'Heroku/remoteScripts/remoteRunningScript'])