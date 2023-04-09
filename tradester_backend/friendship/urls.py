from django.urls import path

from . import views

urlpatterns = [
    path('find_user_by_username/', views.FindUserByUsername.as_view(), name='find_user_by_username'),
    path('send_friend_request/', views.SendFriendRequest.as_view(), name='send_friend_request'),
    path('get_friend_requests/', views.GetFriendRequests.as_view(), name='get_friend_requests'),
]
