# Generated by Django 4.2 on 2023-04-04 19:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tradester', '0015_alter_portfolio_stock_date_alter_stock_timestamp'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='order_time',
            new_name='timestamp',
        ),
        migrations.RenameField(
            model_name='portfolio_stock',
            old_name='date',
            new_name='timestamp',
        ),
    ]