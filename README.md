


<div align="right">

[![Open in Codespaces](https://github.com/codespaces/badge.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118280)

</div>

<div align="center">

# Tradester
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)

</div>

## Running Locally

If you would like to run Tradester locally, you can do so using node.js to run the frontend and poetry to run the backend. We suggest using nvm (macos, linux) or nvm-windows to install the current version of node and npm, click [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you don't have those installed yet.  poetry can be downloaded [here](https://python-poetry.org/), and you will need the latest version of python, available [here](https://www.python.org/).  

npm and poetry will create virtual environments with the required dependencies to run the frontend and backend, respectively.

Open two terminals (or shell applications). In one terminal, deploy the frontend by navigating to /webapp and inputing the following:

    npm install
    npm run start

In the other terminal, navigate to /tradester_backend (not /tradester_backend/tradester_backend), and deploy the backend with the following:

    poetry install
    poetry run python3 manage.py runserver

In both cases, if no new packages have been added to the project, there is no need to run the install command, but it is a good habit to run the install as an early debug if you cannot get a new version of the project to run. Also, I use the command ```python3``` as shorthand for the latest version of python.  

## Keywords

Section 2, python, react, machine learning, simulated stock trading

## Project Abstract

This document proposes an educational webb application for simulated stock trading using real stock data and a machine learning model to predict future stock values. The user may make an account, choose an amount to being trading with, and begin viewing, purchasing, and selling stocks in a simualted environment. This application is for education, and as such the user may connect to other user accounts to compare their own strategies to their peers.

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
