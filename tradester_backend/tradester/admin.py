from django.contrib import admin
from .models import Portfolio, Stock, Portfolio_stock, Order, Investment,ModelPrediction, Backlog, GpuServerLogs
# Register your models here.
admin.site.register(Portfolio)
admin.site.register(Stock)
admin.site.register(Portfolio_stock)
admin.site.register(Order)
admin.site.register(Investment)
admin.site.register(ModelPrediction)
admin.site.register(Backlog)
admin.site.register(GpuServerLogs)