---
sidebar_position: 1
---

### Components and Interfaces

This application will use three different components: client, server, and database.

###### Client

A React app. Upon logging in, the user has access to a graph that shows stock prices for the S&P 500 companies. The user can request a stock trading simulation. The simulation is meant to show users the amount of gain or loss that they would have had if they invested real money. To request a simulation, the user must first provide an investment value. The request is then sent to the server. The app also allows users to view the holdings and balances of the users that they are connected to. This allows users to compare their progress with others. The interface for this component is provided though UI elements that direct the user and capture their input.

###### Server

A Django application. This component accesses stock data through an API (yahoo_fin, Alpha Vantage, or any other stock API) and sends it to the client. It also handles requests for simulations and runs those simulations in a multithreaded fashion. Each simulation runs in its own thread, with the simulation progress made available to the user upon request. This component handles the connection of users to each other, so that they can view each other's holdings and balances. The interface for this component is through HTTP requests coming from the client.

###### Database

A PostgreSQL database. This component stores user login information as well as simulation information such as the user's simulated balance and holdings. It will also be used to cache stock market data obtained from API calls for fast retrieval, and to avoid exceeding API call limits. The interface for this component is through SQL queries coming from the server.

### Algorithms

This application will utilize machine learning to make decisions on which stock to purchase. Stocks will be analyzed as discrete time data, and whether or not to purchase a stock will be determined by the stock's price, market cap, historical returns, volume of historical trades, alpha (excess return), beta (volatility) and any other quantitative data. This means we will be using technical anaylsis for our algorithms, which is best used in more short term trades. Essentially, the behavior of stock prices will be treated as a regression problem. In particular, there will be three trading strategies employed:

1. S&P 500: Evaluate each stock comprising the S&P 500, determine its growth potential and sort each company in order of predicted growth. Then, if fractional shares are allowed, divide the user's capital and invest in each stock in proportion to its growth potential, i.e. if Apple is projected to be three times more likely to grow than Tesla, invest three times more money into Apple than Tesla. If fractional shaes are not allowed, then find every permutation of stocks that may be purchased from this list and chose the overall most profitable one.
2. Long Term: Analyze the stock market and flag certain stocks for growth, investing a specified percentage of the user's capital into each flagged stock. Then, once the stock is determined to no longer be growing, sell the stock.
3. Day Trading: Analyzing the stock market, find stocks that are currently growing and then immediately sell once the begin decreasing. This will be done at a high frequency.

The success of these algorithms will be determined by how they perform in comparison to the S&P 500, root mean squared error, and mean absolute percent error.

### Class Diagram

```mermaid
classDiagram

class  Thread  {

<<interface>>

+ __init__()

+  start()

+  run()

+  join()

+  is_alive()

}

class  databaseThread  {

#  String databaseURL

#  String databasePassword

#  String serverIP

-  Connection connection

-  Cursor cursor

+  executeQuery() List~tuple~ return

-  notifyWebsite()
}

class  userThread{

-  String username

-  String password

-  String quantConnectUsername

-  String quantConnectPassword
- String Strategy
+  Dictionary~String stock, float percentAllocation~  Portfolio


+  getPortfolio()

+  recieveStrategy()

+  requestTrade()

+  updatePortfolio()

}

class  strategyThread{

<<interface>>

-  Dictionary~String name, String value~  Parameters

#  String AlphaVantageAPIKey

-  List~tuple~  stockData

+  Dictionary~String stock, float percentAllocation~  Strategy

-  unpackParameters()

+  recieveStockData()

-  recordStockData()

-  updateStrategy()

}

class  SP500Strategy  {

  

}

class  longTermTradingStrategy{

int plannedYearsInvested

String riskLevel

  

}

class  DayTradingStrategy{

float floorPercentage

float benchmarkPercentage

  

}
Thread  <|--  userThread

strategyThread  <..  userThread


  

Thread  <|--  databaseThread


Thread  <|--  strategyThread

strategyThread  <|--  SP500Strategy

strategyThread  <|--  longTermTradingStrategy

strategyThread  <|--  DayTradingStrategy

databaseThread  <..  strategyThread
```

## 1. Thread

Taken from python library threading.  Documentation taken from man page:
**__init__()**: Initializes the thread

**start()**: 
Start the thread’s activity.

It must be called at most once per thread object. It arranges for the object’s  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method to be invoked in a separate thread of control.

This method will raise a  [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "RuntimeError")  if called more than once on the same thread object.

**run()**:
Method representing the thread’s activity.

You may override this method in a subclass. The standard  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method invokes the callable object passed to the object’s constructor as the  _target_  argument, if any, with positional and keyword arguments taken from the  _args_  and  _kwargs_  arguments, respectively.

