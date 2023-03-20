from alpha_vantage.timeseries import TimeSeries 
import os
from pathlib import Path

os.chdir("../scripts")
from config import config_dict

ts = TimeSeries(key=config_dict["av"]["a_k"], output_format=config_dict["av"]["format"])
data, meta_data = ts.get_daily_adjusted(config_dict["av"]["symbol"], outputsize=config_dict["av"]["outputsize"])

data = data.iloc[::-1]
data = data[config_dict["av"]["fields"]]
mapping = {data.columns[0]:'open', data.columns[1]: 'close', data.columns[2]:'low', data.columns[3]: 'high',data.columns[4]:'volume'}
data = data.rename(columns=mapping)

os.chdir("..")
filepath = Path("data/SPY.csv")
data.to_csv(filepath)