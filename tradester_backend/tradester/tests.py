# Create your tests here.
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
import json
from django.contrib.auth.models import User
from tradester.models import *
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from decimal import Decimal

class TestUpdateOrderView(TestCase):
    access_token = ""
    def setUp(self):
        self.client = APIClient()
        existing_users = list(User.objects.values_list('username', flat=True))
        print(existing_users)
        if 'testuser' in existing_users:
            # Delete existing user with the same username if it exists
            User.objects.filter(username='testuser').delete()

        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        ) 

        self.client.login(username='testuser', password='testpass')
        url = reverse('token_obtain_pair')
        data = {'username': 'testuser', 'password': 'testpass'}
        response = self.client.post(url, data, format='json')
        self.access_token = response.data['access']

        #add a stock to the stock table
        stock, created= Stock.objects.get_or_create(stock_symbol='TEST', current_price=20)
        stock.save()
    

    def test_get_order_status(self):
        url = reverse('update_order_get')
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.get(url, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_order_status(self):
        #Endpoint takes stock_symbol, order_type, quantity, price
        url = reverse('update_order_post', args=['TEST', 'BUY', 2, 20])
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.post(url, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_and_post_functionality(self):
        #Endpoint takes stock_symbol, order_type, quantity, price
        url = reverse('update_order_post', args=['TEST', 'BUY', 2, 20])
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.post(url, headers=headers)
        
        url = reverse('update_order_get')
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.get(url, headers=headers)
        orders = response.json()['orders']
        print(orders)
        self.assertEqual(orders[0]['stock_symbol_id'], 'TEST')
        self.assertEqual(orders[0]['order_type'], 'BUY') 
        self.assertEqual(orders[0]['quantity'], 2)
        self.assertEqual(Decimal(orders[0]['price']), 20.00)

