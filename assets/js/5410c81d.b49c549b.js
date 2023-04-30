"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Activities",s={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering:",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-algorithmic-trading/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"guthriealbertson",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-algorithmic-trading/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-algorithmic-trading/docs/development-plan/tasks"}},l={},c=[],h={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"activities"},"Activities"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements Gathering:"),(0,r.kt)("br",{parentName:"p"}),"\n","Tradester requires real-time stock data, which will be received through the yahoo_fin API. This information will later be stored in a database, which will require a free firebase account. The final requirement that must be gathered is user input, which will be done using a website front-end."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Top-level Design:"),"  "),(0,r.kt)("p",null,"Tradester will be a web and mobile application where users may go to their website and select either a trading or simulation mode. Within simulation mode, they may input some number representing the amount of money they are starting with, then choose one of three algorithms: day-trading, long-term, or S&P 500. Then they will input the money and see in real time how the algorithm performs via graphs. Additionally, other factors such as risk tolerance may be changed for each strategy. Additionally, the user may choose to test each algorithm with historical data and see how it performs over a certain time-frame. The trading mode will instead connect to the user\u2019s Quant Connect account and make trades with real money, also showing with graphs how their money is changing in real time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Detailed Design:"),"  "),(0,r.kt)("p",null,"All stock data will be stored in a database hosted by firebase. This data will be retrieved via a python script call from the website which will then make an API call using the yahoo_fin API to store data in the database. From this data, each algorithm will use machine learning techniques in order to choose which stocks should be purchased, and either simulate a purchase by logging the relevant information or carry out a purchase through an API call to QuantConnect, then store the relevant information in the database. The website will be coded in Javascript and access the database in order to produce graphs of how each purchased stock as well as the user\u2019s total capital is performing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementation:"),"  "),(0,r.kt)("p",null,"The implementation will consist of a python backend, a javascript front end, a database using Firebase, and a mobile app based on the website version. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Integration:"),"  "),(0,r.kt)("p",null,"The website will make calls to python methods using Javascript commands that read in stock data using the yahoo_fin API. The python script will then send this data to the database, which can be read by the website to produce graphs. Additionally, this data can be read in by the python script in order to make stock purchases, then send the relevant information of each purchase to the database to be read into the website. Finally, the mobile app will operate in the exact same fashion as the website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testing:"),"  "),(0,r.kt)("p",null,"While writing code we will use unit tests to ensure that each method or sections of code we write are sound. We will ensure first that the test can be failed, then verify that our method passes the test. Integration tests will be used to ensure that connecting features together does not cause issues. Functional tests will be used to ensure that outputs from methods are what we expect. End-to-end tests will be used to ensure that someone acting as a user is receiving the intended experience from our application. Acceptance testing will be used to verify that all requirements outlined in this document have been met adequately. Performance testing will be used to ensure that our backend is not too sluggish when reading in stock data and purchasing stocks. Finally, smoke testing will be used to ensure that each major feature is working as intended."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bug Fixing:"),"  "),(0,r.kt)("p",null,"If bugs are found during testing, we will evaluate: if there is an error message we will examine the line numbers and attempt to diagnose the issue with our prior knowledge or by copy pasting the message into Google. If nulls are present in the data, we will examine first the data frame it is collected from and then the methods and API calls used to retrieve the data. If some other issues are present that are less obvious, we will use a debugger to track values throughout the runtime in order to potentially locate the source of the bug."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optimization:"),"  "),(0,r.kt)("p",null,"Optimization is imperative for this project considering that live stock data is being used and accessed. This means that to optimize, we will first measure the time that our code takes. Then we will refactor in order to reduce computations and runtime in terms of data collection. Finally, if no further adjustments are obvious, we will evaluate if there are faster APIs or any way to potentially reduce API calls."))}d.isMDXComponent=!0}}]);