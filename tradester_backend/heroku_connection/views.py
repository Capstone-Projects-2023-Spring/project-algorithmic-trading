from decimal import Decimal

import requests
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from datetime import timedelta



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

from heroku_connection.models import *

# Find a user by their user name
#class display_stock_by_ticker(request, _ticker):
def display_stock_by_ticker(request):
    ticker = request.GET['ticker']
    stock_data = Backlog.objects.filter(ticker=ticker)
    data = []
    for entry in stock_data:
        data.append({
            'date': entry.date,
            'open': entry.open,
            'close': entry.close,
            'low': entry.low,
            'high': entry.high,
            'volume': entry.volume                      
        })
    return JsonResponse(data)