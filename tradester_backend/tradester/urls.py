from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register/<str:_username>/<str:_password>/', views.register, name='register'),
    path('sign_in/<str:_username>/<str:_password>/', views.sign_in, name='sign_in'),
    path('get_stock_data/<str:_stock_symbol>/', views.get_stock_data, name='get_stock_data'),
    path('get_stock_data_candle/<str:_stock_symbol>/', views.get_stock_data_candle, name='get_stock_data_candle'),
    path('save_investment/', views.SaveInvestment.as_view(), name='save_investment'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('register/', views.RegisterUser.as_view(), name ='register'),

]
