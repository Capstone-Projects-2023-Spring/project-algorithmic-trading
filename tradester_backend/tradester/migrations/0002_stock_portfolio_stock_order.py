# Generated by Django 4.1.3 on 2023-02-26 21:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tradester', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('stock_symbol', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('company_name', models.CharField(max_length=255)),
                ('sector', models.CharField(max_length=255)),
                ('current_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('market_cap', models.DecimalField(decimal_places=2, max_digits=20)),
                ('dividend_yield', models.DecimalField(decimal_places=2, max_digits=5)),
                ('earnings_per_share', models.DecimalField(decimal_places=2, max_digits=10)),
                ('price_to_earnings_ratio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('beta', models.DecimalField(decimal_places=2, max_digits=5)),
                ('high_52', models.DecimalField(decimal_places=2, max_digits=10)),
                ('low_52', models.DecimalField(decimal_places=2, max_digits=10)),
                ('avg_daily_volume', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio_Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('portfolio_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tradester.portfolio')),
                ('stock_symbol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tradester.stock')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('order_type', models.CharField(max_length=10)),
                ('quantity', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('order_time', models.DateTimeField(auto_now_add=True)),
                ('stock_symbol', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tradester.stock')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='myorder', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]