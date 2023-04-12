import status
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from tradester.models import *
from friendship.models import FriendRequest, Friendship
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

class RespondFriendRequest(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        data = {}
        sender_user_id = request.data['sender_user_id']
        response = request.data['response']

        receiver = get_user_from_token(request)
        sender = User.objects.filter(id=sender_user_id).first()

        if response != 'accept' and response != 'decline':
            data['error'] = 'Invalid value for response: must be \'accept\' or \'decline\''
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)

        if not sender or not receiver:
            data['error'] = 'The friend request sender or receiver is not a valid user.'
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)
        
        friend_request = FriendRequest.objects.filter(sender=sender, receiver=receiver).first()

        if not friend_request:
            data['error'] = 'There is no such friend request.'
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data=data)
        
        if response == 'accept':
            Friendship.objects.create(user=sender, other_user=receiver)
        
        friend_request.delete()

        return Response(status=status.HTTP_200_OK)
    
class GetFriends(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = get_user_from_token(request)
        all_friends = []

        friendships = Friendship.objects.filter(user=user)
        other_friendships = Friendship.objects.filter(other_user=user)

        for friendship in friendships:
            friend = {
                'user_id': friendship.other_user.id,
                'username': friendship.other_user.username,
            }
            all_friends.append(friend)

        for friendship in other_friendships:
            friend = {
                'user_id': friendship.user.id,
                'username': friendship.user.username,
            }
            all_friends.append(friend)

        return Response(all_friends)
    
class Unfriend(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        user = get_user_from_token(request)
        id = request.data['user_id']
        user_to_unfriend = User.objects.filter(id=id).first()
        Friendship.objects.filter(
            (Q(user=user) & Q(other_user=user_to_unfriend)) | 
            (Q(user=user_to_unfriend) & Q(other_user=user))
        ).delete()
        return Response(status=status.HTTP_200_OK)
