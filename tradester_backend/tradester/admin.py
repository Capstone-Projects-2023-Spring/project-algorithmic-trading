from django.contrib import admin
from .models import Portfolio, Stock, Portfolio_stock, Order
# Register your models here.
admin.site.register(Portfolio)
admin.site.register(Stock)
admin.site.register(Portfolio_stock)
admin.site.register(Order)