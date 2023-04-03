from decimal import Decimal

import requests
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.utils import timezone

from tradester.models import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken

from django.conf import settings
import csv
from io import StringIO
import os

import sched
import time
import datetime

key = os.environ.get('DB_CONN_DAILY', default='')
from django.conf import settings

# Create your views here.
def index(request):
    """
    :template:`path/to/template.html`
    """
    return HttpResponse("Welcome to the Tradester index.")

def register(request, _username, _password):
    """
    View to register a new user account

    param request: the request object \n
    type request: HttpRequest \n
    param _username: inputted username \n
    type _username: str \n
    param _password: inputted password \n
    type _password: str \n
    return: HttpResponse object with 'Account creation successful' or 'Username is already taken' \n
    rtype: HttpResponse
    """

    # TODO: Implement the account creation logic

    return HttpResponse("register")

def sign_in(request, _username: str, _password: str) -> HttpResponse:
    """
    View to sign in a user

    param request: the request object \n
    param _username: inputted username \n
    param _password: inputted password \n
    return: HttpResponse object with 'Sign in successful' or 'Invalid login credentials' \n
    rtype: HttpResponse
    """
    # TODO: implement sign_in functionality
    return HttpResponse("sign_in")

def get_stock_data_candle(request, _stock_symbol):
    api_key = settings.SECRET_KEY
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol={_stock_symbol}&outputsize=compact&apikey={api_key}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data)
    else:
        error_msg = {'error': f'Unable to retrieve data for {_stock_symbol}'}
        return JsonResponse(error_msg)

def get_stock_data(request, _stock_symbol):
    """
    View to get data on a specified stock

    param request: the request object \n
    type request: HttpRequest \n
    param _symbol: symbol of the stock to retrieve data for \n
    type _symbol: str \n
    return: HttpResponse object with JSON data of stock information or error message \n
    rtype: HttpResponse
    """
    
    # get data from Alpha Vantage
    api_key = settings.SECRET_KEY
    url = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={_stock_symbol}&apikey={api_key}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # create stock instance with data from API
        stock = Stock(
            stock_symbol=_stock_symbol,
            company_name=data.get('Name', ''),
            sector=data.get('Sector', ''),
            current_price=Decimal(data.get('EPS', '0')) * Decimal(data.get('TrailingPE', '0')),
            market_cap=Decimal(data.get('MarketCapitalization', '0')),
            dividend_yield=Decimal(data.get('DividendYield', '0')),
            earnings_per_share=Decimal(data.get('EPS', '0')),
            price_to_earnings_ratio=Decimal(data.get('PERatio', '0')),
            beta=Decimal(data.get('Beta', '0')),
            high_52=Decimal(data.get('52WeekHigh', '0')),
            low_52=Decimal(data.get('52WeekLow', '0')),
            avg_daily_volume=Decimal(data.get('AverageDailyVolume', '0'))
        )
        stock.save()

        # create JSON response with stock data
        response_data = {
            'stock_symbol': stock.stock_symbol,
            'company_name': stock.company_name,
            'sector': stock.sector,
            'current_price': stock.current_price,
            'market_cap': stock.market_cap,
            'dividend_yield': stock.dividend_yield,
            'earnings_per_share': stock.earnings_per_share,
            'price_to_earnings_ratio': stock.price_to_earnings_ratio,
            'beta': stock.beta,
            'high_52': stock.high_52,
            'low_52': stock.low_52,
            'avg_daily_volume': stock.avg_daily_volume
        }
        return JsonResponse(response_data)

    else:
        error_msg = {'error': f'Unable to retrieve data for {_stock_symbol}'}
        return JsonResponse(error_msg)
    
def get_investment(request, token):
    """
    View to receive the investment data for a user

    param request: the request object \n
    param token: session token attached to signed-in user \n
    return: HttpResponse object with data to display in frontend or error message "not signed in" \n
    rtype: HttpResponse
    """
    # TODO: implement getting investment info
    return HttpResponse("get_investment")


def get_user_from_token(request):
    """
    View to receive the user from a given token in the request

    param request: the request object \n
    return: User object when successful or None
    """
    user = None
    try: 
        token_header = request.headers['authorization']
        token = token_header.split()[1]     #get the second argument (the first is "Bearer")
        token_obj = AccessToken(token)
        user_id = token_obj['user_id']
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        pass
    return user 

class DisplayPortfolio(APIView):
    '''
    expects a header of "authorizations: bearer <token>"
    '''
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response({'portfolio': "no user"})
            
        #get the user's portfolio
        portfolio = None
        balance = None
        try:
            portfolio = Portfolio.objects.get(username=user)
            balance = portfolio.balance
        except Portfolio.DoesNotExist:
            return Response(status=status.HTTP_403_FORBIDDEN)

        #for each portfolio_stock, add its contents to a list
        total = 0
        return_object = {}
        return_object['balance'] = balance
        stock_list = Portfolio_stock.objects.filter(portfolio_id=portfolio)
        for stk in stock_list:
            total = total + (stk.quantity * stk.purchase_price)
            return_object[stk.id] = {'stock':stk.stock_symbol.stock_symbol,'quantity':stk.quantity, 'price':stk.purchase_price, 'date':stk.date}
        return_object['total'] = total
        return Response(return_object)

