from django.test import TestCase
import data_handling

# Create your tests here.
def fetch_multiple_stocks():
    data_handling.fetch_stock_data()
    