---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.

DELETE REQUIREMENTS LATER


**Algorithms**

This application will utilize machine learning to make decisions on which stock to purchase. Stocks will be analyzed as discrete time data, and whether or not to purchase a stock will be determined by the stock's price, market cap, historical returns, volume of historical trades, alpha (excess return), beta (volatility) and any other quantitative data. This means we will be using technical anaylsis for our algorithms, which is best used in more short term trades. Essentially, the behavior of stock prices will be treated as a regression problem. In particular, there will be three trading strategies employed:

1. S&P 500: Evaluate each stock comprising the S&P 500, determine its growth potential and sort each company in order of predicted growth. Then, if fractional shares are allowed, divide the user's capital and invest in each stock in proportion to its growth potential, i.e. if Apple is projected to be three times more likely to grow than Tesla, invest three times more money into Apple than Tesla. If fractional shaes are not allowed, then find every permutation of stocks that may be purchased from this list and chose the overall most profitable one.
2. Long Term: Analyze the stock market and flag certain stocks for growth, investing a specified percentage of the user's capital into each flagged stock. Then, once the stock is determined to no longer be growing, sell the stock.
3. Day Trading: Analyzing the stock market, find stocks that are currently growing and then immediately sell once the begin decreasing. This will be done at a high frequency.

The success of these algorithms will be determined by how they perform in comparison to the S&P 500, root mean squared error, and mean absolute percent error.

