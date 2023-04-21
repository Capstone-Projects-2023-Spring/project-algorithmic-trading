from django.db import models

# Create your models here.
class GpuServerLogs(models.Model):
    accesstime = models.CharField(db_column='accessTime', blank=True, null=True, max_length=255)  # Field name made lowercase.
    response = models.CharField(blank=True, null=True, max_length=255)
    id = models.AutoField(primary_key=True)
    class Meta:
        db_table = 'GPU_Server_Logs'
        managed = False

class Backlog(models.Model):
    ticker = models.CharField(primary_key=True, default = "DEFAULT_STOCK", max_length=10)
    date = models.DateField(blank=True, null=True)
    open = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    id = models.AutoField(primary_key=True)
    class Meta:
        db_table = 'backlog'
        managed = False
        


class ModelPrediction(models.Model):
    stock = models.CharField(primary_key=True, default = "DEFAULT_STOCK", max_length=10)
    predicted_close = models.FloatField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    execution_time = models.FloatField(blank=True, null=True)
    id = models.AutoField(primary_key=True)
    class Meta:
        db_table = 'model_prediction'    
        managed = False
