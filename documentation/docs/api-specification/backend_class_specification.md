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

**class LogoutView(APIView)**  
- Purpose:
  - Register the user making the API call. Inherits from APIView class in rest_framework.
- Fields:
  - None

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
  - inherits APIView from rest_framework  

**class SendFriendRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class GetFriendRequests(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class RespondFriendRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class GetFriends(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class Unfriend(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class CheckFriendship(APIView)** 
- Purpose:
  - inherits APIView from rest_framework  

**class CheckOutgoingRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework  

**class CheckIncomingRequest(APIView)**  
- Purpose:
  - 
  - inherits APIView from rest_framework 
-fields: 
  - None
  - **CheckIncomingRequest.get**  
    - Purpose:
      - delete the friend request from the database
    - Precondition: 
      - user is logge in
    - Postcondition: 
      - friend request is deleted
    - Parameters: 
      - Request Object: request
    - Output:  
      - Response Object with status code 200
    - Error:
      - None

**class RevokeRequest(APIView)**  
- Purpose:
  - inherits APIView from rest_framework
  - Allow a user to revoke a friend request.
- fields: 
  - None
  - **RevokeRequest.delete**  
    - Purpose:
      - delete the friend request from the database
    - Precondition: 
      - user is logge in
    - Postcondition: 
      - friend request is deleted
    - Parameters: 
      - Request Object: request
    - Output:  
      - Response Object with status code 200
    - Error:
      - None  


# **App: functions**  
# **App: heroku_connection**  
# **App: tradester**  

