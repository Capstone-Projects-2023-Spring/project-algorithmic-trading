from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    """
    :template:`path/to/template.html`
    """
    return HttpResponse("Welcome to the Tradester index.")
