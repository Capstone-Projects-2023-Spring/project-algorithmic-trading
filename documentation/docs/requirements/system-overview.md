---
sidebar_position: 1
---

# System Overview
Tradester is a web application that allows users to trade stock and simulate stock trading. Users would enter their investment capital, trading strategy, and choose whether to simulate or actually make trades. The system would then either simulate trades or trade stocks on behalf of the user. A database will be utilized to store the user’s capital and trading strategy. The Alpha Vantage API will be used by the server to pull stock data. 

There are four components in this system:

- Client: A web app and a mobile app. Allows users to simulate or make trades, specify investment, and choose a trading strategy. The app will constantly pull updates from the server to show the user the current state of their capital. Makes requests to the server.

- Server: Receives trading/simulation requests from the client. Constantly checks stock data via the Alpha Vantage API. Receives and processes requests from clients. Saves and retrieves data from the database. Makes all API calls to Alpha Vantage.

- Database: Receives and stores capital and trade strategies as well as user account information. Receives data from and sends data to the server.

- Alpha Vantage: API that has access to stock market information. It sends this information to the server.
