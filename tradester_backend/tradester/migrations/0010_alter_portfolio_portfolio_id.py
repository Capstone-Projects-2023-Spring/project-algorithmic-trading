# Generated by Django 4.1.7 on 2023-04-03 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tradester', '0009_portfolio_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='portfolio_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
