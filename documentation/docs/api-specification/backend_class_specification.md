---
title: Backend Class Description
sidebar_position: 1
description: The backend functions and classes are listed here.
--- 

The backend uses the django framework.  As such, each app is stored as a file inside the ```tradeseter_backend``` folder.  All classes are found inside the views.py files of each app.  There also exist functions independent of classes, some in a views.py file of the corresponding app, and a few in the ```tradester_backend/functions``` folder.  This document lists those folders in alphabetical order.  

```tradester_backend/tradester_backend``` is the actual 'root' of the backend.  In it is a settings.py file which holds information required for some of the classes to function.  It also holds a urls.py file, in which specifies url extensions to each of these apps.  Django filters each API-as-url request to our backend (from our frontend) through this urls.py file to each app.  You can view specifications for these API calls in the Backend API Specification document.  

Almost every class inherits a class from ```rest_framework``` library.  This automates some processes for us, but most importantly it allows for token passing for authentification and turns each class into a function corresponding to an API call.  If a class begins with ```permission_classes = (IsAuthenticated,)```, this means that the functionality of the class cannot be accessed without the user providing the HTTP header ```Authentication: Bearer <token>```, where ```<token>``` is a valid token returned to the user at login.  

# **App: auth**  

The **auth** app controls authentication for users of tradester.  

### auth/views.py  
Classes and methods in this file perform basic authentication functionality.

**class RegisterUser(generics.CreateAPIView)**  
- Purpose:
  - this class inherits generics.CreateAPIView from rest_framework.  
- Fields:
  - None

**class LogoutView(APIView)**  
- Purpose: 
  - Register the user making the API call. Inherits from APIView class in rest_framework.
- Fields:
  - None

- **LogoutView.post**
  - Purpose: 
    - Log the user out
  - Precondition: 
    - User is logged in
  - Postcondition:
    - User is logged out
  - Parameters: 
    - request object
  - Output:  
    - Response object with status code 200
  - Error:
    - Bad Request.  Requested user is not logged in  


### auth/validators.py  
Classes and methods in this file perform validation of user input in authentication API calls. 

**class MinimumDigitsValidator**  
  - Purpose:  
    - Governs validation of minimum values for authentication.
  - fields: 
    - Integer: min_digits [default: 1]

  - **MinimumDigitsValidator.__init__( min_digits=1)**
    - Purpose:
      - Initialize the class and set min_digits value
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - Integer: min_digits [default: 1]
    - Output:  
      - None
    - Error:
      - None  

  - **MinimumDigitsValidator.validate( password, user=None)**
    - Purpose:
      - Validates that the user has provided the minimum digits to an input box for authentication. 
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - String: password
      - User Object: None
    - Output:  
      - None
    - Error:
      - ValidationError: user did not provide minimum digits  

  - **MinimumDigitsValidator.get_help_text()**
    - Purpose:
      - Validates that the user has provided the minimum digits to an input box for authentication. 
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - None
    - Output:  
      - String: message indicating required digit count
    - Error:
      - None

# **App: friendship**  

### friendship/views.py  

Classes and methods in this file perform social functionality.

