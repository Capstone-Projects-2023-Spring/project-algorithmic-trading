from django.db import models
from django.conf import settings


# Create your models here.
class Portfolio(models.Model):
    """
    The Portfolio table instance represents a users stock portfolio. It links
    a specific instance of a portfolio to a user
    """
    portfolio_id = models.AutoField(primary_key=True, default=1000)
    username = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='myportfolio'
    )

class Stock(models.Model):
    """
    The Stock table holds instances of a specific stock
    and data used to evaluate those stocks
    """
    stock_symbol = models.CharField(primary_key=True, max_length=10)
    company_name = models.CharField(max_length=255, blank=True)
    sector = models.CharField(max_length=255, blank=True)
    current_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    market_cap = models.DecimalField(max_digits=20, decimal_places=2, blank=True, null=True)
    dividend_yield = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    earnings_per_share = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    price_to_earnings_ratio = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    beta = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    high_52 = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    low_52 = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    avg_daily_volume = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.stock_symbol

class Order(models.Model):
    """
      The Order table holds information about a user's order to buy or sell a stock.
    """

    order_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='myorder'
    )
    stock_symbol = models.ForeignKey(Stock, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    order_time = models.DateTimeField(auto_now_add=True)

class Portfolio_stock(models.Model):
    """
    The Portfolio_Stock table holds information about the quantity and purchase
    price of a stock in a user's portfolio.
    """
    portfolio_id = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    stock_symbol = models.ForeignKey(Stock, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)