Using list or tuple as the  _args_  argument which passed to the  [`Thread`](https://docs.python.org/3/library/threading.html#threading.Thread "threading.Thread")  could achieve the same effect.

**join()**:
Wait until the thread terminates. This blocks the calling thread until the thread whose  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  method is called terminates – either normally or through an unhandled exception – or until the optional timeout occurs.

When the  _timeout_  argument is present and not  `None`, it should be a floating point number specifying a timeout for the operation in seconds (or fractions thereof). As  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  always returns  `None`, you must call  [`is_alive()`](https://docs.python.org/3/library/threading.html#threading.Thread.is_alive "threading.Thread.is_alive")  after  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  to decide whether a timeout happened – if the thread is still alive, the  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  call timed out.

When the  _timeout_  argument is not present or  `None`, the operation will block until the thread terminates.

A thread can be joined many times.

[`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  raises a  [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "RuntimeError")  if an attempt is made to join the current thread as that would cause a deadlock. It is also an error to  [`join()`](https://docs.python.org/3/library/threading.html#threading.Thread.join "threading.Thread.join")  a thread before it has been started and attempts to do so raise the same exception.

**is_alive()**:
Return whether the thread is alive.

This method returns  `True`  just before the  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method starts until just after the  [`run()`](https://docs.python.org/3/library/threading.html#threading.Thread.run "threading.Thread.run")  method terminates. The module function  [`enumerate()`](https://docs.python.org/3/library/threading.html#threading.enumerate "threading.enumerate")  returns a list of all alive threads.

## 2. databaseThread

**executeQuery(String query)**: 
Takes in query to be run, runs query on database, returns query output as a list of tuples, with each
tuple corresponding to a row.  
This function will be used to update user/stock data as well as return such data to user and strategy threads.
**notifyWebsite()**:
Thread is connected to website with websocket, after query has been run to update the database, sends
notification for page to refresh and display new data.

## 3. strategyThread

**unpackParameters()**:
Parameters passed to each of the threads that implement this class will be different, but all parameters will be passed in by dictionary.  Takes elements of key;value pairs and update local variables.
**recieveStockData()**:
Makes API call to AlphaVantage will APIKey to gather stock information on stocks relevant to Strategy,
**recordStockData()**:
Stores gathered stock data into historical record sending query to database thread to update relevant tables
**updateStrategy()**:
Based on gathered stock data, determination is made on which stocks to include in recommended portfolio for strategy
## 4. userThread
**updatePortfolio()**:
Main task for thread, initially calls **getPortfolio()** to store current holdings in thread, then calls **recieveStrategy** to determine if updates must be made.
**getPortfolio()**:
Gets current portfolio for user from QuantConnect API, takes amount of holdings in all stocks and converts
current value to percentage of all holdings to store in portfolio dictionary. 
**recieveStrategy()**:
Based on selected strategy for user, Strategy is gathered from strategy thread.  If there are any changes to current strategy, trades are requested through the **requestTrade()** function.
**requestTrade()**:
Using QuantConnection API, trades are performed until current portfolio matches portfolio recieved from strategy thread.  
As each API call is made, thread waits until confirmation of trade is completed before next trade is initiated for current user.  
If trade fails, a new trade will instead be requested to move money into a money market account until next trade request is made, at which point the stocks in portfolio will attempt to be purchased again

## 5. SP500Strategy

This is our most basic trading strategy.  The strategy does not factor any user parameters into strategy, determination of how strategy is made is yet to be determined in detail.

## 6. longTermTradingStrategy

Takes into account different time horizons for when users are expecting to sell off stocks, and level of risk depending on user preference.  
While the code for determining the trading strategy will be complex, no unique functions will be created other than those defined in the strategyThread interface that this class implements.

## 7. DayTradingStrategy

Similarly to our other two trading strategies, no additional functions are implemented, but user's selection of what their largest threshold is for loss, stored as *floorPercentage*, and what percentage gain at which point they wish to sell, *benchmarkPercentage*, are taken into consideration in **updateStrategy()** function.

### User Stories
** 1. **  
User 1 wants to make automated investments using the S&P 500 trading strategy

```mermaid
sequenceDiagram
    actor User1
    participant User/Client
    participant API
    participant Strategy(S&P500-LongTerm-ShortTerm)
    User1 ->>+ User/Client: User1 logs into Tradestar
    User/Client ->>+ API: Input sent from Client to API
    API -->>- User/Client: Account Data returned to client
    User1 ->>+ User/Client: User1 clicks current investments link
    User/Client -->>- User1: Data previously pulled from API
    User1 ->>+ User/Client: User1 clicks edit trading strategy, enters input
    User/Client ->>+ API: make trades based off "Price to Cashflow" ratio, in addition to S&P 500 strategy
    API -->>- User/Client: Client pulls data from API, makes investments, updates client balance
    User1 ->>+ Strategy(S&P500-LongTerm-ShortTerm): User1 clicks resume trading on the website, Client adds new parameter to algorithm, makes news investment decisions

```
** 2. **  
User 2 wants to change her automated investment strategy

```mermaid
sequenceDiagram
    actor User1
    participant User/Client
    participant API
    participant Strategy(S&P500-LongTerm-ShortTerm)
    User1 ->>+ User/Client: User1 logs into Tradestar
    User/Client ->>+ API: Input sent from Client to API
    API -->>- User/Client: Account Data returned to client
    User1 ->>+ User/Client: User1 inputs capital to invest
    User1 ->>+ Strategy(S&P500-LongTerm-ShortTerm): User1 selects the S&P 500 strategy
    User1 ->>+ User/Client: User1 clicks start trading
    User/Client ->>+ API: Client selects algorithm based off User Input
    API -->>- User/Client: Client pulls data from API, makes investments, updates client balance

```

** 3. **  
User 3 uses Tradester's Investment Report to view how their investment is doing

```mermaid
sequenceDiagram
    actor us as user3
    participant wa as web application
    participant sv as server
    participant db as database

    us ->>+ wa: click "Investment Report" button
    wa -->> us: display dropdown of investment accounts
    us ->> wa: choose investment to display
    wa ->>+ sv: send GET request for the particular investment to server 
    sv ->>+ db: find user's investment information
    db -->>- sv: return user's investment information
    sv -->>- wa: return user's investment information
    wa ->> wa: build graph of investment information
    wa -->>- us: display graph

```
** 4. **  
User 4 uses Tradester to make manual trades


```mermaid
sequenceDiagram
    actor us as user4
    participant wa as web application
    participant sv as server
    participant db as database
    participant api as API(Alpha Vantage or yahoo_fin)
    participant qc as QuantConnect(optional)

    us ->>+ wa: click "Account Selector" button
    wa -->> us: display dropdown of investment accounts
    us ->> wa: click "Long Term" button
    wa ->>+ sv: send GET request for the user's long term investment to server 
    sv ->>+ db: find user's investment information
    db -->>- sv: return user's investment information
    sv -->>+api: request stats of the S&P 500
    api-->>-sv: return stats of S&P 500
    sv ->> sv: sort the S&P 500 stats, weighted by performance
    sv -->>- wa: return user's investment information and the sorted stock data
    wa ->> wa: build graph of investment information
    wa -->> us: display graph showing user's investments 
    wa -->> us: display list of S&P 500 stocks 
    us -->>+ us: decide stocks to purchase
    us ->>+ wa: select stock and amount to purchase
    wa ->>+ sv: update user's Long Term portfolio with new info
    sv ->> sv: package the investment update to send
    sv ->>+ qc: PUT request to purchase new stocks
    qc -->>- sv: return receipt of purchase
    sv ->>+ db: update Long Term financial info for user
    db ->>- sv: return receipt of completion of update
    sv -->>- wa: return receipt of completion of purchase and databse update
    wa -->>- us: display message of completion of purchase to user
```

### Entity Relationship Diagram and Table design

```mermaid
erDiagram
    USER ||--o{ ORDER : places  
    USER ||--o{ PORTFOLIO: owns
    USER{
        string username
        string email
        string password
        string balance
    }

    STOCK {
        string stock_symbol
        string company_name
        string sector
        float current_price
        float market_cap
        float dividend_yield
        float earnings_per_share
        float price_to_earnings_ratio
        float beta
        float high_52
        float low_52
        float avg_daily_volume
    }

    ORDER }o--|| STOCK : contains
    ORDER {
        int order_id
        string username
        string stock_symbol
        string order_type
        int quantity
        float price
        time order_time
    }
    PORTFOLIO {
        int portfolio_id
        string username
    }
    PORTFOLIO ||--o{ PORTFOLIO_STOCK : holds
    PORTFOLIO_STOCK ||--o{ STOCK: holds
    PORTFOLIO_STOCK {
        int portfolio_id
        int stock_symbol
        int quantity
        float purchase_price
    }
```
The User entity represents a user of the application. It contains basic information on the user, with their username as the primary key. User has direct relationships with the Order entity and the Portfolio entity. A user can place an order (buying stock.) The order entity has a primary key order_id and foreign keys username and stock_symbol, linking an order instance to the user who placed the order and the stock they ordered. The order entity is essentially a receipt or purchase history for a user. When a stock is ordered, it is placed in a user's portfolio, which is a collection of stocks the user currently has stake in (sold stocks are not included.) The Portfolio entity has a primary key portfolio_id and foreign key username, linking the portfolio to the user it belongs to. The stock table represents a specific stock, and contains a primary key stock_symbol and various metrics used to determine the stock's value. 
The Portfolio and Stock entities have a many-to-many relationship, thus they have a junction table Portfolio_Stock. This contains foreign keys portfolio_id and stock_symbol. These foreign keys act together to uniquely identify an entry in the junction table. 