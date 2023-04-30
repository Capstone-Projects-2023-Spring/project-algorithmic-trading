---
title: Backend Class Description
sidebar_position: 1
description: The backend functions and classes are listed here.
--- 

The backend uses the django framework.  As such, each app is stored as a file inside the ```tradeseter_backend``` folder.  All classes are found inside the views.py files of each app.  There also exist functions independent of classes, some in a views.py file of the corresponding app, and a few in the ```tradester_backend/functions``` folder.  This document lists those folders in alphabetical order.  

```tradester_backend/tradester_backend``` is the actual 'root' of the backend.  In it is a settings.py file which holds information required for some of the classes to function.  It also holds a urls.py file, in which specifies url extensions to each of these apps.  Django filters each API-as-url request to our backend (from our frontend) through this urls.py file to each app.  You can view specifications for these API calls in the Backend API Specification document.  

Almost every class inherits a class from ```rest_framework``` library.  This automates some processes for us, but most importantly it allows for token passing for authentification and turns each class into a function corresponding to an API call.  If a class begins with ```permission_classes = (IsAuthenticated,)```, this means that the functionality of the class cannot be accessed without the user providing the HTTP header ```Authentication: Bearer <token>```, where ```<token>``` is a valid token returned to the user at login.  

# **App: auth**  

The **auth** app controls authentication for users of tradester.  

### auth/views.py  
Classes and methods in this file perform basic authentication functionality.

**class RegisterUser(generics.CreateAPIView)**  
- Purpose:
  - this class inherits generics.CreateAPIView from rest_framework.  
- Fields:
  - None
- functions: 
  - None

**class LogoutView(APIView)**  
- Purpose:
  - Register the user making the API call. Inherits from APIView class in rest_framework.
- Fields:
  - None
- functions:
  - **LogoutView.post**
    - Purpose: 
      - Log the user out
    - Precondition: 
      - User is logged in
    - Postcondition:
      - User is logged out
    - Parameters: 
      - request object
    - Output:  
      - Response object with status code 200
    - Error:
      - Bad Request.  Requested user is not logged in  


### auth/validators.py  
Classes and methods in this file perform validation of user input in authentication API calls. 

**class MinimumDigitsValidator**  
- Purpose:  
  - Governs validation of minimum values for authentication.
- fields: 
  - Integer: min_digits [default: 1]
- functions:
  - **MinimumDigitsValidator.__init__( min_digits=1)**
    - Purpose:
      - Initialize the class and set min_digits value
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - Integer: min_digits [default: 1]
    - Output:  
      - None
    - Error:
      - None  

  - **MinimumDigitsValidator.validate( password, user=None)**
    - Purpose:
      - Validates that the user has provided the minimum digits to an input box for authentication. 
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - String: password
      - User Object: None
    - Output:  
      - None
    - Error:
      - ValidationError: user did not provide minimum digits  

  - **MinimumDigitsValidator.get_help_text()**
    - Purpose:
      - Validates that the user has provided the minimum digits to an input box for authentication. 
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - None
    - Output:  
      - String: message indicating required digit count
    - Error:
      - None

# **App: friendship**  

### friendship/views.py  

Classes and methods in this file perform social functionality.

**class FindUserByUsername(APIView)**  
- Purpose:
  - find the user for social functionality
  - inherits APIView from rest_framework  
- fields: 
  - None
- functions:
  - **FindUserByUsername.get(request)**
    - Purpose:
      - fulfill the get request to find a user
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - Response object containing "username" and "user_id" of the found user
    - Error:
      - status 404, user not found

**class SendFriendRequest(APIView)**  
- Purpose:
  - send a friend reuquest to a specified user
  - inherits APIView from rest_framework  
- fields:
  - None
 - functions: 
  - **SendFriendRequest.post(request)**
    - Purpose:
      - fulfill the post request to send a friend request to the specified user
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - creates a FriendRequest object in the database, pointing to the specified user
      - response object, 200 if successful            
    - Error:
      - status 500 if user sends request to self, requested user cannot be found, or the request was already sent to that user

**class GetFriendRequests(APIView)**  
- Purpose:
  - pull and display all friend requests
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **GetFriendRequest.get(request)**
    - Purpose:
      - allow requesting user to see all friend requests that are pending to them
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - response object, 200 if successful, and containing a list of users as json objects containing "user_id" and "username"
    - Error:
      - None
 

