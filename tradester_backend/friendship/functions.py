from friendship.models import Friendship
from django.db.models import Q

def get_friendship(user, other_user):
    return Friendship.objects.filter(
        (Q(user=user) & Q(other_user=other_user)) | 
        (Q(user=other_user) & Q(other_user=user))
    )
