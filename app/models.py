from django.db import models


class Category(models.Model):
    image = models.ImageField(upload_to='category', null=True, blank=True)
    name = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name


class Products(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=199, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='products', null=True, blank=True)
    stock = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.name