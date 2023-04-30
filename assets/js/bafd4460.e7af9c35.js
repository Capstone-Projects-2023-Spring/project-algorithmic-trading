"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Features and Requirements",s={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Graphing Functionality",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-algorithmic-trading/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"guthriealbertson",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-algorithmic-trading/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-algorithmic-trading/docs/requirements/use-case-descriptions"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,a.kt)("p",null,"Graphing Functionality"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Graphical representation of real-time stock updates via a database\n- Graphical representation of historical stock data saved to a database\n")),(0,a.kt)("p",null,"Backtesting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Integration with database containing historical stock data\n- Creating functionality for algorithms to run on batch data instead of real time data\n- Store incoming live data into historical database\n")),(0,a.kt)("p",null,"User Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Design simplified mobile interface with functionality only to buy/sell/view stocks/simulations\n- Create functionality to alter account settings, backtest, work with stocks, and display stock data from webpage\n- Create ability to view other account holdings in the same Group as user on mobile/website \n")),(0,a.kt)("p",null,"Simulation Mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Create method to store/update simulated account value\n- Create method to store/display this values changes over time\n")),(0,a.kt)("p",null,"Display Live Stock Data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Integrate with Alpha Vantage API to track live stocks of user\u2019s choosing\n- Offer settings on how frequently to display \n")),(0,a.kt)("p",null,"Automated Trading Bot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Trading done automatically via algorithms written in Python, with optional manual adjustments\n- Make trades through integration with QuantConnect\n")),(0,a.kt)("p",null,"S&P 500 Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Create function to find and track all S&P 500 members stock values and market capitalization\n- Create a function to allocate portions of invested money according to stock value and market cap. parameters\n")),(0,a.kt)("p",null,"Long Term Trading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Categorize stocks/bonds/ETFs into categories based on risk\n- Present user with ability to pick desired date to pull money\n- Create function to alter risk level of investments automatically over time as risk strategy changes\n")),(0,a.kt)("p",null,"Day Trading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Create algorithm to display stocks with the largest percent growth during current trading session\n- Offer users ability to put money into certain stocks that meet the parameters they define\n- Offer ability for users to quickly dump their holdings in certain stock\n")),(0,a.kt)("p",null,"View Invitations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Grant user the option to enter the account ID of other users they wish to share their portfolio data with\n- Create automated email that gets sent when user selects this option\n- Add the linked user\u2019s portfolio information to their dashboard\n")),(0,a.kt)("p",null,"Create Groups of View Invitations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Create ability for invitations to be sent out to large quantities of other users\n- Create unique display for comparison between other group members holdings/balances\n")))}p.isMDXComponent=!0}}]);