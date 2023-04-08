import status
from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from tradester.models import *
from functions.functions import get_user_from_token

# Find a user by their user name
class FindUserByUsername(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        username = request.GET['username']
        try:
            user = User.objects.get(username=username)
            return Response({'username': user.username, 'user_id': user.id})
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class SendFriendRequest(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        pass
