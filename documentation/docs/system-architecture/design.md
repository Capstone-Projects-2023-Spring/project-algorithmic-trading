---
sidebar_position: 1
---

## Section 1 - Overview

This app aims to assist users who are interested in learning about the stock market. It provides a fun, visual, and no-risk way to experiment with stock trading. Users can maintain a simulated portfolio through "buying" and "selling" stocks. The app uses machine learning to predict future close values for stocks that are in the user's portfolio. The prediction aims to guide the user's decisions in keeping or selling stocks. Finally, users are able to connect with each other and view each other's portfolios. This way, people who are experts in the stock market can help their friends get their feet wet, by showing them portfolios that are most likely to profit.

## Section 2 - Components and Interfaces

This application will use four different components: client, server, database, and a machine learning model.

###### 2.1 Client

A React app. Upon logging in, the user has access to a graph that shows stock prices for the S&P 500 companies over the past month. The user can add fake funds to their account and use those funds to simulate the purchasing of stocks. Purchased stocks are added to the user's portfolio, which can be accessed through the website's navigation bar. The portfolio page displays the user's available funds (which are simulated), as well as a graph for each stock that the user "owns." Each graph will display the number of shares of a stock that the user owns, as well as the stock's close values for the last six days. The graph will also display a close price prediction for the next business day, to help guide the user's stock trading decisions. The website will also allow users to add friends to be able to view their portfolios. This also helps the user in their stock trading decisions, as they can follow in the footsteps of a mentor who has experience in the stock market.

###### 2.2 Server

A Django application. This component accesses stock data from our database and sends it to the client. This allows the client to display stock data of the S&P 500 companies. The server also handles user authentication and account registration. It receives and processes requests to add/sell stocks to/from the user's portfolio. It processes the sending, receiving, and responding of friend requests. It also allows users to search for other users to add them as friends. The interface to the server is through HTTP requests coming from the client.

###### 2.3 Database

Two PostgreSQL databases. One database is used to hold user, friendship, friend request, and portfolio data. The other database is used to hold large amounts of historical stock data, and next-day stock prediction data produced by the machine learning model. The interface for this component is through an ORM that translates python to SQL queries. These queries come from the server.

###### 2.4 Machine Learning Model

A machine learning model that predicts the next day's close value for each of the stocks in the S&P 500. This model lives on Professor Wang's GPU server, and is set to run daily after the stock market closes. 

## Algorithms

This application will utilize machine learning to make decisions on which stock to purchase. Stocks will be analyzed as discrete time data, and whether or not to purchase a stock will be determined by the stock's price, market cap, historical returns, volume of historical trades, alpha (excess return), beta (volatility) and any other quantitative data. This means we will be using technical anaylsis for our algorithms, which is best used in more short term trades. Essentially, the behavior of stock prices will be treated as a regression problem. In particular, there will be three trading strategies employed:

1. S&P 500: Evaluate each stock comprising the S&P 500, determine its growth potential and sort each company in order of predicted growth. Then, if fractional shares are allowed, divide the user's capital and invest in each stock in proportion to its growth potential, i.e. if Apple is projected to be three times more likely to grow than Tesla, invest three times more money into Apple than Tesla. If fractional shaes are not allowed, then find every permutation of stocks that may be purchased from this list and chose the overall most profitable one.
2. Long Term: Analyze the stock market and flag certain stocks for growth, investing a specified percentage of the user's capital into each flagged stock. Then, once the stock is determined to no longer be growing, sell the stock.
3. Day Trading: Analyzing the stock market, find stocks that are currently growing and then immediately sell once the begin decreasing. This will be done at a high frequency.

The success of these algorithms will be determined by how they perform in comparison to the S&P 500, root mean squared error, and mean absolute percent error.

## Section 4 - Class Diagrams

### 4.1 Client Diagram

```mermaid
---
title: Figure 1 - Frontend Component Diagram
---
classDiagram
  class Friends {
    - friends: Array
    - onUnfriend(i, userId)
  }

  class FriendRequests {
    - requests: Array
    - respondRequest(i, userId, isAccept)
  }

  class Search {
    - username: String
    - foundUser: Object
    - sendRequest()
    - revokeRequest()
    - findUser()
  }

  class Simulation {
    - investment: Number
    - setAndFetchInvestment(Number value)
  }

  class Candle {
    - currentStockAmount: Number
    - getDefaultDisplay()
    - updatePortfolio()
    - updateAmount()
    - updateChart()
  }

  class Portfolio {
    - username: String
    - isSelf: Boolean
    - userId: String
    - sellStock(String stock, Number qty, Number price)
    - genData(String name, Array data)
    - loadPortfolio(Number id)
  }

  class App {
    - loggedIn: Boolean
    - Nav()
    - HomePage()
  }

  class Login {
    - username: String
    - password: String
    - feedback: String
    - onLogin()
  }

  class Register {
    - username: String
    - password: String
    - passwordConf: String
    - feedback: String
    - onRegister()
  }

  App --> Login : Pass 'loggedIn' as prop
  Login -- Register : Nagivate
  Search -- Friends : Navigate
  Friends -- FriendRequests : Navigate
  Search -- FriendRequests : Navigate
```

