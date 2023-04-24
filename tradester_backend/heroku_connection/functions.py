from heroku_connection.models import Backlog
from heroku_connection.models import ModelPrediction

def get_close_past_week(ticker):
    # Get stock close values for the latest 6 days.
    past_week_data = Backlog.objects.filter(ticker=ticker).order_by('-date')[:6]
    
    list = []
    for datum in past_week_data:
        list.append({
            "price": datum.close,
            "date": datum.date,
        })
    list.reverse()
    return list

def get_latest_close_prediction(ticker):
    latest_close_prediction = ModelPrediction.objects.filter(stock=ticker).order_by('-date')[:1]
    return {
        "price": latest_close_prediction[0].predicted_close,
        "date": latest_close_prediction[0].date,
    };
