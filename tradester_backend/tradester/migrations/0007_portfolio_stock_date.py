# Generated by Django 4.1.7 on 2023-03-31 17:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tradester', '0006_merge_20230331_1642'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio_stock',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 31, 17, 0, 12, 867, tzinfo=datetime.timezone.utc)),
        ),
    ]
