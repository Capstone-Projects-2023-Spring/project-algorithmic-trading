from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from tradester.models import Stock
from tradester.models import Investment

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

    # TODO: Implement function logic to retrieve data on specified stock

    # TODO: If stock data retrieved successfully, return as JSON in HttpResponse object
    # TODO: If error occurs, return error message as JSON in HttpResponse object
    return HttpResponse("get_stock_data")

def save_investment(request):
    i = Investment.objects.get(investment_id=1)
    print(request.method)
    if request.method == "GET":
        investment_amount = None
        try:
            investment_amount = float(request.GET['amount'])
        except:
            pass
        if investment_amount:
            i.amount = investment_amount
            i.save()
    return HttpResponse(str(i.amount))
