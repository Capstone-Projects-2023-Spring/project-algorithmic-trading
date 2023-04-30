---
title: Backend API Specification
sidebar_position: 1
description: The backend API calls
---

The backend uses the django framework.  As such, each app has its own associated API endpoints.  API requests are made from our frontend [```https://jalzeidi.github.io/tradester-frontend/```](https://jalzeidi.github.io/tradester-frontend/) to our backend, which is currently ```https://tradester-backend.onrender.com/```. I will refer to this in the URL requests as ```BASE```.  Each API request uses the same BASE, and is filtered to different apps via the django framework.  The filtering is done via the ```urls.py``` files in each app. All apps are in the ```tradester_backend``` folder, and each has its own ```urls.py``` that filters the url, either to another app or to a corresponding function, found in the ```views.py``` file of that app.  The first app is ```tradester_backend```.  


- 'BASE/admin/doc/'
    - go to the documentation, locked and visible to administrators
- 'BASE/tradester/'
    - go to the tradester functions
- 'BASE/friendship/'
    - go to the friendship functions
- 'BASE/auth/'
    - go to authentication functions
- 'BASE/admin/'
    - go to admin login
- 'BASE/heroku_connection/'
    - go to heroku backend functions