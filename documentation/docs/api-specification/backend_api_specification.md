---
title: Backend API Specification
sidebar_position: 1
description: The backend API calls
---

The backend uses the django framework.  As such, each app has its own associated API endpoints.  API requests are made from our frontend [```https://jalzeidi.github.io/tradester-frontend/```](https://jalzeidi.github.io/tradester-frontend/) to our backend, which is currently ```https://tradester-backend.onrender.com/```. I will refer to this in the URL requests as ```BASE```.  Each API request uses the same BASE, and is filtered to different apps via the django framework.  The filtering is done via the ```urls.py``` files in each app. All apps are in the ```tradester_backend``` folder, and each has its own ```urls.py``` that filters the url, either to another app or to a corresponding function, found in the ```views.py``` file of that app.  The first app is ```tradester_backend```.  

NOTE: for brevity, this was not added in the API specifications, but every API request must include an Authorization header with bearer TOKEN, like this:
```json
    'authorizations': 'bearer <token>'
```
This token can be retrieved through the auth app API.  


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
        "purchase total":orderTotal
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
        "purchase total":orderTotal
    }       
    ```
#### 'BASE/tradester/display_portfolio/'
- METHOD: GET  
- Query PARAMETERS:
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
#### 'BASE/tradester/update_order/'  
- METHOD: GET  
- PARAMETERS: None
- RETURN TYPE: json/application  
- RETURN:  
```json
    "orders": [list of orders]
```
#### 'BASE/tradester/update_order/<str:_stock_symbol>/<str:_order_type>/<int:_quantity>/<str:_price>/'
- METHOD: POST  
- PARAMETERS:   
    - string: _stock_symbol
    - string: _order_type
    - integer: _quantity
    - string: _price
- RETURN TYPE: json/application  
- RETURN:  
```json
    "response": "new entry saved"
```
#### 'BASE/tradester/token/'
- METHOD: POST  
- PARAMETERS: None
- body:
```json
    {
        "username":username,
        "password":password
    }
```
- RETURN TYPE: json/application  
- RETURN:  
    - 200 
    - 404 
#### 'BASE/tradester/delete_user_account/'
- METHOD: GET  
- PARAMETERS: None
- RETURN TYPE: json/application  
- RETURN:  200

# app: friendship  
#### 'BASE/friendship/find_user_by_username/'  
- METHOD: GET  
- QUERY PARAMETERS: 
    - String: username
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
        {
            'username': username, 
            'user_id': user_id
        }
    ```
    - status 404

#### 'BASE/friendship/send_friend_request/'   
- METHOD: POST  
- QUERY PARAMETERS: None
- DATA: 
```json
    "receiver_user_id": receiver_user_id
```
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
        {
            'username': username, 
            'user_id': user_id
        }
    ```
    - status 500 
    ```json
        {
            "error": errorMessage
        }
    ```
#### 'BASE/friendship/get_friend_requests/'  
- METHOD: GET  
- PARAMETERS: None
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
        [
            {
                "user_id": user_id,
                "username": username
            }, {}
        ]
    ```

#### 'BASE/friendship/respond_friend_request/'  
- METHOD: POST  
- PARAMETERS: None
- DATA: 
```json
    {
        "sender_user_id": sender_user_id,
        "response":response
    }
```
- RETURN TYPE: json/application  
- RETURN:  
    - status 200

    - status 500 
    ```json
        {
            "error": errorMessage
        }
    ```
#### 'BASE/friendship/get_friends/'  
- METHOD: GET  
- PARAMETERS: None
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
        [
            {
                "user_id": user_id,
                "username": username
            }, {}
        ]
    ```
#### 'BASE/friendship/unfriend/'  
- METHOD: POST  
- PARAMETERS: None
- DATA: 
```json
    {
        "user_id":user_id
    }
```
- RETURN TYPE: json/application  
- RETURN:  
    - status 200


#### 'BASE/friendship/check_friendship/'  
- METHOD: GET  
- QUERY PARAMETERS:
    - String: "user_id"
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
    {
        "is_friend":is_friend
    }
    ```  

#### 'BASE/friendship/check_outgoing_request/'  
- METHOD: GET  
- QUERY PARAMETERS:
    - String: "user_id"
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
        {
            "outgoing_request": boolean
        }
    ```  

#### 'BASE/friendship/check_incoming_request/'  
- METHOD: GET  
- QUERY PARAMETERS:
    - String: "user_id"
- RETURN TYPE: json/application  
- RETURN:  
    - status 200
    ```json
    {
        "incoming_request":boolean
    }
    ``` 

#### 'BASE/friendship/revoke_friend_request/'  
- METHOD: DELETE  
- QUERY PARAMETERS: None
- DATA:
```json
    "user_id": user_id
```
- RETURN TYPE: json/application  
- RETURN:
    - 200

# app: auth  
#### 'BASE/auth  

# app: heroku_backend  
#### 'BASE/heroku_backend