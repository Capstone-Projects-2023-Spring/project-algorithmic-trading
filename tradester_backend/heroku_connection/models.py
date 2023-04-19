from django.db import models

# Create your models here.
class GpuServerLogs(models.Model):
    accesstime = models.CharField(primary_key=True, db_column='accessTime', default = '0')  # Field name made lowercase.
    response = models.CharField(blank=True, null=True)

    class Meta:
        #app_label= 'Heroku'
        # managed = False
        db_table = 'GPU_Server_Logs'
        # using = 'heroku'

class Backlog(models.Model):
    ticker = models.CharField(primary_key=True, default = "DEFAULT_STOCK")
    date = models.DateField(blank=True, null=True)
    open = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)

    class Meta:
        #app_label= 'Heroku'
        # managed = False
        db_table = 'backlog'
        #using = 'heroku'
        


class ModelPrediction(models.Model):
    stock = models.CharField(primary_key=True, default = "DEFAULT_STOCK")
    predicted_close = models.FloatField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    execution_time = models.FloatField(blank=True, null=True)

    class Meta:
        #app_label= 'Heroku'
        # managed = False
        db_table = 'model_prediction'    
        #using = 'heroku'