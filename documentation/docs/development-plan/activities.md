---
sidebar_position: 1
---

# Activities


**Requirements Gathering:**  
Tradester requires real-time stock data, which will be received through the yahoo_fin API. This information will later be stored in a database, which will require a free firebase account. The final requirement that must be gathered is user input, which will be done using a website front-end.

**Top-level Design:**  

Tradester will be a web and mobile application where users may go to their website and select either a trading or simulation mode. Within simulation mode, they may input some number representing the amount of money they are starting with, then choose one of three algorithms: day-trading, long-term, or S&P 500. Then they will input the money and see in real time how the algorithm performs via graphs. Additionally, other factors such as risk tolerance may be changed for each strategy. Additionally, the user may choose to test each algorithm with historical data and see how it performs over a certain time-frame. The trading mode will instead connect to the user’s Quant Connect account and make trades with real money, also showing with graphs how their money is changing in real time.

**Detailed Design:**  

All stock data will be stored in a database hosted by firebase. This data will be retrieved via a python script call from the website which will then make an API call using the yahoo_fin API to store data in the database. From this data, each algorithm will use machine learning techniques in order to choose which stocks should be purchased, and either simulate a purchase by logging the relevant information or carry out a purchase through an API call to QuantConnect, then store the relevant information in the database. The website will be coded in Javascript and access the database in order to produce graphs of how each purchased stock as well as the user’s total capital is performing.

**Implementation:**  

The implementation will consist of a python backend, a javascript front end, a database using Firebase, and a mobile app based on the website version. 

**Integration:**  

The website will make calls to python methods using Javascript commands that read in stock data using the yahoo_fin API. The python script will then send this data to the database, which can be read by the website to produce graphs. Additionally, this data can be read in by the python script in order to make stock purchases, then send the relevant information of each purchase to the database to be read into the website. Finally, the mobile app will operate in the exact same fashion as the website.

**Testing:**  

While writing code we will use unit tests to ensure that each method or sections of code we write are sound. We will ensure first that the test can be failed, then verify that our method passes the test. Integration tests will be used to ensure that connecting features together does not cause issues. Functional tests will be used to ensure that outputs from methods are what we expect. End-to-end tests will be used to ensure that someone acting as a user is receiving the intended experience from our application. Acceptance testing will be used to verify that all requirements outlined in this document have been met adequately. Performance testing will be used to ensure that our backend is not too sluggish when reading in stock data and purchasing stocks. Finally, smoke testing will be used to ensure that each major feature is working as intended.

**Bug Fixing:**  

If bugs are found during testing, we will evaluate: if there is an error message we will examine the line numbers and attempt to diagnose the issue with our prior knowledge or by copy pasting the message into Google. If nulls are present in the data, we will examine first the data frame it is collected from and then the methods and API calls used to retrieve the data. If some other issues are present that are less obvious, we will use a debugger to track values throughout the runtime in order to potentially locate the source of the bug.

**Optimization:**  

Optimization is imperative for this project considering that live stock data is being used and accessed. This means that to optimize, we will first measure the time that our code takes. Then we will refactor in order to reduce computations and runtime in terms of data collection. Finally, if no further adjustments are obvious, we will evaluate if there are faster APIs or any way to potentially reduce API calls.

