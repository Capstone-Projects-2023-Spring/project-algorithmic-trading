from django.db import models

# Create your models here.
class Friendship(models.Model):
    friendship_id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField()
    other_user_id = models.IntegerField()

class FriendRequest(models.Model):
    request_id = models.IntegerField(primary_key=True)
    send_user_id = models.IntegerField()
    receiver_user_id = models.IntegerField()
