[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118280)
<div align="center">

# Tradester
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section 2, python, react, machine learning, simulated stock trading

## Project Abstract

This document proposes an application of quantitative trading strategies to create a desktop application that may select profitable stocks, indicate when to sell stocks, simulate trading in real time and even analyze orders placed via a QuantConnect account. The user may interact with a UI to first select one of three strategies: a day trading, a long-term trading, and an S&P 500 strategy. The day trading strategy will buy and sell stocks in real time instantaneously, while the long-term trading strategy will buy stocks with the most growth potential over time, sell them when they are done growing, after at least a day. Finally, the S&P 500 strategy will analyze stock data of fortune 500 companies and buy stocks for the best performing companies. The user may also select between a simulation mode and a trading mode, the trading mode involving trading automatically through the user’s QuantConnect account and the simulation mode simulating trades with a base amount of capital provided by the user and comparisons to the performance of the S&P 500.

## High Level Requirement

The user may interact with a user interface to show stock data accessed through the Alpha Vantage API, including graphs with relevant data. The user may choose an amount to simulate trading with, then make simulated purchases and sales of stocks based on predictions made by our machine learning model, real stock data, and relevant indicators. A social function allows users to connect their accounts to those of other users and compare trading choices.  

## Conceptual Design

This simulated trading application will utilize the python programming language with the NumPy and pandas libraries. Stock data will be accessed through the Alpha Vantage API, as it is free. This app will also be able to be run on any modern 64 bit Windows, MacOS and Linux operating systems.

## Background

The difference between this app and others are as follows:  

This is a free product  

It integrates a neural net machine learning model  

It comes with a built-in user interface  

It has a social function and learning component

Sources:
https://medium.com/codex/the-mystery-of-the-robinhood-api-99a4cd62a531
https://github.com/public-apis/public-apis
https://www.investopedia.com/articles/active-trading/081315/how-code-your-own-algo-trading-robot.asp

## Required Resources

The project will require access to an AlphaVantage API key to access real stock data.  The frontend will need a hosting platform and the backend will require a free server and database.  To develop the machine learning model, large amounts of historical stock data will be required, and we will need access to a server with a GPU to train the model.  

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/jbbernardin">
            <img src="https://avatars.githubusercontent.com/u/62387765?v=4" width="100;" alt="BernardinJohn"/>
            <br />
            <sub><b>John Bernardin</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/jalzeidi">
            <img src="https://avatars.githubusercontent.com/u/84288872?v=4" width="100;" alt="AlzeidiJaffar"/>
            <br />
            <sub><b>Jaffar Alzeidi</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/seanbritt">
            <img src="https://avatars.githubusercontent.com/u/70382208?v=4" width="100;" alt="BrittSean"/>
            <br />
            <sub><b>Sean Britt</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/patriickdoyle">
            <img src="https://avatars.githubusercontent.com/u/73042164?v=4" width="100;" alt="DoylePatrick"/>
            <br />
            <sub><b>Patrick Doyle</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/guthriealbertson">
            <img src="https://avatars.githubusercontent.com/u/89537502?v=4" width="100;" alt="AlbertsonGuthrie"/>
            <br />
            <sub><b>Guthrie Albertson</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/tuf99746">
            <img src="https://avatars.githubusercontent.com/u/97983404?v=4" width="100;" alt="BonanniNick"/>
            <br />
            <sub><b>Nick Bonanni</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/safowler77">
            <img src="https://avatars.githubusercontent.com/u/70285047?v=4" width="100;" alt="FowlerShawn"/>
            <br />
            <sub><b>Shawn Fowler</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/OwenKing2">
            <img src="https://avatars.githubusercontent.com/u/77747886?v=4" width="100;" alt="KingOwen"/>
            <br />
            <sub><b>Owen King</b></sub>
        </a>
    </td>
</tr>

</table>

[//]: # ( readme: collaborators -end )
