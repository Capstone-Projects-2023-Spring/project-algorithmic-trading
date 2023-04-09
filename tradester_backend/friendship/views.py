import status
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from tradester.models import *
from friendship.models import FriendRequest
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

# Send a friend request to the user with the provided user id.
class SendFriendRequest(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        data = {}
        sender_user_id = get_user_from_token(request).id
        receiver_user_id = request.data['receiver_user_id']
        if sender_user_id == receiver_user_id:
            data['error'] = 'Cannot send friend request to yourself.'
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)
        
        sender = User.objects.filter(id = sender_user_id).first()
        receiver = User.objects.filter(id = receiver_user_id).first()
        if not sender or not receiver:
            data['error'] = 'The sender or receiver is not an existing user.'
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)
        
        # Check if a friend request already exists between the sender and receiver
        outgoing_request = FriendRequest.objects.filter(
            sender=sender,
            receiver=receiver
        ).first()
        incoming_request = FriendRequest.objects.filter(
            sender=receiver,
            receiver=sender
        ).first()

        if outgoing_request or incoming_request:
            data['error'] = 'A pending friend request already exists for this user.'
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)
        FriendRequest.objects.create(sender=sender, receiver=receiver)
        return Response(status=status.HTTP_200_OK)

# Retrieve a list of incoming friend requests for authenticated user.
class GetFriendRequests(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        senders = []
        user = get_user_from_token(request)
        friend_requests = FriendRequest.objects.filter(receiver=user)
        for friend_request in friend_requests:
            sender = {
                'user_id': friend_request.sender.id,
                'username': friend_request.sender.username
            }
            senders.append(sender)
        return Response(senders)
