from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import AccessToken

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