#### App

*loggedIn*: A boolean value indicating if user is logged in

*Nav()*: The navigation bar

*HomePage()*: A welcome page that the user lands on upon visiting the page.

#### Login

*username*: State variable holding the current text in the username input field.

*password*: State variable holding the current text in the password input field.

*feedback*: State variable holding the current feedback. Feedback is used to display messages (error or otherwise) to the user.

*onLogin()*: Called when the user clicks the login button or hits enter after typing a password. This function makes an API call to authenticate the user. On success, the user is navigated to the home page. Otherwise, an error message is displayed

#### Register

*username*: State variable holding the current text in the username input field.

*password*: State variable holding the current text in the password input field.

*passwordConf*: State variable holding the current text in the password confirmation input field.

*feedback*: State variable holding the current feedback. Feedback is used to display messages (error or otherwise) to the user.

*onRegister()*: Called when the user clicks the register button or hits enter after typing the password confirmation. This function makes an API call to try to register the user. On success, a message is displayed indicating that an account was created. Otherwise, an error message is displayed.

#### Portfolio

*username*: The username of the user who owns the portfolio. Passed through props.

*isSelf*: An indication if this portfolio belongs to the user who is viewing it. If this value is true, a sell button is displayed next to each stock in the user's portfolio. Passed through props.

*userId*: The user id of the user who owns the portfolio. Used to query the backend for the portfolio data. Passed through props.

*sellStock(String stock, Number qty, Number price)*: Takes in the stock's ticker, the number of shares of said stock to sell, and the price of the stock. It makes an API call to sell the stock and sends an alert to the user that the stock was sold.

*genData(String name, Array data)*: Takes in the name (ticker) of a stock and an array containing objects that each contain a close price and the date of that close price. Generates a random color for the graph and returns the parameters in a way that is expected by the Apex Charts library.

*loadPortfolio(Number id)*: Makes an API call to get the portfolio of the user with the supplied id.

#### Candle

*currentStockAmount*: The amount of shares to purchase from the currently selected stock.

*getDefaultDisplay()*: Shows stock data for a random company. Called upon landing on the candle page.

*updatePortfolio()*: "Purchase" a share (or multiple, depending on ) of the selected stock and add it to the user's portfolio.

*updateAmount()*: Update currentStockAmount based on changes to the input field.

*updateChart(String ticker, String name)*: Makes the chart display stock data of the company with the supplied ticker. The name parameter is the company's name joined with the ticker joined with the sector that the company is in. The name parameter is displayed as the chart's title.

#### Simulation

*investment*: State variable representing the user's current available funds for investment.

*setAndFetchInvestment(Number value)*: Makes an API call to set the supplied value as the user's investment. Updates the investment value on screen if the API call was successful.

#### Search

*username*: State variable holding the current text in the username input field.

*foundUser*: Object that holds information about the last searched user.

The object looks like this:

```
{
  username: String
  user_id: Number
  is_friend: Boolean
  incoming_request: Boolean
  outgoing_request: Boolean
}
```

This data is needed to determine what the search pages looks like as well as what actions can be made from the search page. If the searched user is a friend, the page displays a tag that shows friendship status. If the user has an incoming friend request from the searched user, no action can be taken from the search page. If the user has an outgoing friend request to the searched user, the user can revoke that friend request. Finally, if the searched user is not a friend, the user can send them a friend request.

*sendRequest()*: Make an API call to send a friend request to the current found user.

*revokeRequest()*: Make an API call to revoke a friend request that was previously sent to the current found user.

*findUser()*: Make an API call to search for a user whose username matches the current value of `username`

#### Friends

*friends*: State variable holding a list of the user's friends.

*onUnfriend(i, userId)*: Takes in the index of the friend to unfriend and their user id. Calls an API function to unfriend the user with the supplied user id.

#### FriendRequests

*requests*: State variable holding a list of users who have an outgoing friend request for the user.

*respondRequest(i, userId, isAccept)*: Respond to the friend request coming from the user with the supplied user id. If isAccept is true, a friendship is established between the user and the sender of the friend request. In both cases, the friend request is deleted. `i` is used to remove the request from `requests`.

### 4.2 Server Diagram

```mermaid
---
title: Figure 2 - Django View Diagram - Portfolio & Stock Data
---
classDiagram
  class GetStockDataCandle
  class PurchaseStock
  class SaveInvestment
  class DisplayPortfolio
  class SellStock
```

