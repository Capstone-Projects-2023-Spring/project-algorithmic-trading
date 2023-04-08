from django.urls import path

from . import views

urlpatterns = [
    path('find_user_by_username/', views.FindUserByUsername.as_view(), name='find_user_by_username'),
]
