from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.urls import reverse
from django.contrib.auth.models import User

# Create your tests here.

"""
User object fields for reference: myorder, myportfolio, logentry, outstandingtoken, id, password
,last_login ,is_superuser ,username ,first_name ,last_name ,email,is_staff,is_active
,date_joined,groups,user_permissions
"""

class AuthenticationTestCase(TestCase):
    refresh_token = ""
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
        
    def test_canLogin(self):
        existing_users = list(User.objects.all())
        print(existing_users)
        logged_in = self.client.login(username='testuser', password='testpass')
        self.assertTrue(logged_in)

    def test_canGetToken(self):
        url = reverse('token_obtain_pair')
        data = {'username': 'testuser', 'password': 'testpass'}
        response = self.client.post(url, data, format='json')
        print(response)

        self.access_token = response.data['access']
        self.refresh_token = response.data['refresh']
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
    