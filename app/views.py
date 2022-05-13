from django.shortcuts import render
from .models import *


def homeView(request):
    categories = Category.objects.all().order_by('id')
    products = Products.objects.filter(category=categories[0])
    return render(request, 'index.html', {'category': categories, 'products':products})
