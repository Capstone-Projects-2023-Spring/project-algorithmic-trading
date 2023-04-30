---
title: Backend API Specification
sidebar_position: 1
description: The backend API calls
---

The backend uses the django framework.  As such, each app has its own associated API endpoints.  API requests are made from our frontend [```https://jalzeidi.github.io/tradester-frontend/```](https://jalzeidi.github.io/tradester-frontend/) to our backend, which is currently ```https://tradester-backend.onrender.com/```. I will refer to this in the URL requests as ```BASE```.  Each API request uses the same BASE, and is filtered to different apps via the django framework.  The filtering is done via the ```urls.py``` files in each app. All apps are in the ```tradester_backend``` folder, and each has its own ```urls.py``` that filters the url, either to another app or to a corresponding function, found in the ```views.py``` file of that app.  The first app is ```tradester_backend```.  


- 'BASE/admin/doc/'
    - go to the documentation, locked and visible to administrators
- 'BASE/tradester/'
    - go to the tradester functions
- 'BASE/friendship/'
    - go to the friendship functions
- 'BASE/auth/'
    - go to authentication functions
- 'BASE/admin/'
    - go to admin login
- 'BASE/heroku_connection/'
    - go to heroku backend functions

# app: tradester  
#### 'BASE/tradester/get_stock_data/<str:_stock_symbol>/'  
- METHOD: GET  
- PARAMETERS: 
    - string: _stock_symbol  
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        'date': entry.date,
        '1. open': entry.open,
        '4. close': entry.close,
        '3. low': entry.low,
        '2. high': entry.high,
    }
    ```
#### 'BASE/tradester/get_stock_data_candle/<str:_stock_symbol>/'
- METHOD: GET  
- PARAMETERS: 
    - string: _stock_symbol  
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        'stock_symbol': stock.stock_symbol, 
        'current_price': stock.current_price, 
        'open': stock.daily_open_price,
        'high': stock.daily_high, 
        'low': stock.daily_low, 
        'timestamp': stock.timestamp,
        'num_transactions': stock.daily_num_transactions, 
        'volume': stock.daily_volume, 
        'vwap': stock.daily_vwap
    }       
    ```
#### 'BASE/tradester/save_investment/'
- METHOD: GET  
- PARAMETERS: 
    - string: amount  
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        'amount': float
    }       
    ```
#### 'BASE/tradester/purchase_stock/'
- METHOD: GET  
- PARAMETERS: as queries
    - integer: quantity 
    - float: price
    - string: stock  
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        'purchase total':orderTotal
    }       
    ```
#### 'BASE/tradester/sell_stock/'
- METHOD: GET  
- PARAMETERS: as queries
    - integer: quantity 
    - float: price
    - string: stock  
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        'purchase total':orderTotal
    }       
    ```
#### 'BASE/tradester/display_portfolio/'
- METHOD: GET  
- PARAMETERS: as queries
    - string: user_id 
- RETURN TYPE: json/application  
- RETURN:  
    ```json
    {
        "balance":float, 
        "ticker": {
            "quantity_total":integer,
            "purchase_value":float,
            "close_values":[{
                get_close_past_week(ticker),
                get_latest_close_prediction(ticker)
            }]
            "purchases":[{
            'timestamp': date
            'price': float
            'quantity': integer
            }],
            "real_ticker":{
            "real_value": float
            },
            "price": float
            },
            "total_purchase_value": float
            "total_real_value": float
        }
    ```
#### 'BASE/tradester/update_stocks_daily/'
#### 'BASE/tradester/update_order/'
#### 'BASE/tradester/update_order/<str:_stock_symbol>/<str:_order_type>/<int:_quantity>/<str:_price>/'
#### 'BASE/tradester/token/'
#### 'BASE/tradester/delete_user_account/'

# app: friendship  
# app: auth 
# app: heroku_backend  