# Generated by Django 4.0.4 on 2022-06-01 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_wishlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='like',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
