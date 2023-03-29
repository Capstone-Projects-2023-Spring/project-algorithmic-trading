"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,N=m["".concat(p,".").concat(d)]||m[d]||k[d]||s;return a?r.createElement(N,l(l({ref:t},u),{},{components:a})):r.createElement(N,l({ref:t},u))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1},l=void 0,i={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"unit-testing",description:"Unit tests",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-algorithmic-trading/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Sean Britt",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-algorithmic-trading/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-algorithmic-trading/docs/testing/integration-testing"}},p={},o=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Index.js",id:"indexjs",level:4},{value:"App.js",id:"appjs",level:4},{value:"About.js",id:"aboutjs",level:4},{value:"Home.js",id:"homejs",level:4},{value:"Blog.js",id:"blogjs",level:4},{value:"Dashboard.tsx",id:"dashboardtsx",level:4},{value:"Login.tsx",id:"logintsx",level:4},{value:"RegisterForm.js",id:"registerformjs",level:4},{value:"Post.tsx",id:"posttsx",level:4},{value:"Simulation.tsx",id:"simulationtsx",level:4},{value:"NavBar.js",id:"navbarjs",level:4},{value:"Search.js",id:"searchjs",level:4},{value:"Backend",id:"backend",level:3}],u={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,n.kt)("h3",{id:"frontend"},"Frontend"),(0,n.kt)("p",null,"We are using Jest to test the front end website. Jest is a testing framework that is functional with React and Typescript. Each page will undergo testing to make sure it can render and route to other pages, as well as any additional testing that is needed for the page to function properly. "),(0,n.kt)("h4",{id:"indexjs"},"Index.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSiteRender()"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Site renders correctly  "),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if site renders  ")))),(0,n.kt)("h4",{id:"appjs"},"App.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRoutes()"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Valid routes to separate pages are established   "),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to navigate to separate pages  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testImportNavBar()"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: NavBar is integrated successfully "),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if NavBar is displayed "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testImportHomePage()"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Home page is integrated successfully"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Home page is displayed")))),(0,n.kt)("h4",{id:"aboutjs"},"About.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testAboutRender()"),"   "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: About page renders correctly "),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if About page renders "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testAboutRouting()"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: About page uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route")))),(0,n.kt)("h4",{id:"homejs"},"Home.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testHomeRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Home page renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Home page renders  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testHomeRouting()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Home page uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route")))),(0,n.kt)("h4",{id:"blogjs"},"Blog.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testBlogRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Blog page renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Blog page renders  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testAboutRouting()")," "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Blog page uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route  ")))),(0,n.kt)("h4",{id:"dashboardtsx"},"Dashboard.tsx"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testDashboardRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Dashboard renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Dashboard renders"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testDashboardRouting()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Dashboard uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testGraphRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Graphs can be rendered on the dashboard"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if graph is displayed "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testStockDataRetrieval()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Data can be retrieved from back end via API call"),(0,n.kt)("li",{parentName:"ul"},"Result: Data is successfully pulled")))),(0,n.kt)("h4",{id:"logintsx"},"Login.tsx"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testLoginToken()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Ticket is created upon successful login"),(0,n.kt)("li",{parentName:"ul"},"Result: Token is generated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testLoginRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Login page renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Login page renders "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testLoginRouting()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Login page can use routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testUsernameRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Username textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if username textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testPasswordRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Password textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if password textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testLoginButtonRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Login button renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if login button is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testLoginButtonFunction()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Login button can be used to login in user"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if button submits a login request"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testBadLogin()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: User enters an incorrect username and/or password"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if login is denied and error is shown"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testUsernameRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Username textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if username textbox is displayed")))),(0,n.kt)("h4",{id:"registerformjs"},"RegisterForm.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testUsernameRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Username textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if username textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testEmailRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Email textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if email textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testPasswordRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Password textbox renders"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if password textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testBadUsername()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Invalid username fails to register an account"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if registration is rejected"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testBadEmail()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Invalid email fails to register an account"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if registration is rejected"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testBadPassword()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Invalid password fails to register an account"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if registration is rejected"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRegisterButton()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Register button can successfully register a new account"),(0,n.kt)("li",{parentName:"ul"},"Result: New account is created")))),(0,n.kt)("h4",{id:"posttsx"},"Post.tsx"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testPostRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Post page renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Post page renders"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testPostRouting()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Post page uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route")))),(0,n.kt)("h4",{id:"simulationtsx"},"Simulation.tsx"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSimulationRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Simulation page renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if Simulation page renders"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSimulationRouting()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Simulation page uses routing correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if able to route"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testInvestmentRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Investment text box renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if textbox is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testInvestmentSubmitButton()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Submit button can submit an investment to the database"),(0,n.kt)("li",{parentName:"ul"},"Result: Investment amount is added to the database"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSimulationReport()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Simulation report displays correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Simulation report is presented to user")))),(0,n.kt)("h4",{id:"navbarjs"},"NavBar.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testNavBarRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: NavBar renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if NavBar is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testNavBarImports()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Links to separate pages are imported into the NavBar"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if NavBar establishes proper routing to links")))),(0,n.kt)("h4",{id:"searchjs"},"Search.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSearchBarRender()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Search bar is renders correctly"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if search bar is displayed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSearchFunctionality()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: Search can dynamically sort through stocks via user-entered string"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if string matches stock names"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSearchSubmit()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test: User can select a stock to view its data"),(0,n.kt)("li",{parentName:"ul"},"Result: Pass if proper stock data is displayed")))),(0,n.kt)("h3",{id:"backend"},"Backend"),(0,n.kt)("p",null,"We are using django for the backend and it comes with a testing suite native to python: unittest.  django makes it accessible via importing django.test.TestCase and it is class based.  Each series of tests will be represented by a class that inherits from TestCase and uses a setUp() function to generate objects to test against as well as self.assertEquals() to test that a certain output from a function is seen.",(0,n.kt)("br",{parentName:"p"}),"\n",'Testing locally, the user needs to have the virtual environment poetry installed.  All dependencies should be included in the .toml file, but adding more cane be done with "poetry add ',"[dependency]",'".  Install the dependencies to the virtual environment with "poetry install", then run with "poetry run python3 manage.py test".',(0,n.kt)("br",{parentName:"p"}),"\n","The following are unit tests we will use. Each will use setUp() to create model objects to input into a testing database that will be destroyed after testing, when necessary.  Some tests are are calls to an external API and do not need access to a database.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testGetIndexPage()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: see if the connection to the server is valid. views.index() will be tested."),(0,n.kt)("li",{parentName:"ul"},"pass: HttpResponse with message \u201cWelcome to the Tradester index.\u201d\t"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRegisterNewUserAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: provide string \u201ctest\u201d for a user and \u201ctest\u201d for password to create a new user.  These two should be reserved for unit testing purposes.  views.register() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: the new user is created and stored in the user table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRegisterDuplicateAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: provide string \u201ctest\u201d for a user and \u201ctest\u201d for the password to try to register a duplicate user. views.register() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: the registration fails"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSignInToExistingAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: provide string \u201ctest\u201d for a user and \u201ctest\u201d for the password to sign in to the created user. views.sign_in() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: the user is signed in and can access their assets"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSignInToUnregisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: provide string \u201cfake\u201d for a user and \u201cfake\u201d for the password to try to sign in to a non-existant user. views.sign_in() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: the sign in fails "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSaveInvestmentToRegisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: see if a user can save an investment to the database. views.save_investment() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: can retrieve that same investment value from the database"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testSaveInvestmentToUnregisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: attempt to save data to unregistered account. views.save_investment() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: message \u201ccannot save investment to unregistered account\u201d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testGetInvestmentFromRegisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: attempt to pull investment from user, providing real session id.  views.get_investment() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: able to retrieve the user\u2019s investment value from the investment table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testGetInvestmentFromUnregisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: attempt to pull investment from fake session id string. views.get_investment() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: message saying \u201cunable to pull investment from unregistered account\u201d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testGetStockData()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: see if a call to Alpha Vantage\u2019s API returns valid data for a ticker and if that data populates the database entry for that ticker. views.get_stock_data() will be tested. "),(0,n.kt)("li",{parentName:"ul"},"pass: the data is retrieved, saved to the ticker\u2019s database, and returned to the caller"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRemoveExistingAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: user \u201ctest\u201d is now registered and signed in, so calling deleteAccount() should remove the \u201ctest\u201d account"),(0,n.kt)("li",{parentName:"ul"},"pass: the account \u201ctest\u201d is unregistered"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"testRemoveUnregisteredAccount()")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"test: calling deleteAccount() on an unregistered account "),(0,n.kt)("li",{parentName:"ul"},"pass: a message saying \u201ccannot delete unregistered accounts\u201d")))))}m.isMDXComponent=!0}}]);