class UpdatePortfolio(APIView):
    permission_classes = (IsAuthenticated,)
    '''
        currently only performs addition.  
        TODO: delete a stock because of a sell.  
            remember, there can be multiple portfolio_stocks each with their own purchase price and quantity
    '''
    def get(self, request):
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response(status=status.HTTP_403_FORBIDDEN)

        #date should be added automatically in the model
        quantity = request.GET['quantity']
        price = request.GET['price']

        #get the user's porfolio set up
        portfolio = None
        try:
            portfolio = Portfolio.objects.get(username=user)
        except Portfolio.DoesNotExist:
            portfolio = Portfolio(username=user)
            portfolio.save()

        #get the stock.  must be converted to uppercase for how we have it stored
        stock = None
        try:
            stock = Stock.objects.get(stock_symbol = request.GET['stock'].upper())
        except Stock.DoesNotExist:
            return Response({'name': portfolio.username.username, 'stock':"DOES NOT EXIST"})

        #create a porfolio_stock 
        ps = Portfolio_stock(portfolio_id=portfolio, stock_symbol=stock, quantity=quantity, purchase_price=price)
        ps.save()

        return Response(data={'updated':"good"},status = status.HTTP_200_OK)
    

class SaveInvestment(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
        #get the user's porfolio set up
        portfolio = None
        try:
            portfolio = Portfolio.objects.get(username=user)
        except Portfolio.DoesNotExist:
            portfolio = Portfolio(username=user)
            portfolio.balance = 0
            portfolio.save()
        
        #save investment
        investment_amount = None
        try:
            investment_amount = float(request.GET['amount'])
        except:
            pass
        if investment_amount:
            portfolio.balance = investment_amount
            portfolio.save()
        return Response({'amount' : portfolio.balance})  


def fetch_daily_OHLC():
    """
    This calls the Polygon API to return data on the entire stock/equities market and load it to the database. 
    Updates automatically each day.   
    """

    # API endpoint URL for batch stock quotes
    url = f'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={key}'

    # Send request to API and retrieve data
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        data = {'error': f'unable to retrieve daily data'}
    return data

def update_stocks_daily(request):
    #this function should be running constantly to update the db
    while True:
        print("sleeping")
        #sleep for 12 hours
        time.sleep(43200)
        print("awake")
    
        daily_data = fetch_daily_OHLC()
        print(daily_data['resultsCount'])
        if "error" in daily_data:
            error_msg = {'error': f'Unable to retrieve daily data'}
            return JsonResponse(error_msg)
        else:
            stocks_to_create = [] #these are the stocks that do not exist in the DB
            stocks_to_update = [] #these are the stocks that do exist in the DB

            print("looping data")
            i = 0
            for result in daily_data['results']:
                i = i + 1
                print(i)
                stock_symbol = result['T']
                current_price = result['c']
                daily_high = result['h']
                daily_low = result['l']
                if 'n' in result:
                    daily_num_transactions = result['n']
                else:
                    daily_num_transactions = None
                daily_open_price = result['o']
                daily_volume = result['v']
                if 'n' in result:
                    daily_vwap = result['vw']
                else:
                    daily_vwap = None

                # Get a list of stock symbols that already exist in the database
                existing_symbols = list(Stock.objects.values_list('stock_symbol', flat=True))

                if stock_symbol not in existing_symbols:
                    #we want to create this entry
                    stock = Stock(
                        stock_symbol=stock_symbol,
                        current_price=current_price,
                        daily_high=daily_high,
                        daily_low=daily_low,
                        daily_num_transactions=daily_num_transactions,
                        daily_open_price=daily_open_price,
                        daily_volume=daily_volume,
                        daily_vwap=daily_vwap,
                    )

                    stocks_to_create.append(stock)
                else:
                    #we want to update this entry
                    stock = Stock.objects.get(stock_symbol=stock_symbol)
                    stock.current_price = current_price
                    stock.daily_high = daily_high
                    stock.daily_low = daily_low
                    stock.daily_num_transactions = daily_num_transactions
                    stock.daily_open_price = daily_open_price
                    stock.daily_volume = daily_volume
                    stock.daily_vwap = daily_vwap

                    stocks_to_update.append(stock)

            print("creating entries")
            # Use bulk_create() to create multiple new objects in a single query
            Stock.objects.bulk_create(stocks_to_create)

            print("updating entries")
            # Use bulk_update() to update multiple existing objects in a single query
            Stock.objects.bulk_update(stocks_to_update, fields=[
                                  'current_price', 'daily_high', 'daily_low', 'daily_num_transactions', 'daily_open_price', 'daily_volume', 'daily_vwap'])
            