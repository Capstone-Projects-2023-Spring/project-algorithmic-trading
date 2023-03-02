"""
data_handling.py

This Python module holds functions to perform operations on data
such as loading data to the database and processing the data. These
functions are called by views when the backend receives HTTP requests.

Functions: fetch_stock_data()
"""
import csv
from io import StringIO

from alpha_vantage.timeseries import TimeSeries
import requests
from tradester.models import Stock
#import pandas as pd

def fetch_stock_data():
    #get list of s&p 500 stocks
    url = 'https://datahub.io/core/s-and-p-500-companies-financials/r/constituents.csv'
    response = requests.get(url)
    decoded_content = response.content.decode('utf-8')
    reader = csv.reader(StringIO(decoded_content))
    next(reader)  # skip header row
    for row in reader:
        stock_symbol = row[0]
        if not Stock.objects.filter(stock_symbol=stock_symbol).exists():
            # get data from Alpha Vantage
            api_key = '2JMCN347HZ3BU9RC'
            url = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={stock_symbol}&apikey={api_key}'
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                # create stock instance with data from API
                stock = Stock(
                    stock_symbol=stock_symbol,
                    company_name=data.get('Name', ''),
                    sector=data.get('Sector', ''),
                    current_price=data.get('Price', ''),
                    market_cap=data.get('MarketCapitalization', ''),
                    dividend_yield=data.get('DividendYield', ''),
                    earnings_per_share=data.get('EPS', ''),
                    price_to_earnings_ratio=data.get('PERatio', ''),
                    beta=data.get('Beta', ''),
                    high_52=data.get('52WeekHigh', ''),
                    low_52=data.get('52WeekLow', ''),
                    avg_daily_volume=data.get('AverageDailyVolume', '')
                )
                stock.save()

    # make call to AlphaVantage for stock data
    #ts = TimeSeries(key="2JMCN347HZ3BU9RC")#, output_format='pandas')
