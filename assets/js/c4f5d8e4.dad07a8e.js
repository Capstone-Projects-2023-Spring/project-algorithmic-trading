"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{9337:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294);function i(t){function e(){return e=t.id?t.id:(e=(e=(e=t.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return n.createElement("figure",{id:e(),align:t.align?t.align:"center",style:t.style?t.style:{}},t.children,t.src?n.createElement("img",{src:t.src,alt:t.alt}):n.createElement(n.Fragment,null),n.createElement("figcaption",{align:t.align?t.align:"center",style:{fontWeight:"bold"}},t.caption),n.createElement("figcaption",{align:t.align?t.align:"center",style:{}},t.subcaption))}},8140:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});var n=a(7294),i=a(6010),r=(a(9960),a(2263)),s=a(782),l=a(7462),o=a(3905);const u={toc:[{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Collaborators",id:"collaborators",level:2}]};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118280"},(0,o.kt)("img",{parentName:"a",src:"https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg",alt:"Open in Codespaces"}))),(0,o.kt)("div",{align:"center"},(0,o.kt)("h1",{id:"tradester"},"Tradester"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://applebaumian.github.io/tu-cis-4398-docs-template/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,o.kt)("h2",{id:"keywords"},"Keywords"),(0,o.kt)("p",null,"Section #, as well as any words that quickly give your peers insights into the application like programming language, development platform, type of application, etc."),(0,o.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,o.kt)("p",null,"This document proposes an application of quantitative trading strategies to create a desktop application that may select profitable stocks, indicate when to sell stocks, simulate trading in real time and even analyze orders placed via a QuantConnect account. The user may interact with a UI to first select one of three strategies: a day trading, a long-term trading, and an S&P 500 strategy. The day trading strategy will buy and sell stocks in real time instantaneously, while the long-term trading strategy will buy stocks with the most growth potential over time, sell them when they are done growing, after at least a day. Finally, the S&P 500 strategy will analyze stock data of fortune 500 companies and buy stocks for the best performing companies. The user may also select between a simulation mode and a trading mode, the trading mode involving trading automatically through the user\u2019s QuantConnect account and the simulation mode simulating trades with a base amount of capital provided by the user and comparisons to the performance of the S&P 500."),(0,o.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,o.kt)("p",null,"The user may interact with a user interface to show stock data accessed through the Alpha Vantage API, including graphs with relevant data. The user may choose a simulation mode to analyze quantitative trading strategies utilizing regression, stock data, and relevant indicators and see potential profits from real time trading data. The user may also choose a trading mode to automatically make actual trades with real money through the QuantConnect trading platform. "),(0,o.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,o.kt)("p",null,"This trading bot will utilize the python programming language with the NumPy and pandas libraries. Stock data will be accessed through the Alpha Vantage API, as it is free. QuantConnect will be the trading platform used as it allows for automation using python and has no commission price for stocks and ETFs. Additionally, wxPython will be used to create a robust user interface. This bot will also be able to be run on any modern 64 bit Windows, MacOS and Linux operating systems."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The difference between this bot and others are as follows:  "),(0,o.kt)("p",null,"This is a free product  "),(0,o.kt)("p",null,"It integrates a simulation  "),(0,o.kt)("p",null,"It comes with a built-in user interface  "),(0,o.kt)("p",null,"It does not violate any Terms of Service  "),(0,o.kt)("p",null,"Many open source bots exist but are of questionable reliability. They also act on a variety of trading platforms, many of which have automatic trading against their terms of service. These bots often result in accounts with these platforms being terminated. As such this product aims to provide a safe, legal and reliable way to make money in and understand the stock market. Now QuantConnect already has some built-in trading bots, however they will not be used except for comparing performance between these and this product\u2019s bots/strategies."),(0,o.kt)("p",null,"Sources:\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/codex/the-mystery-of-the-robinhood-api-99a4cd62a531"},"https://medium.com/codex/the-mystery-of-the-robinhood-api-99a4cd62a531"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/public-apis/public-apis"},"https://github.com/public-apis/public-apis"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.investopedia.com/articles/active-trading/081315/how-code-your-own-algo-trading-robot.asp"},"https://www.investopedia.com/articles/active-trading/081315/how-code-your-own-algo-trading-robot.asp")),(0,o.kt)("h2",{id:"required-resources"},"Required Resources"),(0,o.kt)("p",null,"This project will require extensive research on quantitative trading algorithms. I am already familiar with some, such as Kelly\u2019s Criterion, however more should be considered. This will require an installation of QuantConnect, which is a free trading platform, along with an account linked to a bank account if trading with real money is pursued. This will require discussion with the instructor as I am unfamiliar with the policy when it comes to something like this, though I would be willing to put $20 of my own money into this account. This will require a Python IDE such as VSCode, libraries such as NumPy, Pandas and wxPython, the Alpha Vantage API, and a modern computer with a 64 bit Windows, MacOS or Linux operating system."),(0,o.kt)("h2",{id:"collaborators"},"Collaborators"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"John Bernardin")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Jaffar Alzeidi")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Sean Britt")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Patrick Doyle")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Guthrie Albertson")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Nick Bonanni")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Shawn Fowler")))),(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,o.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,o.kt)("br",null),(0,o.kt)("sub",null,(0,o.kt)("b",null,"Owen King")))))))}function h(){return n.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},n.createElement(c,null))}c.isMDXComponent=!0;const d="heroBanner_qdFl",m="buttons_AeoN";var p=a(6706);function g(){const{siteConfig:t}=(0,r.Z)();return n.createElement("header",{className:(0,i.Z)("hero hero--primary",d)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:"hero__subtitle"},t.tagline),n.createElement("div",{className:m},n.createElement("a",{className:"button button--secondary button--lg",href:"https://jalzeidi.github.io/tradester-frontend/",target:"_blank"},"Tradester App \ud83d\udcc8"),n.createElement("div",null,n.createElement("em",null,"NOTE: Our backend is a hosted on a free service that spins down after inactivity. Requests made for the first time after a period of inactivity will take about 30-60 seconds to return. Subsequent requests should be fast.")))))}function b(){const{siteConfig:t}=(0,r.Z)();return n.createElement(s.Z,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(g,null),n.createElement("main",null,n.createElement(p.Z,null,n.createElement(h,null))))}},6706:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(7294),i=a(4912);function r(t){return n.createElement(n.Fragment,null,n.createElement(i.Z,t))}},6922:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(7294),i=a(9337),r=a(9676);const s={React:n,...n,Figure:i.Z,dinosaur:r.Z}},9676:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);