**class FindUserByUsername(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class SendFriendRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class GetFriendRequests(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class RespondFriendRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class GetFriends(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class Unfriend(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class CheckFriendship(APIView)** 
- Purpose:
  - inherits APIView from rest_framework  

**class CheckOutgoingRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class CheckIncomingRequest(APIView)**  
- Purpose:
  - 
  - inherits APIView from rest_framework 
-fields: 
  - None
  - **CheckIncomingRequest.get**  
    - Purpose:
      - delete the friend request from the database
    - Precondition: 
      - user is logge in
    - Postcondition: 
      - friend request is deleted
    - Parameters: 
      - Request Object: request
    - Output:  
      - Response Object with status code 200
    - Error:
      - None

**class RevokeRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework
  - Allow a user to revoke a friend request.
- fields: 
  - None
  - **RevokeRequest.delete**  
    - Purpose:
      - delete the friend request from the database
    - Precondition: 
      - user is logge in
    - Postcondition: 
      - friend request is deleted
    - Parameters: 
      - Request Object: request
    - Output:  
      - Response Object with status code 200
    - Error:
      - None  


# **App: functions**  
# **App: heroku_connection**  
# **App: tradester**  

**Purpose**

This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details.

**Requirements**

In addition to the general documentation requirements the Design Document - Part II API will contain:

General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference.

**For each class define the data fields, methods.**

The purpose of the class.

The purpose of each data field.

The purpose of each method

Pre-conditions if any.

Post-conditions if any.

Parameters and data types

Return value and output variables

Exceptions thrown\* (PLEASE see note below for details).

An example of an auto-generated and then augmented API specification is here ([Fiscal Design Document 2\_API.docx](https://templeu.instructure.com/courses/106563/files/16928898?wrap=1 "Fiscal Design Document 2_API.docx") )

This group developed their API documentation by hand ([Design Document Part 2 API-1\_MovieMatch.docx](https://templeu.instructure.com/courses/106563/files/16928899?wrap=1 "Design Document Part 2 API-1_MovieMatch.docx") )

\*At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User’s Manual.

<a id="main"></a>

# Algorithmic Trading Python Class Documentation
<a id="main.Thread"></a>

## Thread 

```python
class Thread(threading.Thread)
```

Base thread class that other threads inherit from.

<a id="main.Thread.start"></a>

#### start

```python
def start()
```

Start the thread's activity.

It must be called at most once per thread object. It arranges for the object's  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method to be invoked in a separate thread of control.

This method will raise a  [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "RuntimeError")  if called more than once on the same thread object.

<a id="main.Thread.run"></a>

#### run

```python
def run()
```

Method representing the thread's activity.

You may override this method in a subclass. The standard  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method invokes the callable object passed to the object's constructor as the  _target_  argument, if any, with positional and keyword arguments taken from the  _args_  and  _kwargs_  arguments, respectively.

Using list or tuple as the  _args_  argument which passed to the  [`Thread`](https://docs.python.org/3/library/threading.html#threading.Thread "threading.Thread")  could achieve the same effect.

<a id="main.Thread.join"></a>

#### join

```python
def join()
```

Wait until the thread terminates. This blocks the calling thread until the thread whose  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  method is called terminates either normally or through an unhandled exception or until the optional timeout occurs.

When the  _timeout_  argument is present and not  `None`, it should be a floating point number specifying a timeout for the operation in seconds (or fractions thereof). As  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  always returns  `None`, you must call  [`is_alive()`](https://docs.python.org/3/library/threading.html#threading.Thread.is_alive "threading.Thread.is_alive")  after  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  to decide whether a timeout happened if the thread is still alive, the  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  call timed out.

When the  _timeout_  argument is not present or  `None`, the operation will block until the thread terminates.

A thread can be joined many times.

[`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  raises a  [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "RuntimeError")  if an attempt is made to join the current thread as that would cause a deadlock. It is also an error to  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  a thread before it has been started and attempts to do so raise the same exception.

<a id="main.Thread.is_alive"></a>

#### is\_alive

```python
def is_alive()
```

Return whether the thread is alive.

This method returns  `True`  just before the  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method starts until just after the  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method terminates. The module function  [`enumerate()`](https://docs.python.org/3/library/threading.html#threading.enumerate "threading.enumerate")  returns a list of all alive threads.

<a id="main.DatabaseThread"></a>

## DatabaseThread 

```python
class DatabaseThread(Thread)
```

Thread that manages connecting to and querying the database.

<a id="main.DatabaseThread.__init__"></a>

#### \_\_init\_\_

```python
def __init__(database_url: str, database_password: str, server_ip: str)
```

Initializes the database thread.

**Arguments**:

- `database_url` _str_ - The URL of the database to connect to.
- `database_password` _str_ - The password to use for the database connection.
- `server_ip` _str_ - The IP address of the server to connect to.

<a id="main.DatabaseThread.execute_query"></a>

#### execute\_query

```python
def execute_query(query: str) -> List[Tuple]
```

Executes a query on the database.

**Arguments**:

- `query` _str_ - The SQL query to execute.
  

**Returns**:

  A list of tuples containing the query results.

<a id="main.DatabaseThread.notify_website"></a>

#### notify\_website

```python
def notify_website()
```

Thread is connected to website with websocket, after query has been run to update the database, sends
notification for page to refresh and display new data.

<a id="main.UserThread"></a>

## UserThread 

```python
class UserThread(Thread)
```

Thread that handles requests for users.

<a id="main.UserThread.__init__"></a>

#### \_\_init\_\_

```python
def __init__(username: str, password: str, quantconnect_username: str,
             quantconnect_password: str)
```

Initializes the user thread.

**Arguments**:

- `username` _str_ - The username of the user.
- `password` _str_ - The password of the user.
- `quantconnect_username` _str_ - The QuantConnect username of the user.
- `quantconnect_password` _str_ - The QuantConnect password of the user.

<a id="main.UserThread.get_portfolio"></a>

#### get\_portfolio

```python
def get_portfolio() -> Dict[str, float]
```

Gets current portfolio for user from QuantConnect API, takes amount of holdings in all stocks and converts
current value to percentage of all holdings to store in portfolio dictionary.

**Returns**:

  A dictionary containing the user's portfolio.

<a id="main.UserThread.receive_strategy"></a>

#### receive\_strategy

```python
def receive_strategy()
```

Based on selected strategy for user, Strategy is gathered from strategy thread.  If there are any changes to current strategy, trades are requested through the **requestTrade()** function.

<a id="main.UserThread.request_trade"></a>

#### request\_trade

```python
def request_trade()
```

Using QuantConnection API, trades are performed until current portfolio matches portfolio recieved from strategy thread.
As each API call is made, thread waits until confirmation of trade is completed before next trade is initiated for current user.
If trade fails, a new trade will instead be requested to move money into a money market account until next trade request is made, at which point the stocks in portfolio will attempt to be purchased again

<a id="main.UserThread.update_portfolio"></a>

#### update\_portfolio

```python
def update_portfolio()
```

Main task for thread, initially calls **getPortfolio()** to store current holdings in thread, then calls **recieveStrategy** to determine if updates must be made.

<a id="main.StrategyThread"></a>

## StrategyThread 

```python
class StrategyThread(Thread)
```

Abstract class which makes the necessary calls to get and process information to inform certain strategies

<a id="main.StrategyThread.__init__"></a>

#### \_\_init\_\_

```python
def __init__(alpha_vantage_api_key: str)
```

Initializes the strategy thread.

**Arguments**:

- `alpha_vantage_api_key` _str_ - The API key to use for Alpha Vantage.

<a id="main.StrategyThread.unpack_parameters"></a>

#### unpack\_parameters

```python
def unpack_parameters()
```

Parameters passed to each of the threads that implement this class will be different, but all parameters will be passed in by dictionary.  Takes elements of key;value pairs and update local variables.

<a id="main.StrategyThread.receive_stock_data"></a>

#### receive\_stock\_data

```python
def receive_stock_data()
```

Makes API call to AlphaVantage will APIKey to gather stock information on stocks relevant to Strategy,

<a id="main.SP500Strategy"></a>

## SP500Strategy 

```python
class SP500Strategy(StrategyThread)
```

This is our most basic trading strategy.  The strategy does not factor any user parameters into strategy, determination of how strategy is made is yet to be determined in detail.

<a id="main.SP500Strategy.__init__"></a>

#### \_\_init\_\_

```python
def __init__(alpha_vantage_api_key: str)
```

Initializes the SP500Strategy thread.

<a id="main.longTermTradingStrategy"></a>

## longTermTradingStrategy 

```python
class longTermTradingStrategy(StrategyThread)
```

Takes into account different time horizons for when users are expecting to sell off stocks, and level of risk depending on user preference.
While the code for determining the trading strategy will be complex, no unique functions will be created other than those defined in the strategyThread interface that this class implements.

<a id="main.longTermTradingStrategy.__init__"></a>

#### \_\_init\_\_

```python
def __init__(plannedYearsInvested: int, riskLevel: str,
             alpha_vantage_api_key: str)
```

Initializes the longTermTradingStrategy thread.

**Arguments**:

- `plannedYearsInvested` _int_ - The total number of years until money is expected to be pulled out of
  investments
- `riskLevel` _str_ - The amount of risk the user is comfortable taking, altered by
  plannedYearsInvested to become less risky as date gets closer

<a id="main.DayTradingStrategy"></a>

## DayTradingStrategy 

```python
class DayTradingStrategy(StrategyThread)
```

Similarly to our other two trading strategies, no additional functions are implemented, but user's selection of what their largest threshold is for loss, stored as *floorPercentage*, and what percentage gain at which point they wish to sell, *benchmarkPercentage*, are taken into consideration in **updateStrategy()** function.

<a id="main.DayTradingStrategy.__init__"></a>

#### \_\_init\_\_

```python
def __init__(alpha_vantage_api_key: str, floorPercentage: float,
             benchmarkPercentage: float)
```

Initializes the DayTradingStrategy thread.

**Arguments**:

- `floorPercentage` _float_ - The maximum percent loss in value of a stock the user wants before selling
- `benchmarkPercentage` _float_ - The lowest percent gain in value of a stock before user wants to sell

