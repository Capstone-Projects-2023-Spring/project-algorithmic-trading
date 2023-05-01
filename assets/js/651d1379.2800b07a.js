"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=s,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:5},a="Use-case descriptions",o={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case #1",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-algorithmic-trading/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Sean Britt",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-algorithmic-trading/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-algorithmic-trading/docs/category/software-development-plan"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,s.kt)("p",null,"Use Case #1 "),(0,s.kt)("p",null,"User #1 wants to make automated investments using the S&P 500 trading strategy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User logs into their Tradestar application, User enters input into the client\n2. User is directed to their Tradester account, Input is sent from the client to the API, which sends account data back to the client. \n3. User inputs the amount of capital they\u2019d like to invest, User enters input into the client\n4. User selects the S&P 500 trading strategy, User enters input into the client\n5. User clicks the \u201cStart Trading\u201d button on the website, Client uses user input to determine an algorithm for making trades\n6. After a period of time, User checks to see how their investment has performed, Client pulls data from the API, making investments based on the algorithm chosen and updating the client balance accordingly\n")),(0,s.kt)("p",null,"Use Case #2"),(0,s.kt)("p",null,"User #2 wants to change her automated investment strategy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User logs into the Tradestar application, User enters input into the client\n2. User is directed to their Tradester account, Input is sent from the client to the API, which sends account data back to the client. \n3. User clicks the \u201cCurrent Investments\u201d link on Tradester, User enters input into the client\n4. User clicks on an automated investment they previously started, Client displays data previously pulled from the API\n5. User clicks \u201cEdit Trading Strategy\u201d, User enters input into the client\n6. User indicates that they wants to make trades based on a stock\u2019s \u201cPrice to Cashflow\u201d ratio in addition to the default S&P 500 strategy by clicking the corresponding radio box, User enters input into the client\n7. User clicks the \u201cResume Trading\u201d button on the website, Client adds new parameter to the trading algorithm and now makes investment decisions in a different way\n")),(0,s.kt)("p",null,"Use Case #3"),(0,s.kt)("p",null,"User #3 wants to see in-depth data on the performance of their investments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User clicks the \u201cInvestment Report\u201d link on Tradester, User enters input into the client\n2. User chooses an automated investment from a list, User enters input into the client\n3. User views a detailed report on the performance of their selected investment with different graphs to display different aspects of their investment performance, Client sends user input to the API which selects and graphs data based on input and sends these graphs back to the client\n")),(0,s.kt)("p",null,"Use Case #4 "),(0,s.kt)("p",null,"User #4 wants to invest in stocks manually based on suggestions from Tradester"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User clicks the \u201cStock Selector\u201d link on Tradester, User enters input into the client\n2. User chooses the \u201cLong-Term\u201d investment strategy, User enters input into the client\n3. User views a ranked list of stocks selected by Tradester using their investment strategy, Client sends user input to the API which returns historical stock data to the client. The client runs the selected algorithm on the data and displays the selected stocks\n4. User selects the highest ranked stock to invest in and enters the amount of capital they\u2019d like to invest, User enters input into the client\n5. User presses the \u201cInvest\u201d button, Client sends input to the API to invest in the specified stock\n")))}d.isMDXComponent=!0}}]);