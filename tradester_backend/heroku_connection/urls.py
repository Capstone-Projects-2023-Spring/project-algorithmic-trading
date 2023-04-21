from django.urls import path

from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('display_stock_by_ticker/',views.display_stock_by_ticker, name="display_stock_by_ticker")
]

