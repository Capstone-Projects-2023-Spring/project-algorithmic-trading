---
sidebar_position: 5
---

# Use-case descriptions
Use Case #1 

User #1 wants to make automated investments using the S&P 500 trading strategy.
    1. User logs into their Tradestar application, User enters input into the client
    2. User is directed to their Tradester account, Input is sent from the client to the API, which sends account data back to the client. 
    3. User inputs the amount of capital they’d like to invest, User enters input into the client
    4. User selects the S&P 500 trading strategy, User enters input into the client
    5. User clicks the “Start Trading” button on the website, Client uses user input to determine an algorithm for making trades
    6. After a period of time, User checks to see how their investment has performed, Client pulls data from the API, making investments based on the algorithm chosen and updating the client balance accordingly

Use Case #2

User #2 wants to change her automated investment strategy.
    1. User logs into the Tradestar application, User enters input into the client
    2. User is directed to their Tradester account, Input is sent from the client to the API, which sends account data back to the client. 
    3. User clicks the “Current Investments” link on Tradester, User enters input into the client
    4. User clicks on an automated investment they previously started, Client displays data previously pulled from the API
    5. User clicks “Edit Trading Strategy”, User enters input into the client
    6. User indicates that they wants to make trades based on a stock’s “Price to Cashflow” ratio in addition to the default S&P 500 strategy by clicking the corresponding radio box, User enters input into the client
    7. User clicks the “Resume Trading” button on the website, Client adds new parameter to the trading algorithm and now makes investment decisions in a different way

Use Case #3

User #3 wants to see in-depth data on the performance of their investments
    1. User clicks the “Investment Report” link on Tradester, User enters input into the client
    2. User chooses an automated investment from a list, User enters input into the client
    3. User views a detailed report on the performance of their selected investment with different graphs to display different aspects of their investment performance, Client sends user input to the API which selects and graphs data based on input and sends these graphs back to the client

Use Case #4 

User #4 wants to invest in stocks manually based on suggestions from Tradester
    1. User clicks the “Stock Selector” link on Tradester, User enters input into the client
    2. User chooses the “Long-Term” investment strategy, User enters input into the client
    3. User views a ranked list of stocks selected by Tradester using their investment strategy, Client sends user input to the API which returns historical stock data to the client. The client runs the selected algorithm on the data and displays the selected stocks
    4. User selects the highest ranked stock to invest in and enters the amount of capital they’d like to invest, User enters input into the client
    5. User presses the “Invest” button, Client sends input to the API to invest in the specified stock