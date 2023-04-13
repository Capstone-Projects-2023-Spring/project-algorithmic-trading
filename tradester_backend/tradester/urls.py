from django.urls import path

from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('get_stock_data/<str:_stock_symbol>/', views.get_stock_data, name='get_stock_data'),
    path('get_stock_data_candle/<str:_stock_symbol>/', views.get_stock_data_candle, name='get_stock_data_candle'),
    path('save_investment/', views.SaveInvestment.as_view(), name='save_investment'),
    path('purchase_stock/', views.PurchaseStock.as_view(), name ='purchase_stock'),
    path('sell_stock/', views.SellStock.as_view(), name='sell_stock'),
    path('display_portfolio/', views.DisplayPortfolio.as_view(), name ='display_portfolio'),
    path('update_stocks_daily/', views.update_stocks_daily, name='update_stocks_daily'),
    path('update_order/', views.UpdateOrder.as_view(), name ='update_order_get'),
    path('update_order/<str:_stock_symbol>/<str:_order_type>/<int:_quantity>/<str:_price>/', 
         views.UpdateOrder.as_view(), name ='update_order_post'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('delete_user_account/', views.DeleteAccount.as_view(), name='delete_user_account'),
]
