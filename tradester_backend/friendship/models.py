from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Friendship(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='user', default=None)
    other_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='other_user', default=None)

class FriendRequest(models.Model):
    sender = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='sender', default=None)
    receiver = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='receiver', default=None)
