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

from django.conf import settings

class TestUpdateOrderView(TestCase):
    databases ={}
    databases['render'] = settings.DATABASES['render']
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
        stock, created= Stock.objects.get_or_create(stock_symbol='TEST2', current_price=200)
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

        url = reverse('update_order_post', args=['TEST2', 'SELL', 5, 200])
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.post(url, headers=headers)

        url = reverse('update_order_get')
        headers = {'Authorization': 'Bearer ' + self.access_token}
        response = self.client.get(url, headers=headers)
        orders = response.json()['orders']

        self.assertEqual(orders[0]['stock_symbol_id'], 'TEST')
        self.assertEqual(orders[0]['order_type'], 'BUY') 
        self.assertEqual(orders[0]['quantity'], 2)
        self.assertEqual(Decimal(orders[0]['price']), 20.00)
        self.assertEqual(orders[1]['stock_symbol_id'], 'TEST2')
        self.assertEqual(orders[1]['order_type'], 'SELL') 
        self.assertEqual(orders[1]['quantity'], 5)
        self.assertEqual(Decimal(orders[1]['price']), 200.00)

class TestPortfolioFunctions(TestCase):

    databases ={}
    databases['render'] = settings.DATABASES['render']
    access_token = ""
    headers = None
    def setUp(self):
        self.client = APIClient()
        existing_users = list(User.objects.values_list('username', flat=True))
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
        self.headers = {'Authorization': 'Bearer ' + self.access_token}
        

        #add a stock to the stock table
        stock, created= Stock.objects.get_or_create(stock_symbol='TEST', current_price=20)
        stock.save()

    def test_purchase_stock(self):

        #try to purchase an amount of TEST
        stock = 'TEST'
        price = 101.10
        quantity = 2
        response = self.client.get(f'/tradester/purchase_stock/?stock={stock}&price={price}&quantity={quantity}', headers=self.headers)
        self.assertEquals(response.json()['total attempted'], price*quantity)

        #add a enough money to buy it
        wallet = 400
        response = self.client.get(f'/tradester/save_investment/?amount={wallet}', headers=self.headers)
        self.assertEquals(response.json()['amount'], wallet)

        #try again
        response = self.client.get(f'/tradester/purchase_stock/?stock={stock}&price={price}&quantity={quantity}', headers=self.headers)
        self.assertEquals(response.json()['purchase total'], price*quantity)

    def test_sell_stock(self):

        #add money to wallet
        wallet = 400
        response = self.client.get(f'/tradester/save_investment/?amount={wallet}', headers=self.headers)
        self.assertEquals(response.json()['amount'], wallet)

        #purchase a stock
        stock = 'TEST'
        price = 101.10
        quantity = 2
        response = self.client.get(f'/tradester/purchase_stock/?stock={stock}&price={price}&quantity={quantity}', headers=self.headers)
        self.assertEquals(response.json()['purchase total'], price*quantity)

        #sell that stock
        response = self.client.get(f'/tradester/sell_stock/?stock={stock}&price={price}&quantity={quantity}', headers=self.headers)
        self.assertEquals(response.status_code, status.HTTP_200_OK)