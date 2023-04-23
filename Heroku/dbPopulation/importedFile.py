import datetime
import pandas_market_calendars as mcal
nyse = mcal.get_calendar('NYSE')
today = datetime.date.today()

valid_day = nyse.valid_days(start_date=today, end_date=today)

if len(valid_day == 0 or (datetime.datetime.today().weekday() >= 5)):
    print("It is a weekend or a stock holiday")