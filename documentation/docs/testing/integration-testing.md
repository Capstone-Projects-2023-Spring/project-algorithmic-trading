---
sidebar_position: 2
---
# Integration tests

Integration testing is known as the second level of software testing process, following unit testing. Usually a software project consists of numerous software modules built by multiple developers on a team. An integration test challenges how well these separate elements work together to deliver a working product. Integration tests will be used to ensure that connecting features together does not cause issues.  

**Starting bottom up**  

Using the bottom up method of integration testing the lower level modules are the first ones to be tested. The key level in our system is the api calling that retrieves the stock data.  

**Graph Display on Site Test:**  

Objective: Test the ability of the python methods using java script to read in stock data using the yahoo_fin api. The python methods will send the retrieved data to the database to build graphs on the website   

Description:  python api call (yahoo_fin), data retrieval (website), database storage (django), graph display on website (backend → frontend)  

**Stock data on Site for Purchasing Test:**  

Objective: The python script can read in data in order to make stock purchases on the website  

Description: Data on website, Referenced during purchasing, AlphaVantage, React native  

**Quant Connect Purchasing Test:**  

Objective: When selecting an algorithm (short-term, long-term, S&P 500), use the data to either simulate a purchase by logging the relevant information or carry out a purchase through an API call to QuantConnect.  

Description: API for Quantconnect, Django database storage, Algorithm machine learning, Trading  


