from decimal import Decimal

import requests
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from datetime import timedelta

from tradester.models import *
from friendship.functions import get_friendship
from functions.functions import get_user_from_token

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken

from django.conf import settings
import csv
from io import StringIO
import os
import status

import sched
import time
import datetime

key = os.environ.get('DB_CONN_DAILY', default='')
from django.conf import settings

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
    View to get data on a specified stock from the database

    param request: the request object \n
    type request: HttpRequest \n
    param _symbol: symbol of the stock to retrieve data for \n
    type _symbol: str \n
    return: HttpResponse object with JSON data of stock information or error message \n
    rtype: HttpResponse
    """
    # Get a list of stock symbols that already exist in the database
    existing_symbols = list(Stock.objects.values_list('stock_symbol', flat=True))
    if _stock_symbol in existing_symbols:
        stock = Stock.objects.get(stock_symbol=_stock_symbol)
        data = {'stock_symbol': stock.stock_symbol, 'current_price': stock.current_price, 'open': stock.daily_open_price,
                'high': stock.daily_high, 'low': stock.daily_low, 'timestamp': stock.timestamp,
                'num_transactions': stock.daily_num_transactions, 'volume': stock.daily_volume, 
                'vwap': stock.daily_vwap}
        return JsonResponse(data)
    else:
        error_msg = {'error': f'Unable to retrieve data for {_stock_symbol}. Stock DNE in database'}
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

class DeleteAccount(APIView):
    '''
    expects a header of "authorizations: bearer <token>"
    '''
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response({'error': "no user"}, status=HTTP_403_FORBIDDEN)
        user.delete()
        return Response(status=status.HTTP_200_OK)

class DisplayPortfolio(APIView):
    '''
    expects a header of "authorizations: bearer <token>"
    '''
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        #get the user
        user_id = request.GET['user_id']
        if user_id == 'self':
            user = get_user_from_token(request)
        else:
            user = User.objects.filter(id=user_id).first()
            friendship = get_friendship(user, get_user_from_token(request)).first()
            if friendship == None:
                return Response(
                    data = {"portfolio": "Not authorized to access this portfolio. User is not a friend."},
                    status=status.HTTP_401_UNAUTHORIZED
                )

        if user == None:
            return Response({'portfolio': "no user"})
            
        #get the user's portfolio
        portfolio = None
        # balance = None
        try:
            portfolio = Portfolio.objects.get(username=user)
            balance = portfolio.balance
        except Portfolio.DoesNotExist:
            return Response(status=status.HTTP_403_FORBIDDEN)

        #for each portfolio_stock, add its contents to a list
        purchase_total = 0  #the sum of all stock prices (at time of purchase) times their quantities 
        real_total = 0      #the sum of all stock prices (current on the market) times their quantities 
        return_object = {}
        return_object['balance'] = balance
        stock_list = Portfolio_stock.objects.filter(portfolio_id=portfolio)
        for stk in stock_list:
            #create an entry for that stock if it isnt' in the list
            
            stock_name= stk.stock_symbol.stock_symbol
            # print(stock_name, ': ', stk.quantity)
            if not stock_name in return_object:
                real_stock = Stock.objects.get(stock_symbol=stock_name)
                return_object[stock_name] = {
                    'quantity_total':0,
                    'purchase_value':0.0,
                    'real_'+stock_name:{
                        'price':real_stock.current_price,
                        'real_value': 0                       
                    },
                    'purchases': []
                }
                
            #add the purchase_total quantity_total value for the stock
            return_object[stock_name]['quantity_total'] += stk.quantity
            return_object[stock_name]['purchase_value'] += stk.quantity * float(stk.purchase_price)
            
            #total is the full value of the purchase price
            purchase_total += stk.quantity * stk.purchase_price
            real_total += real_stock.current_price*stk.quantity

            #add the quantity and price of the stock at time of purchase to the timestamp entry
            return_object[stock_name]['purchases'].append( 
                {
                    'timestamp': stk.timestamp,
                    'price': stk.purchase_price,
                    'quantity': stk.quantity
                }
            )

            return_object[stock_name]['real_'+stock_name]['real_value'] += real_stock.current_price*stk.quantity
 

        return_object['total_purchase_value'] = purchase_total
        return_object['total_real_value'] = real_total
        return Response(return_object)
    

class SellStock(APIView):
    '''
    expects a header of "authorizations: bearer <token>"
    '''
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response(status=status.HTTP_403_FORBIDDEN)

        #we should be pulling the price from our stored value, but keep it this way for now
        quantity = float(request.GET['quantity'])
        price = float(request.GET['price'])
        ownedQuantity = 0

        #get the user's porfolio set up
        portfolio = None
        try:
            portfolio = Portfolio.objects.get(username=user)
        except Portfolio.DoesNotExist:
            portfolio = Portfolio(username=user)
            portfolio.save()

        #get the stock for its "real" value.  stock ticker must be converted to uppercase for how we have it stored
        stock = None
        try:
            stock = Stock.objects.get(stock_symbol = request.GET['stock'].upper())
        except Stock.DoesNotExist:
            return Response({'name': portfolio.username.username, 'stock':"DOES NOT EXIST"})
        
        #remove all stocks with that tickers name and add it to an amount to sell
        stock_list = Portfolio_stock.objects.filter(portfolio_id=portfolio, stock_symbol=stock.stock_symbol).order_by('purchase_price')
        print(stock_list)
        if len(stock_list) < 1:
            return Response({'error':'you do not own any shares of that stock'})

        leftToSell = quantity
        totalSold = 0

        #make sure we have enough to sell all requested
        owned = 0
        for stk in stock_list:
            owned = owned + stk.quantity


        if owned < quantity:
            print("owned: ", owned)
            print("quantity", quantity)
            return Response({'error':'you do not own that many shares of that stock'})
        
        for stk in stock_list:
            if leftToSell == 0:
                break
            print("sell stock: ", stk.purchase_price)
            #if there is more remaining than requested to sell
            if stk.quantity > leftToSell:
                stk.quantity = stk.quantity - leftToSell
                print("new quantity: ", stk.quantity)
                stk.save()
                totalSold = totalSold + leftToSell
                leftToSell = 0
            else:
                leftToSell = leftToSell - stk.quantity
                totalSold = totalSold + stk.quantity
                stk.delete()
        
        portfolio.balance = float(portfolio.balance) + (price * totalSold)
        portfolio.save()

        return Response(data={'new_balance':portfolio.balance},status = status.HTTP_200_OK)

class PurchaseStock(APIView):
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
        quantity = float(request.GET['quantity'])
        price = float(request.GET['price'])

        #get the user's porfolio set up
        portfolio = None
        try:
            portfolio = Portfolio.objects.get(username=user)
        except Portfolio.DoesNotExist:
            portfolio = Portfolio(username=user)
            portfolio.save()

        #get the stock for its "real" value.  stock ticker must be converted to uppercase for how we have it stored
        stock = None
        try:
            stock = Stock.objects.get(stock_symbol = request.GET['stock'].upper())
        except Stock.DoesNotExist:
            return Response({'name': portfolio.username.username, 'stock':"DOES NOT EXIST"})
        
        #check if it's possible to purchase this stock
        orderTotal = price*quantity
        if orderTotal > portfolio.balance:
            return Response(data={'error':'insufficient funds to purchase this stock', 'total attempted' : orderTotal})
        else:
            ps = Portfolio_stock(portfolio_id=portfolio, stock_symbol=stock, quantity=quantity, purchase_price=price )
            ps.save()
            portfolio.balance = float(portfolio.balance) - orderTotal
            portfolio.save()

        return Response(data={'purchase total':orderTotal},status = status.HTTP_200_OK)
    

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

class UpdateOrder(APIView):
    permission_classes = (IsAuthenticated,)
    
    def get(self, request):
        """
        returns a JSON object containing all of the Order objects associated with a user
        """
        #get the user
        user = get_user_from_token(request)
        if user == None:
            return Response(status=status.HTTP_403_FORBIDDEN)
        # Assuming you have a user object named 'my_user'
        orders = user.myorder.all()
        return JsonResponse({'orders': list(orders.values())})
    
    def post(self, request, _stock_symbol, _order_type, _quantity, _price):
        """
        add an order object to the order table associated with a user
        """
        # Get a list of stock symbols that already exist in the database and
        # check _stock_symbol exists
        existing_symbols = list(Stock.objects.values_list('stock_symbol', flat=True))
        if _stock_symbol not in existing_symbols:
            error_msg = {'error': f'Unable to retrieve data for {_stock_symbol}. Stock DNE in database'}
            return JsonResponse(error_msg)
        else:
            _stock_symbol = Stock.objects.get(stock_symbol=_stock_symbol)
        
        #create the order object after passing conditional
        order = Order(
            stock_symbol = _stock_symbol,
            order_type = _order_type,
            quantity = _quantity,
            price = _price,
            username = get_user_from_token(request),
        )

        #save the order object
        order.save()

        response_msg = {'response': f'new entry saved'}
        return JsonResponse(response_msg)

def fetch_daily_OHLC():
    """
    This calls the Polygon API to return data on the entire stock/equities market and load it to the database. 
    Updates automatically each day.   
    """

    #we want to pull stock market data for the last date with OHLC data.
    #We need conditionals to handle weekends (stock data only updated M-F)
    today = timezone.now()

    if today.weekday() == 5:  # Saturday
        date = (today - timedelta(days=1)).strftime('%Y-%m-%d')
    elif today.weekday() == 6:  # Sunday
        date = (today - timedelta(days=2)).strftime('%Y-%m-%d')
    else:
        date = (today - timedelta(days=1)).strftime('%Y-%m-%d')

    # API endpoint URL for batch stock quotes
    url = f'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/{date}?adjusted=true&apiKey={key}'

    # Send request to API and retrieve data
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
    else:
        data = {'error': f'unable to retrieve daily data'}
    return data, date

def update_stocks_daily(request):
    #this function should be running constantly to update the db
    while True:
        daily_data, date = fetch_daily_OHLC()
        print(daily_data)
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
                        timestamp = date,
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
                    stock.timestamp = date

                    stocks_to_update.append(stock)

            print("creating entries")
            # Use bulk_create() to create multiple new objects in a single query
            Stock.objects.bulk_create(stocks_to_create)

            print("updating entries")
            # Use bulk_update() to update multiple existing objects in a single query
            Stock.objects.bulk_update(stocks_to_update, fields=[
                                  'current_price', 'daily_high', 'daily_low', 'daily_num_transactions', 'daily_open_price', 'daily_volume', 'daily_vwap'])
            
            print("sleeping")
            #sleep for 12 hours
            time.sleep(43200)
            print("awake")