# Generated by Django 4.0.4 on 2022-05-18 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_order_datails_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order_datails',
            name='quantity',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
    ]
