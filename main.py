from polygon import RESTClient
import numpy as np
import pandas
import time
from http.client import *
from typing import cast
import json
from datetime import date, timedelta, datetime, timezone

# SP500Data = pandas.read_csv("S&P500Companies.csv")
# sp500Tickers = SP500Data["Symbol"]
#
# columns = ["Ticker", "Date", "Open", "Close", "Low", "High", "Volume"]

client = RESTClient(api_key="__3CyBNP7Owog_QUGfucMermNvGg2RvO")

data = []
ticker = 'AAPL'


# response = cast(
#     HTTPResponse,
#     client.get_aggs(
#         ticker=ticker,
#         multiplier=1,
#         timespan="minute",
#         from_="1999-11-01",
#         to="2023-03-17",
#         limit=50000,
#         raw=True),
# )

# conn = HTTPSConnection("api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/1999-12-31/2023-01-09?adjusted=true"
#                        "&sort=asc&limit=50000&apiKey=__3CyBNP7Owog_QUGfucMermNvGg2RvO")
# conn.request("GET", "/")
# r1 = conn.getresponse()


# print(response.status, response.reason)
# data1 = response.read()  # This will return entire content.

def date_range(start, end, intv):
    start = datetime.strptime(start, "%Y-%m-%d")
    end = datetime.strptime(end, "%Y-%m-%d")
    diff = (end - start) / intv
    for i in range(intv):
        yield (start + diff * i).strftime("%Y-%m-%d")
    yield end.strftime("%Y-%m-%d")


# Will cause issues if list size is odd
date_list = date_range("1999-11-01", "2023-03-17", 10)
it = iter(date_list)
for x in it:
    print(x + next(it))
    # bars = client.get_aggs(ticker=ticker, multiplier=1, timespan="day", from_=x, to=next(it),
    #                        limit=50000)
    # for bar in bars:
    #     data.append([ticker, datetime.fromtimestamp(bar.timestamp / 1000.0, tz=timezone.utc).date(),
    #                  bar.open, bar.close, bar.low, bar.high, bar.volume])
    # time.sleep(20)



arr = np.asarray(data)
pandas.DataFrame(arr).to_csv('stockData.csv', index=False)
