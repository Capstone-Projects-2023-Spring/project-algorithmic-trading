from polygon import RESTClient
import numpy as np
import pandas
import time
import datetime


SP500Data = pandas.read_csv("S&P500Companies.csv")
sp500Tickers = SP500Data["Symbol"]


columns = ["Ticker", "Date", "Open", "Close", "Low", "High", "Volume"]
stockData = pandas.DataFrame(columns=columns)

client = RESTClient(api_key="<KEY>")


data = []
# List Aggregates (Bars)
# for ticker in sp500Tickers:
ticker = 'AAPL'
bars = client.get_aggs(ticker=ticker, multiplier=1, timespan="day", from_="1999-11-01", to="2023-03-17",
                                     limit=50000)

for bar in bars:
    data.append([ticker, datetime.datetime.fromtimestamp(bar.timestamp / 1000.0, tz=datetime.timezone.utc).date(),
                 bar.open, bar.close, bar.low, bar.high, bar.volume])
# time.sleep(20)

# df = pandas.DataFrame(data=np.array(data),
#                       index=np.arange(len(data)),
#                       columns=["Ticker", "Date", "Open", "Close", "Low", "High", "Volume"])

arr = np.asarray(data)
pandas.DataFrame(arr).to_csv('stockData.csv', index=False)
