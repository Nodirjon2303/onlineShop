# Generated by Django 4.0.4 on 2022-05-27 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_order_datails_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='address1',
            field=models.CharField(blank=True, max_length=225, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='address2',
            field=models.CharField(blank=True, max_length=225, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='email',
            field=models.CharField(blank=True, max_length=125, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='first_name',
            field=models.CharField(blank=True, max_length=125, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='last_name',
            field=models.CharField(blank=True, max_length=225, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='number',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='postal_code',
            field=models.CharField(blank=True, max_length=125, null=True),
        ),
        migrations.AddField(
            model_name='orders',
            name='viloyat',
            field=models.CharField(blank=True, max_length=125, null=True),
        ),
    ]
