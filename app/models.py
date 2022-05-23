from django.db import models
from django.contrib.auth.models import User


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
    quantity = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='products', null=True, blank=True)
    stock = models.IntegerField(default=0, null=True, blank=True)
    status = models.BooleanField(default=True)

    def real_price(self):
        return self.price-(self.stock*self.price)/100


    def __str__(self):
        return self.name


class Orders(models.Model):
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    done_status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.customer.first_name}   {self.done_status}"


class Order_datails(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    price = models.IntegerField(null=True,blank=True, default=0)
    quantity = models.IntegerField(null=True,blank=True, default=1)
    created_date = models.DateTimeField(auto_now_add=True)

    @property
    def sold_price(self):
        return self.price*self.quantity

    @property
    def real_price(self):
        return self.product.price * self.quantity


    def __str__(self):
        return f"{self.order.id}   {self.product.name}"
