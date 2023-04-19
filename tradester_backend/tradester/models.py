from django.db import models
from django.conf import settings
from django.utils import timezone

class Stock(models.Model):
    """
    The Stock table holds instances of a specific stock
    and data used to evaluate those stocks
    """
    stock_symbol = models.CharField(primary_key=True, max_length=10)
    company_name = models.CharField(max_length=255, blank=True)
    sector = models.CharField(max_length=255, blank=True)
    current_price = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    market_cap = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    dividend_yield = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    earnings_per_share = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    price_to_earnings_ratio = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    beta = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    high_52 = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    low_52 = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    avg_daily_volume = models.IntegerField(blank=True, null=True)
    daily_high = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    daily_low = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    daily_num_transactions = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    daily_open_price = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    daily_volume = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    daily_vwap = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.stock_symbol
    class Meta:
        db_table_comment = 'Render Table'

class Order(models.Model):
    """
      The Order table holds information about a user's order to buy or sell a stock.
    """

    ORDER_TYPE_CHOICES = (
        ('BUY', 'Buy'),
        ('SELL', 'Sell'),
    )
    
    order_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='myorder'
    )
    stock_symbol = models.ForeignKey(Stock, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=10, choices=ORDER_TYPE_CHOICES, default='BUY')
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(default=timezone.now)
    class Meta:
        db_table_comment = 'Render Table'

class Portfolio(models.Model):
    """
    The Portfolio table instance represents a users stock portfolio. It links
    a specific instance of a portfolio to a user
    """
    portfolio_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='myportfolio'
    )
    balance = models.DecimalField(max_digits=20, decimal_places=2, default=0.0)
    class Meta:
        db_table_comment = 'Render Table'    

class Portfolio_stock(models.Model):
    """
    The Portfolio_Stock table holds information about the quantity and purchase
    price of a stock in a user's portfolio.
    """
    portfolio_id = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    stock_symbol = models.ForeignKey(Stock, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(default=timezone.now)      #this should get the timestamp of addition
    class Meta:
        db_table_comment = 'Render Table'

class Investment(models.Model):
    """
    A throwaway table used to demonstrate database integration.
    Used for the 'Hello World' demo.
    """
    investment_id = models.AutoField(primary_key=True, default=None)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    class Meta:
        db_table_comment = 'Render Table'

from django.db import models

class GpuServerLogs(models.Model):
    accesstime = models.CharField(primary_key=True, db_column='accessTime', default = '0')  # Field name made lowercase.
    response = models.CharField(blank=True, null=True)

    class Meta:
        db_table_comment = 'Heroku Table'
        db_table = 'GPU_Server_Logs'

class Backlog(models.Model):
    ticker = models.CharField(primary_key=True, default = "DEFAULT_STOCK")
    date = models.DateField(blank=True, null=True)
    open = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)

    class Meta:
        db_table_comment = 'Heroku Table'
        db_table = 'backlog'
        


class ModelPrediction(models.Model):
    stock = models.CharField(primary_key=True, default = "DEFAULT_STOCK")
    predicted_close = models.FloatField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    execution_time = models.FloatField(blank=True, null=True)

    class Meta:
        db_table_comment = 'Heroku Table'
        db_table = 'model_prediction'    
