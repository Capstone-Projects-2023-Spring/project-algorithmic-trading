# Generated by Django 4.2 on 2023-04-04 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tradester', '0011_merge_20230404_1410'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
