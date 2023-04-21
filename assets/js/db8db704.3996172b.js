"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),c=r,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,description:"What should be in this section."},o="Design Document - Part II API",l={unversionedId:"api-specification/design-api-intro",id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"What should be in this section.",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-algorithmic-trading/docs/api-specification/design-api-intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"jbbernardin",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"What should be in this section."},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-algorithmic-trading/docs/category/api-specification"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-algorithmic-trading/docs/api-specification/openapi-spec"}},s={},d=[{value:"Thread",id:"thread",level:2},{value:"start",id:"start",level:4},{value:"run",id:"run",level:4},{value:"join",id:"join",level:4},{value:"is_alive",id:"is_alive",level:4},{value:"DatabaseThread",id:"databasethread",level:2},{value:"__init__",id:"__init__",level:4},{value:"execute_query",id:"execute_query",level:4},{value:"notify_website",id:"notify_website",level:4},{value:"UserThread",id:"userthread",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"get_portfolio",id:"get_portfolio",level:4},{value:"receive_strategy",id:"receive_strategy",level:4},{value:"request_trade",id:"request_trade",level:4},{value:"update_portfolio",id:"update_portfolio",level:4},{value:"StrategyThread",id:"strategythread",level:2},{value:"__init__",id:"__init__-2",level:4},{value:"unpack_parameters",id:"unpack_parameters",level:4},{value:"receive_stock_data",id:"receive_stock_data",level:4},{value:"SP500Strategy",id:"sp500strategy",level:2},{value:"__init__",id:"__init__-3",level:4},{value:"longTermTradingStrategy",id:"longtermtradingstrategy",level:2},{value:"__init__",id:"__init__-4",level:4},{value:"DayTradingStrategy",id:"daytradingstrategy",level:2},{value:"__init__",id:"__init__-5",level:4}],p={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design-document---part-ii-api"},"Design Document - Part II API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements")),(0,r.kt)("p",null,"In addition to the general documentation requirements the Design Document - Part II API will contain:"),(0,r.kt)("p",null,"General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For each class define the data fields, methods.")),(0,r.kt)("p",null,"The purpose of the class."),(0,r.kt)("p",null,"The purpose of each data field."),(0,r.kt)("p",null,"The purpose of each method"),(0,r.kt)("p",null,"Pre-conditions if any."),(0,r.kt)("p",null,"Post-conditions if any."),(0,r.kt)("p",null,"Parameters and data types"),(0,r.kt)("p",null,"Return value and output variables"),(0,r.kt)("p",null,"Exceptions thrown","*"," (PLEASE see note below for details)."),(0,r.kt)("p",null,"An example of an auto-generated and then augmented API specification is here (",(0,r.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928898?wrap=1",title:"Fiscal Design Document 2_API.docx"},"Fiscal Design Document 2","_","API.docx")," )"),(0,r.kt)("p",null,"This group developed their API documentation by hand (",(0,r.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928899?wrap=1",title:"Design Document Part 2 API-1_MovieMatch.docx"},"Design Document Part 2 API-1","_","MovieMatch.docx")," )"),(0,r.kt)("p",null,"*",'At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User\u2019s Manual.'),(0,r.kt)("a",{id:"main"}),(0,r.kt)("h1",{id:"algorithmic-trading-python-class-documentation"},"Algorithmic Trading Python Class Documentation"),(0,r.kt)("a",{id:"main.Thread"}),(0,r.kt)("h2",{id:"thread"},"Thread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Thread(threading.Thread)\n")),(0,r.kt)("p",null,"Base thread class that other threads inherit from."),(0,r.kt)("a",{id:"main.Thread.start"}),(0,r.kt)("h4",{id:"start"},"start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def start()\n")),(0,r.kt)("p",null,"Start the thread's activity."),(0,r.kt)("p",null,"It must be called at most once per thread object. It arranges for the object's  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.run",title:"threading.Thread.run"},(0,r.kt)("inlineCode",{parentName:"a"},"run()")),"  method to be invoked in a separate thread of control."),(0,r.kt)("p",null,"This method will raise a  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/exceptions.html#RuntimeError",title:"RuntimeError"},(0,r.kt)("inlineCode",{parentName:"a"},"RuntimeError")),"  if called more than once on the same thread object."),(0,r.kt)("a",{id:"main.Thread.run"}),(0,r.kt)("h4",{id:"run"},"run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def run()\n")),(0,r.kt)("p",null,"Method representing the thread's activity."),(0,r.kt)("p",null,"You may override this method in a subclass. The standard  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.run",title:"threading.Thread.run"},(0,r.kt)("inlineCode",{parentName:"a"},"run()")),"  method invokes the callable object passed to the object's constructor as the  ",(0,r.kt)("em",{parentName:"p"},"target"),"  argument, if any, with positional and keyword arguments taken from the  ",(0,r.kt)("em",{parentName:"p"},"args"),"  and  ",(0,r.kt)("em",{parentName:"p"},"kwargs"),"  arguments, respectively."),(0,r.kt)("p",null,"Using list or tuple as the  ",(0,r.kt)("em",{parentName:"p"},"args"),"  argument which passed to the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread",title:"threading.Thread"},(0,r.kt)("inlineCode",{parentName:"a"},"Thread")),"  could achieve the same effect."),(0,r.kt)("a",{id:"main.Thread.join"}),(0,r.kt)("h4",{id:"join"},"join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def join()\n")),(0,r.kt)("p",null,"Wait until the thread terminates. This blocks the calling thread until the thread whose  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  method is called terminates either normally or through an unhandled exception or until the optional timeout occurs."),(0,r.kt)("p",null,"When the  ",(0,r.kt)("em",{parentName:"p"},"timeout"),"  argument is present and not  ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", it should be a floating point number specifying a timeout for the operation in seconds (or fractions thereof). As  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  always returns  ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", you must call  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.is_alive",title:"threading.Thread.is_alive"},(0,r.kt)("inlineCode",{parentName:"a"},"is_alive()")),"  after  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  to decide whether a timeout happened if the thread is still alive, the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  call timed out."),(0,r.kt)("p",null,"When the  ",(0,r.kt)("em",{parentName:"p"},"timeout"),"  argument is not present or  ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", the operation will block until the thread terminates."),(0,r.kt)("p",null,"A thread can be joined many times."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  raises a  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/exceptions.html#RuntimeError",title:"RuntimeError"},(0,r.kt)("inlineCode",{parentName:"a"},"RuntimeError")),"  if an attempt is made to join the current thread as that would cause a deadlock. It is also an error to  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.join",title:"threading.Thread.join"},(0,r.kt)("inlineCode",{parentName:"a"},"join()")),"  a thread before it has been started and attempts to do so raise the same exception."),(0,r.kt)("a",{id:"main.Thread.is_alive"}),(0,r.kt)("h4",{id:"is_alive"},"is","_","alive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def is_alive()\n")),(0,r.kt)("p",null,"Return whether the thread is alive."),(0,r.kt)("p",null,"This method returns  ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"  just before the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.run",title:"threading.Thread.run"},(0,r.kt)("inlineCode",{parentName:"a"},"run()")),"  method starts until just after the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread.run",title:"threading.Thread.run"},(0,r.kt)("inlineCode",{parentName:"a"},"run()")),"  method terminates. The module function  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.enumerate",title:"threading.enumerate"},(0,r.kt)("inlineCode",{parentName:"a"},"enumerate()")),"  returns a list of all alive threads."),(0,r.kt)("a",{id:"main.DatabaseThread"}),(0,r.kt)("h2",{id:"databasethread"},"DatabaseThread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class DatabaseThread(Thread)\n")),(0,r.kt)("p",null,"Thread that manages connecting to and querying the database."),(0,r.kt)("a",{id:"main.DatabaseThread.__init__"}),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(database_url: str, database_password: str, server_ip: str)\n")),(0,r.kt)("p",null,"Initializes the database thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database_url")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The URL of the database to connect to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database_password")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The password to use for the database connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_ip")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The IP address of the server to connect to.")),(0,r.kt)("a",{id:"main.DatabaseThread.execute_query"}),(0,r.kt)("h4",{id:"execute_query"},"execute","_","query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def execute_query(query: str) -> List[Tuple]\n")),(0,r.kt)("p",null,"Executes a query on the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The SQL query to execute.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A list of tuples containing the query results."),(0,r.kt)("a",{id:"main.DatabaseThread.notify_website"}),(0,r.kt)("h4",{id:"notify_website"},"notify","_","website"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def notify_website()\n")),(0,r.kt)("p",null,"Thread is connected to website with websocket, after query has been run to update the database, sends\nnotification for page to refresh and display new data."),(0,r.kt)("a",{id:"main.UserThread"}),(0,r.kt)("h2",{id:"userthread"},"UserThread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class UserThread(Thread)\n")),(0,r.kt)("p",null,"Thread that handles requests for users."),(0,r.kt)("a",{id:"main.UserThread.__init__"}),(0,r.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(username: str, password: str, quantconnect_username: str,\n             quantconnect_password: str)\n")),(0,r.kt)("p",null,"Initializes the user thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The username of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The password of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantconnect_username")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The QuantConnect username of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantconnect_password")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The QuantConnect password of the user.")),(0,r.kt)("a",{id:"main.UserThread.get_portfolio"}),(0,r.kt)("h4",{id:"get_portfolio"},"get","_","portfolio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_portfolio() -> Dict[str, float]\n")),(0,r.kt)("p",null,"Gets current portfolio for user from QuantConnect API, takes amount of holdings in all stocks and converts\ncurrent value to percentage of all holdings to store in portfolio dictionary."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A dictionary containing the user's portfolio."),(0,r.kt)("a",{id:"main.UserThread.receive_strategy"}),(0,r.kt)("h4",{id:"receive_strategy"},"receive","_","strategy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def receive_strategy()\n")),(0,r.kt)("p",null,"Based on selected strategy for user, Strategy is gathered from strategy thread.  If there are any changes to current strategy, trades are requested through the ",(0,r.kt)("strong",{parentName:"p"},"requestTrade()")," function."),(0,r.kt)("a",{id:"main.UserThread.request_trade"}),(0,r.kt)("h4",{id:"request_trade"},"request","_","trade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def request_trade()\n")),(0,r.kt)("p",null,"Using QuantConnection API, trades are performed until current portfolio matches portfolio recieved from strategy thread.\nAs each API call is made, thread waits until confirmation of trade is completed before next trade is initiated for current user.\nIf trade fails, a new trade will instead be requested to move money into a money market account until next trade request is made, at which point the stocks in portfolio will attempt to be purchased again"),(0,r.kt)("a",{id:"main.UserThread.update_portfolio"}),(0,r.kt)("h4",{id:"update_portfolio"},"update","_","portfolio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def update_portfolio()\n")),(0,r.kt)("p",null,"Main task for thread, initially calls ",(0,r.kt)("strong",{parentName:"p"},"getPortfolio()")," to store current holdings in thread, then calls ",(0,r.kt)("strong",{parentName:"p"},"recieveStrategy")," to determine if updates must be made."),(0,r.kt)("a",{id:"main.StrategyThread"}),(0,r.kt)("h2",{id:"strategythread"},"StrategyThread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class StrategyThread(Thread)\n")),(0,r.kt)("p",null,"Abstract class which makes the necessary calls to get and process information to inform certain strategies"),(0,r.kt)("a",{id:"main.StrategyThread.__init__"}),(0,r.kt)("h4",{id:"__init__-2"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(alpha_vantage_api_key: str)\n")),(0,r.kt)("p",null,"Initializes the strategy thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alpha_vantage_api_key")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The API key to use for Alpha Vantage.")),(0,r.kt)("a",{id:"main.StrategyThread.unpack_parameters"}),(0,r.kt)("h4",{id:"unpack_parameters"},"unpack","_","parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def unpack_parameters()\n")),(0,r.kt)("p",null,"Parameters passed to each of the threads that implement this class will be different, but all parameters will be passed in by dictionary.  Takes elements of key;value pairs and update local variables."),(0,r.kt)("a",{id:"main.StrategyThread.receive_stock_data"}),(0,r.kt)("h4",{id:"receive_stock_data"},"receive","_","stock","_","data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def receive_stock_data()\n")),(0,r.kt)("p",null,"Makes API call to AlphaVantage will APIKey to gather stock information on stocks relevant to Strategy,"),(0,r.kt)("a",{id:"main.SP500Strategy"}),(0,r.kt)("h2",{id:"sp500strategy"},"SP500Strategy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class SP500Strategy(StrategyThread)\n")),(0,r.kt)("p",null,"This is our most basic trading strategy.  The strategy does not factor any user parameters into strategy, determination of how strategy is made is yet to be determined in detail."),(0,r.kt)("a",{id:"main.SP500Strategy.__init__"}),(0,r.kt)("h4",{id:"__init__-3"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(alpha_vantage_api_key: str)\n")),(0,r.kt)("p",null,"Initializes the SP500Strategy thread."),(0,r.kt)("a",{id:"main.longTermTradingStrategy"}),(0,r.kt)("h2",{id:"longtermtradingstrategy"},"longTermTradingStrategy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class longTermTradingStrategy(StrategyThread)\n")),(0,r.kt)("p",null,"Takes into account different time horizons for when users are expecting to sell off stocks, and level of risk depending on user preference.\nWhile the code for determining the trading strategy will be complex, no unique functions will be created other than those defined in the strategyThread interface that this class implements."),(0,r.kt)("a",{id:"main.longTermTradingStrategy.__init__"}),(0,r.kt)("h4",{id:"__init__-4"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(plannedYearsInvested: int, riskLevel: str,\n             alpha_vantage_api_key: str)\n")),(0,r.kt)("p",null,"Initializes the longTermTradingStrategy thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plannedYearsInvested")," ",(0,r.kt)("em",{parentName:"li"},"int")," - The total number of years until money is expected to be pulled out of\ninvestments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"riskLevel")," ",(0,r.kt)("em",{parentName:"li"},"str")," - The amount of risk the user is comfortable taking, altered by\nplannedYearsInvested to become less risky as date gets closer")),(0,r.kt)("a",{id:"main.DayTradingStrategy"}),(0,r.kt)("h2",{id:"daytradingstrategy"},"DayTradingStrategy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class DayTradingStrategy(StrategyThread)\n")),(0,r.kt)("p",null,"Similarly to our other two trading strategies, no additional functions are implemented, but user's selection of what their largest threshold is for loss, stored as ",(0,r.kt)("em",{parentName:"p"},"floorPercentage"),", and what percentage gain at which point they wish to sell, ",(0,r.kt)("em",{parentName:"p"},"benchmarkPercentage"),", are taken into consideration in ",(0,r.kt)("strong",{parentName:"p"},"updateStrategy()")," function."),(0,r.kt)("a",{id:"main.DayTradingStrategy.__init__"}),(0,r.kt)("h4",{id:"__init__-5"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(alpha_vantage_api_key: str, floorPercentage: float,\n             benchmarkPercentage: float)\n")),(0,r.kt)("p",null,"Initializes the DayTradingStrategy thread."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"floorPercentage")," ",(0,r.kt)("em",{parentName:"li"},"float")," - The maximum percent loss in value of a stock the user wants before selling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"benchmarkPercentage")," ",(0,r.kt)("em",{parentName:"li"},"float")," - The lowest percent gain in value of a stock before user wants to sell")))}h.isMDXComponent=!0}}]);