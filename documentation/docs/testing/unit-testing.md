---
sidebar_position: 1
---
## Unit tests 

### Frontend 

We are using Jest to test the front end website. Jest is a testing framework that is functional with React and Typescript. Each page will undergo testing to make sure it can render and route to other pages, as well as any additional testing that is needed for the page to function properly. 

#### Index.js  

- **testSiteRender()**  

    - Test: Site renders correctly  
    - Result: Pass if site renders  

#### App.js  

- **testRoutes()**  

    - Test: Valid routes to separate pages are established   
    - Result: Pass if able to navigate to separate pages  

- **testImportNavBar()**  

    - Test: NavBar is integrated successfully 
    - Result: Pass if NavBar is displayed 

- **testImportHomePage()**  
    - Test: Home page is integrated successfully
    - Result: Pass if Home page is displayed

#### About.js 

- **testAboutRender()**   

    - Test: About page renders correctly 
    - Result: Pass if About page renders 

- **testAboutRouting()**  

    - Test: About page uses routing correctly
    - Result: Pass if able to route

#### Home.js

- **testHomeRender()**

    - Test: Home page renders correctly
    - Result: Pass if Home page renders  

- **testHomeRouting()**

    - Test: Home page uses routing correctly
    - Result: Pass if able to route
#### Blog.js

- **testBlogRender()**

    - Test: Blog page renders correctly
    - Result: Pass if Blog page renders  

- **testAboutRouting()** 

    - Test: Blog page uses routing correctly
    - Result: Pass if able to route  

#### Dashboard.tsx  

- **testDashboardRender()**

    - Test: Dashboard renders correctly
    - Result: Pass if Dashboard renders

- **testDashboardRouting()**

    - Test: Dashboard uses routing correctly
    - Result: Pass if able to route

- **testGraphRender()**

    - Test: Graphs can be rendered on the dashboard
    - Result: Pass if graph is displayed 

- **testStockDataRetrieval()**

    - Test: Data can be retrieved from back end via API call
    - Result: Data is successfully pulled

#### Login.tsx

- **testLoginToken()**
    
    - Test: Ticket is created upon successful login
    - Result: Token is generated

- **testLoginRender()**

    - Test: Login page renders correctly
    - Result: Pass if Login page renders 

- **testLoginRouting()**

    - Test: Login page can use routing correctly
    - Result: Pass if able to route

- **testUsernameRender()**

    - Test: Username textbox renders
    - Result: Pass if username textbox is displayed

- **testPasswordRender()**

    - Test: Password textbox renders
    - Result: Pass if password textbox is displayed

- **testLoginButtonRender()**

    - Test: Login button renders
    - Result: Pass if login button is displayed

- **testLoginButtonFunction()**

    - Test: Login button can be used to login in user
    - Result: Pass if button submits a login request

- **testBadLogin()**

    - Test: User enters an incorrect username and/or password
    - Result: Pass if login is denied and error is shown

- **testUsernameRender()**

    - Test: Username textbox renders
    - Result: Pass if username textbox is displayed

#### RegisterForm.js

- **testUsernameRender()**

    - Test: Username textbox renders
    - Result: Pass if username textbox is displayed

- **testEmailRender()**

    - Test: Email textbox renders
    - Result: Pass if email textbox is displayed

- **testPasswordRender()**

    - Test: Password textbox renders
    - Result: Pass if password textbox is displayed

- **testBadUsername()**

    - Test: Invalid username fails to register an account
    - Result: Pass if registration is rejected

- **testBadEmail()**

    - Test: Invalid email fails to register an account
    - Result: Pass if registration is rejected

- **testBadPassword()**

    - Test: Invalid password fails to register an account
    - Result: Pass if registration is rejected

- **testRegisterButton()**

    - Test: Register button can successfully register a new account
    - Result: New account is created

#### Post.tsx

- **testPostRender()**

    - Test: Post page renders correctly
    - Result: Pass if Post page renders

- **testPostRouting()**

    - Test: Post page uses routing correctly
    - Result: Pass if able to route

#### Simulation.tsx

- **testSimulationRender()**

    - Test: Simulation page renders correctly
    - Result: Pass if Simulation page renders

