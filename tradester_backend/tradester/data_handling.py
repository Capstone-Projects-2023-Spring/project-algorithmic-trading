"""
data_handling.py

This Python module holds functions to perform operations on data
such as loading data to the database and processing the data. These
functions are called by views when the backend receives HTTP requests.

"""
import csv
from io import StringIO
import os

import requests
from tradester.models import Stock
#import pandas as pd

key = os.environ.get('DB_CONN_DAILY', default='')

def fetch_daily_OHLC():
    """
    This calls the Polygon API to return data on the entire stock/equities market and load it to the database. 
    Updates automatically each day.   
    """

    # API endpoint URL for batch stock quotes
    url = f'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={key}'

    # Send request to API and retrieve data
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        data = {'error': f'unable to retrieve daily data'}
    return data
