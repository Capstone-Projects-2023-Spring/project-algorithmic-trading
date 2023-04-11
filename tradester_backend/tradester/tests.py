from django.test import TestCase, Client

# Create your tests here.
from django.urls import reverse
from rest_framework import status
import json
from django.contrib.auth.models import User

class TestUpdateOrderView(TestCase):

    def test_setUp(self):
        self.client = Client()
    
    def test_canLogin(self):
        user = User.objects.create_user(username='myuser', password='mypassword')
        logged_in = self.client.login(username='myuser', password='mypassword')
        self.assertTrue(logged_in)

    def test_get_order_status(self):
        my_user = User.objects.create_user(username='myuser', password='mypassword')
        self.client.force_login(user=my_user)
        # make a GET request to the view
        response = self.client.get(reverse('update_order_get'))
        print(response)
        # assert that the response status code is 200
        self.assertEqual(response.status_code, status.HTTP_200_OK)

