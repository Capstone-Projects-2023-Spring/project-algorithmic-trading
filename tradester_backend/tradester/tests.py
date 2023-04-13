from django.test import TestCase
from tradester.models import *
from tradester.views import *
import status
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

from rest_framework_simplejwt import views as jwt_views
from django.test.client import encode_multipart, RequestFactory
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate


from rest_framework.test import APIClient

# Create your tests here.

class Portfolio_(TestCase):
    def setUp(self):
        User.objects.create_user(username="test_person", password="test_password")
        Stock.objects.create(stock_symbol="MMM", current_price=110.30, company_name="3M")

    def test_user_can_add_stock(self):
        client = APIClient()
        response = client.post('/auth/token/',{'username':"test_person", 'password':"test_password"})
        print(response.status_code)
        print(response.json()['access'])

        
        