Each component in the diagram above is a Django view. A Django view is an API function.

```mermaid
---
title: Figure 3 - Django View Diagram - Social Functionality
---
classDiagram
  class FindUserByUsername
  class SendFriendRequest
  class GetFriendRequests
  class RespondFriendRequest
  class GetFriend
```

```mermaid
classDiagram
  class Unfriend
  class CheckFriendship
  class CheckOutgoingRequest
  class CheckIncomingRequest
  class RevokeRequest
```

Each component in the diagram above is a Django view. A Django view is an API function.
These views make up the application's social functionality.

### 4.3 Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ PORTFOLIO: has
    USER{
        string username
        string password
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
        float daily_high
        float daily_low
        float daily_num_transactions
        float daily_open_price
        float daily_volume
        float daily_vwap
        date timestamp
    }
    PORTFOLIO {
        int portfolio_id
        string username
        float balance
    }
    PORTFOLIO ||--o{ PORTFOLIO_STOCK : holds
    PORTFOLIO_STOCK ||--o{ STOCK: holds
    PORTFOLIO_STOCK {
        int portfolio_id
        int stock_symbol
        int quantity
        float purchase_price
        date timestamp
    }
    BACKLOG {
        string ticker
        date date
        float open
        float close
        float low
        float high
        float volume
        int id
    }
    MODEL_PREDICTION {
        string stock
        float predicted_close
        date date
        float execution_time
        int id
    }
```
The User entity represents a user of the application. It contains basic information on the user, with their username as the primary key. User has direct relationships with the Portfolio entity. A user can place an order (buying stock.) When a stock is ordered, it is placed in a user's portfolio, which is a collection of stocks the user currently has stake in (sold stocks are not included.) The Portfolio entity has a primary key portfolio_id and foreign key username, linking the portfolio to the user it belongs to. The stock table represents a specific stock, and contains a primary key stock_symbol and various metrics used to determine the stock's value. The Portfolio and Stock entities have a many-to-many relationship, thus they have a junction table Portfolio_Stock. This contains foreign keys portfolio_id and stock_symbol. These foreign keys act together to uniquely identify an entry in the junction table. The Backlog entity holds stock data for every stock in the S&P 500 index. It is automatically updated daily with the most recent stock data. The Model_Prediction entity holds predicted close prices that are outputted by our machine learning model.

### User Stories
** 1. **  
User 1 wants to keep track of stock data in order to make profitable trades.

```mermaid
sequenceDiagram
    actor User
    participant Client
    participant Server
    User ->>+ Client: Log in
    Client ->>+ Server: HTTP POST body = {username, password}
    Server -->>- Client: HTTP Response = {accessToken, refreshToken}
    Client ->> Client: Save tokens to local storage
    Client -->>- User: Route to welcome page
    User ->>+ Client: Click on "View Dashboard" button.
    Client -->>- User: Route to stock graph page.
    Client ->>+ Server: HTTP GET get_stock_data_candle/<RANDOM_STOCK_TICKER>
    Server -->>- Client: JSON object with historical stock data
    Client -->> User: Display random stock data graph
    User ->>+ Client: Select Amazon stock from dropdown
    Client ->>+ Server: HTTP GET get_stock_data_candle/AMZN
    Server -->>- Client: JSON object with historical stock data
    Client -->>- User: Display Amazon stock data graph
```

1. The user enters their username and password and logs in.
2. The client makes an API call to get a JWT token pair (access and refresh tokens).
3. The server returns a JWT token pair.
4. The client saves the token pair in local storage for later use.
5. The client routes to the home page, which has a "View Dashboard" button.
6. The user clicks on the "View Dashboard" button.
7. The client routes to the stock graph page.
8. The client makes an API call to get historical stock data for a random company.
9. A JSON object is returned with all the historical data.
10. The user selects Amazon stock from the dropdown.
11. The client makes an API call to get Amazon's historical stock data
12. The server returns a JSON object representing Amazon's historical stock data.
13. The client displays the data on the graph.
    
** 2. **  
User 2 wants to change her automated investment strategy

```mermaid
sequenceDiagram
    actor User
    participant Client
    participant API
    participant Strategy(S&P500-LongTerm-ShortTerm)
    User ->>+ Client: User logs into Tradestar
    Client ->>+ API: Input sent from Client to API
    API -->>- Client: Account Data returned to client
    User ->>+ Client: User inputs capital to invest
    User ->>+ Strategy(S&P500-LongTerm-ShortTerm): User selects the S&P 500 strategy
    User ->>+ Client: User clicks start trading
    Client ->>+ API: Client selects algorithm based off User Input
    API -->>- Client: Client pulls data from API, makes investments, updates client balance

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
