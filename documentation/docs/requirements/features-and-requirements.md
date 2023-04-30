---
sidebar_position: 4
---

# Features and Requirements
Graphing Functionality
    - Graphical representation of real-time stock updates via a database
    - Graphical representation of historical stock data saved to a database

Backtesting
    - Integration with database containing historical stock data
    - Creating functionality for algorithms to run on batch data instead of real time data
    - Store incoming live data into historical database

User Interface
    - Design simplified mobile interface with functionality only to buy/sell/view stocks/simulations
    - Create functionality to alter account settings, backtest, work with stocks, and display stock data from webpage
    - Create ability to view other account holdings in the same Group as user on mobile/website 

Simulation Mode
    - Create method to store/update simulated account value
    - Create method to store/display this values changes over time

Display Live Stock Data
    - Integrate with Alpha Vantage API to track live stocks of user’s choosing
    - Offer settings on how frequently to display 

Automated Trading Bot
    - Trading done automatically via algorithms written in Python, with optional manual adjustments

S&P 500 Algorithm
    - Create function to find and track all S&P 500 members stock values and market capitalization
    - Create a function to allocate portions of invested money according to stock value and market cap. parameters

Long Term Trading
    - Categorize stocks/bonds/ETFs into categories based on risk
    - Present user with ability to pick desired date to pull money
    - Create function to alter risk level of investments automatically over time as risk strategy changes

Day Trading
    - Create algorithm to display stocks with the largest percent growth during current trading session
    - Offer users ability to put money into certain stocks that meet the parameters they define
    - Offer ability for users to quickly dump their holdings in certain stock

View Invitations
    - Grant user the option to enter the account ID of other users they wish to share their portfolio data with
    - Create automated email that gets sent when user selects this option
    - Add the linked user’s portfolio information to their dashboard

Create Groups of View Invitations
    - Create ability for invitations to be sent out to large quantities of other users
    - Create unique display for comparison between other group members holdings/balances
