from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get_stock_data/<str:_stock_symbol>/', views.get_stock_data, name='get_stock_data'),
    path('get_stock_data_candle/<str:_stock_symbol>/', views.get_stock_data_candle, name='get_stock_data_candle'),
    path('save_investment/', views.SaveInvestment.as_view(), name='save_investment'),
    path('update_portfolio/', views.UpdatePortfolio.as_view(), name ='update_portfolio'),
    path('display_portfolio/', views.DisplayPortfolio.as_view(), name ='display_portfolio'),
    path('update_stocks_daily/', views.update_stocks_daily, name='update_stocks_daily'),
]
