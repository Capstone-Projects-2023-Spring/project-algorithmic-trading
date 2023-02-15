[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118280)
<div align="center">

# Tradester
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section #, as well as any words that quickly give your peers insights into the application like programming language, development platform, type of application, etc.

## Project Abstract

This document proposes an application of quantitative trading strategies to create a desktop application that may select profitable stocks, indicate when to sell stocks, simulate trading in real time and even analyze orders placed via a QuantConnect account. The user may interact with a UI to first select one of three strategies: a day trading, a long-term trading, and an S&P 500 strategy. The day trading strategy will buy and sell stocks in real time instantaneously, while the long-term trading strategy will buy stocks with the most growth potential over time, sell them when they are done growing, after at least a day. Finally, the S&P 500 strategy will analyze stock data of fortune 500 companies and buy stocks for the best performing companies. The user may also select between a simulation mode and a trading mode, the trading mode involving trading automatically through the user’s QuantConnect account and the simulation mode simulating trades with a base amount of capital provided by the user and comparisons to the performance of the S&P 500.

## High Level Requirement

The user may interact with a user interface to show stock data accessed through the Alpha Vantage API, including graphs with relevant data. The user may choose a simulation mode to analyze quantitative trading strategies utilizing regression, stock data, and relevant indicators and see potential profits from real time trading data. The user may also choose a trading mode to automatically make actual trades with real money through the QuantConnect trading platform. 


## Conceptual Design

This trading bot will utilize the python programming language with the NumPy and pandas libraries. Stock data will be accessed through the Alpha Vantage API, as it is free. QuantConnect will be the trading platform used as it allows for automation using python and has no commission price for stocks and ETFs. Additionally, wxPython will be used to create a robust user interface. This bot will also be able to be run on any modern 64 bit Windows, MacOS and Linux operating systems.

## Background

The difference between this bot and others are as follows:  

This is a free product  

It integrates a simulation  

It comes with a built-in user interface  

It does not violate any Terms of Service  

Many open source bots exist but are of questionable reliability. They also act on a variety of trading platforms, many of which have automatic trading against their terms of service. These bots often result in accounts with these platforms being terminated. As such this product aims to provide a safe, legal and reliable way to make money in and understand the stock market. Now QuantConnect already has some built-in trading bots, however they will not be used except for comparing performance between these and this product’s bots/strategies.

Sources:
https://medium.com/codex/the-mystery-of-the-robinhood-api-99a4cd62a531
https://github.com/public-apis/public-apis
https://www.investopedia.com/articles/active-trading/081315/how-code-your-own-algo-trading-robot.asp

## Required Resources

This project will require extensive research on quantitative trading algorithms. I am already familiar with some, such as Kelly’s Criterion, however more should be considered. This will require an installation of QuantConnect, which is a free trading platform, along with an account linked to a bank account if trading with real money is pursued. This will require discussion with the instructor as I am unfamiliar with the policy when it comes to something like this, though I would be willing to put $20 of my own money into this account. This will require a Python IDE such as VSCode, libraries such as NumPy, Pandas and wxPython, the Alpha Vantage API, and a modern computer with a 64 bit Windows, MacOS or Linux operating system.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>John Bernardin</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Jaffar Alzeidi</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Sean Britt</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Patrick Doyle</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Guthrie Albertson</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Nick Bonanni</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Shawn Fowler</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Owen King</b></sub>
        </a>
    </td>
</tr>

</table>

[//]: # ( readme: collaborators -end )