**class RespondFriendRequest(APIView)**  
- Purpose:
  - Respond to a friend request
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **RespondeFriendRequest.post(request)**
    - Purpose:
      - Respond to a friend request
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - response object, 200 if successful
      - deletes FriendRequest object if accepted
      - creates a Friendship object if accepted
    - Error:
      - status 500 if user declines request, does not include accept or decline in ther request object, or the sender or receiver is not a valid user

**class GetFriends(APIView)**  
- Purpose:
  - Get the friends sharing a Friendship object with the user
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **GetFriends.get(request)**
    - Purpose:
      - Get the friends sharing a Friendship object with the user
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - a list of users as json objects with "user_id" and "username"
    - Error:
      - None

**class Unfriend(APIView)**  
- Purpose:
  - Remove friendship between two users
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **Unfriend.post(request)**
    - Purpose:
      - Delete the Friendship object connecting the two users from the database
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - status code 200
      - deletes the Friendship object from the database
    - Error:
      - None 

**class CheckFriendship(APIView)** 
- Purpose:
  - find amount of current friends
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **CheckFriendship.get(request)**
    - Purpose:
      - count the amount of Friendship objects associated with the user
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - json object containing "is_friend"
    - Error:
      - None

**class CheckOutgoingRequest(APIView)**  
- Purpose:
  - check if a friendship request has been sent
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **CheckOutgoingRequest.get(request)**
    - Purpose:
      - Check if the user has an outgoing friend request to another user.
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - json object with "outgoing_request" boolean
    - Error:
      - None

**class CheckIncomingRequest(APIView)**  
- Purpose:
  - check if a friendship request is coming to the user
  - inherits APIView from rest_framework  
- fields:
  - None
- functions:
  - **CheckIncomingRequest.get(request)**
    - Purpose:
      - Check if the user has an incoming friend request from another user.
    - Precondition: 
      - user is logged in
    - Parameters: 
      - request object: request
    - Output:  
      - json object with "incoming_request" boolean
    - Error:
      - None

**class RevokeRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework
  - Allow a user to revoke a friend request.
- fields: 
  - None

- functions:
  - **RevokeRequest.delete**  
    - Purpose:
      - delete the friend request from the database
    - Precondition: 
      - user is logged in
    - Postcondition: 
      - friend request is deleted
    - Parameters: 
      - Request Object: request
    - Output:  
      - Response Object with status code 200
    - Error:
      - None  


# **Module: functions**  

### functions.functions.py 

- purpose:
  - this file is for storing functions used across applications.  
- functions:
  - **get_user_from_token(request)**  
    - Purpose:
      - pull the user from the database using a token in the request object
    - Precondition: 
      - user is logged in
    - Postcondition: 
      - None
    - Parameters: 
      - Request Object: request
    - Output:  
      - User object.  Object is None if the user was not found
    - Error:
      - UserDoesNotExist: pass  


# **App: heroku_connection**  
- purpose: 
  - heroku_connection handles a secondary database connection.  This database stores prediction data and historical stock data.

### heroku_connection/functions.py
- purpose:
  - provides functions that pulls information from the heroku database using a given ticker string
- functions:
  - **get_close_past_week(ticker)**
    - Purpose:
      - get the 6 last closing values for a stock by its ticker
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - String: ticker
    - Output:  
      - list of 6 objects with fields "price" and "data", representing the closing values of a particular stock for the last 6 days
    - Error:
      - None

  - **get_latest_close_prediction(ticker)**
    - Purpose:
      - get the predicted close for a particular stock
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - String: ticker
    - Output:  
      - object with fields "price" and "data", representing the predicted close of a particular stock
    - Error:
      - None

### heroku_connection/views.py
- purpose:
  - respond to API requests involving the heroku database
- functions:
  - **display_stock_by_ticker(request)**
    - Purpose:
      - return a json object as a list of objects with fields "data", "open", "close", "low", "high", and "volume"
    - Precondition: 
      - None
    - Postcondition: 
      - None
    - Parameters: 
      - Request Object: request, containing "ticker" field
    - Output:  
      - JsonResponse of list of objects
    - Error:
      - None

# **App: tradester**  