- **testSimulationRouting()**

    - Test: Simulation page uses routing correctly
    - Result: Pass if able to route

- **testInvestmentRender()**

    - Test: Investment text box renders correctly
    - Result: Pass if textbox is displayed

- **testInvestmentSubmitButton()**

    - Test: Submit button can submit an investment to the database
    - Result: Investment amount is added to the database

- **testSimulationReport()**

    - Test: Simulation report displays correctly
    - Result: Simulation report is presented to user

#### NavBar.js

- **testNavBarRender()**

    - Test: NavBar renders correctly
    - Result: Pass if NavBar is displayed

- **testNavBarImports()**

    - Test: Links to separate pages are imported into the NavBar
    - Result: Pass if NavBar establishes proper routing to links

#### Search.js

- **testSearchBarRender()**

    - Test: Search bar is renders correctly
    - Result: Pass if search bar is displayed

- **testSearchFunctionality()**

    - Test: Search can dynamically sort through stocks via user-entered string
    - Result: Pass if string matches stock names

- **testSearchSubmit()**

    - Test: User can select a stock to view its data
    - Result: Pass if proper stock data is displayed


    

### Backend 

We are using django for the backend and it comes with a testing suite native to python: unittest.  django makes it accessible via importing django.test.TestCase and it is class based.  Each series of tests will be represented by a class that inherits from TestCase and uses a setUp() function to generate objects to test against as well as self.assertEquals() to test that a certain output from a function is seen.  
Testing locally, the user needs to have the virtual environment poetry installed.  All dependencies should be included in the .toml file, but adding more cane be done with "poetry add [dependency]".  Install the dependencies to the virtual environment with "poetry install", then run with "poetry run python3 manage.py test".  
The following are unit tests we will use. Each will use setUp() to create model objects to input into a testing database that will be destroyed after testing, when necessary.  Some tests are are calls to an external API and do not need access to a database.  

- **testGetIndexPage()**

	- test: see if the connection to the server is valid. views.index() will be tested.
	- pass: HttpResponse with message “Welcome to the Tradester index.”	

- **testRegisterNewUserAccount()**

	- test: provide string “test” for a user and “test” for password to create a new user.  These two should be reserved for unit testing purposes.  views.register() will be tested. 
	- pass: the new user is created and stored in the user table

- **testRegisterDuplicateAccount()**

    - test: provide string “test” for a user and “test” for the password to try to register a duplicate user. views.register() will be tested. 
	- pass: the registration fails

- **testSignInToExistingAccount()**

	- test: provide string “test” for a user and “test” for the password to sign in to the created user. views.sign_in() will be tested. 
	- pass: the user is signed in and can access their assets

- **testSignInToUnregisteredAccount()**

	- test: provide string “fake” for a user and “fake” for the password to try to sign in to a non-existant user. views.sign_in() will be tested. 
	- pass: the sign in fails 

- **testSaveInvestmentToRegisteredAccount()**
	
	- test: see if a user can save an investment to the database. views.save_investment() will be tested. 
	- pass: can retrieve that same investment value from the database

- **testSaveInvestmentToUnregisteredAccount()**
	
	- test: attempt to save data to unregistered account. views.save_investment() will be tested. 
	- pass: message “cannot save investment to unregistered account”

- **testGetInvestmentFromRegisteredAccount()**
	
	- test: attempt to pull investment from user, providing real session id.  views.get_investment() will be tested. 
	- pass: able to retrieve the user’s investment value from the investment table

- **testGetInvestmentFromUnregisteredAccount()**
	
	- test: attempt to pull investment from fake session id string. views.get_investment() will be tested. 
	- pass: message saying “unable to pull investment from unregistered account”

- **testGetStockData()**
		
	- test: see if a call to Alpha Vantage’s API returns valid data for a ticker and if that data populates the database entry for that ticker. views.get_stock_data() will be tested. 
	- pass: the data is retrieved, saved to the ticker’s database, and returned to the caller

- **testRemoveExistingAccount()**

	- test: user “test” is now registered and signed in, so calling deleteAccount() should remove the “test” account
	- pass: the account “test” is unregistered

- **testRemoveUnregisteredAccount()**

	- test: calling deleteAccount() on an unregistered account 
	- pass: a message saying “cannot delete unregistered accounts”  
