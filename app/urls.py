from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home,name="home"),
    path('cart/',views.cart,name="cart"),
    path('checkout/',views.checkout,name="checkout"),
    path('update_item/',views.updateItem,name="update_item"),
    path('register/',views.register,name="register"),
    path('login/',views.Login,name="login"),
    path('logout/',views.Logout,name="logout"),
    path('search/',views.Search,name="search"),
    path('category/',views.category,name="category"),
    path('detail/',views.detail,name="detail"),
    path('payment/',views.payment,name="payment"),
    path('payment_success/',views.payment_success,name="payment_success"),

   

]
