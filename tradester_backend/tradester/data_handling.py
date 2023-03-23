"""
data_handling.py

This Python module holds functions to perform operations on data
such as loading data to the database and processing the data. These
functions are called by views when the backend receives HTTP requests.

"""
import csv
from io import StringIO

from alpha_vantage.timeseries import TimeSeries
import requests
from tradester.models import Stock
#import pandas as pd

def fetch_daily_OHLC():
    """
    This calls the Polygon API to return data on the entire stock/equities market and load it to the database. 
    Updates automatically each day.   
    """

    # API endpoint URL for batch stock quotes
    url = f'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=6B07KCTp2RUNh2zOybygjNYppflkxS_1'

    # Send request to API and retrieve data
    response = requests.get(url)
    data = response.json()
    print(data)
    return data
