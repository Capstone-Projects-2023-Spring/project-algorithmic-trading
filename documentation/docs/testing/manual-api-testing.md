---
sidebar_position: 3
---
# Manual API tests

The backend was tested using Postman.

**Here is a test for the logout API function:**
![logout test](/img/postman-test/logout.png)
The logout function takes a token in its input, and returns a HTTP 205 message if successful. We can see here that the logout was successful.
<br/>

**Here is a test for registering a new user:**
![register user test](/img/postman-test/register.png)
This function expects a username, password, and a password re-entry. It returns a HTTP 201 and the new user’s username on success, as we can see in the screenshot above.
<br/>

**Test for user search by username:**
![search user test](/img/postman-test/findUser.png)
This API function expects the calling user to be authenticated. It takes a username and returns an object with the username and a user_id if the username belongs to a valid user. It returns a 404 Not Found if the username is invalid.
<br/>

**Test for sending a friend request:**
![send friend request test](/img/postman-test/send-request.png)
This API function expects the user id of the user to send the friend request to. It returns a 200 OK if the id is valid, indicating the request was sent.
<br/>

**Test revoking a friend request:**
![revoke friend request test](/img/postman-test/revoke.png)
This API function expects the user id of a user to whom a friend request was previously sent. It always returns HTTP 200, even if the id is invalid. However, if the id is valid, it deletes the friend request before returning.
<br/>

**Test for getting a list of friend requests:**
![get list of friend requests test](/img/postman-test/get-requests.png)
This API function returns a list of users who have sent a friend request to the authenticated user. As we can see in the body, a user with username ‘slycooper’ and user id of 60 has sent a friend request to the user. If the user has no incoming friend requests, the list would be empty.
<br/>

**Test responding to a friend request:**
![respond to friend request test](/img/postman-test/respond-request.png)
This API function expects the user id of a user who has sent the authenticated user a friend request. It also expects a response which is either “accept” or “decline”. It returns 200 OK if there was a valid friend request from the user in question. Otherwise it returns a 500 Internal Server Error. 
<br/>

**Test get friends list:**
![get friends list test](/img/postman-test/get-friends.png)
This API function retrieves the authenticated user’s list of friends. It returns an empty list if no friends are present.
<br/>

**Test unfriend:**
![unfriend test](/img/postman-test/unfriend.png)
This API function takes the user id of a current friend. It removes that friend from the friend’s list and returns 200 OK.
<br/>

**Test check friendship:**
![check friendship test](/img/postman-test/check-friend.png)
This API function takes a user id and returns true if the user with that user id is friends with the authenticated user, otherwise it returns false. Here we can see that the authenticated user is not friends with the user with user id 1.
<br/>

**Test checking for an outgoing friend request:**
![check outgoing friend request test](/img/postman-test/check-outgoing-request.png)
This API function takes a user id and returns true if the authenticated user has a friend request out for the user with the supplied user id. Otherwise it returns false. Here we can see that there is no outgoing request from the authenticated user to the user with user id 1.
<br/>

**Test checking for an incoming friend request:**
![check incoming friend request test](/img/postman-test/check-incoming-request.png)
This API function returns true if the authenticated user has an incoming friend request from the user with the supplied user id. Otherwise, it returns false.
