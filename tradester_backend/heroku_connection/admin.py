from django.contrib import admin
from .models import ModelPrediction, Backlog, GpuServerLogs
# Register your models here.
admin.site.register(ModelPrediction)
admin.site.register(Backlog)
admin.site.register(GpuServerLogs)