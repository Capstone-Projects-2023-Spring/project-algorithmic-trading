# Generated by Django 4.2 on 2023-04-04 19:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tradester', '0012_stock_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
