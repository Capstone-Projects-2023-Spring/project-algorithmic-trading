import numpy as np
import pandas as pd
import requests
import json
import time
import os


def get_time_series_data(symbol):
    api_key = os.environ['ALPHA_VANTAGE_KEY']
    base_url = 'https://www.alphavantage.co/query?'
    params = {'function': 'TIME_SERIES_DAILY_ADJUSTED', 'symbol': stock, 'apikey': api_key, 'outputsize': 'full'}

    response = None
    max_retries = 5
    retries = 0

    while retries < max_retries:
        response = requests.get(base_url, params=params)

        if 'Time Series (Daily)' in response.json():
            return json.loads(response.text)['Time Series (Daily)']
        else:
            retries += 1
            print("API call failed, retrying: attempt " + str(retries) + "/" + str(max_retries))
            time.sleep(5)  # wait for 5 seconds before retrying

    raise Exception(f'Failed to get time series data for symbol {symbol}')

# columns = ["Ticker", "Date", "Open", "Close", "Low", "High", "Volume"]
# Ticker, Date, Open, Close, Low, High, Volume


# Define list of stocks to retrieve historical data for
SP500Data = pd.read_csv("S&P500Companies.csv")
stocks = SP500Data["Symbol"]


databaseInformation = []

count = 0
# Loop through all stocks
for stock in stocks:
    count += 1
    print("Working on " + stock + " count: " + str(count) + "/500")
    time_series_data = get_time_series_data(stock)

    # Loop through each day's data and insert into database
    for date, daily_data in time_series_data.items():
        open_price = float(daily_data['1. open'])
        high_price = float(daily_data['2. high'])
        low_price = float(daily_data['3. low'])
        close_price = float(daily_data['4. close'])
        volume = int(daily_data['6. volume'])
        databaseInformation.append([stock, date, open_price, close_price, low_price, high_price, volume])
    time.sleep(5)

arr = np.asarray(databaseInformation)
pd.DataFrame(arr).to_csv('../../stockData.csv', index=False)
