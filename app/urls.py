from django.urls import path
from .views import *


urlpatterns = [
    path('', homeView, name='home'),
    path('product/<int:id>', productDetailView, name='prdetail'),
    path('cart', cartView, name='cart'),
    path('quantitychange', quantChangeView, name='qunatychange'),
    path('cart-delete', cartDeleteView, name='qunatychange'), 
    path('checkout', checkoutView, name='checkout'), 
    path('login', loginView, name='login'),
    path('like', likeView, name='like'),
]