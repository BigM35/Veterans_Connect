from django.urls import path, include
from . import views



urlpatterns = [
    path('', views.add_post),
    path('<int:pk>/', views.update_post),
    path('friend_posts/', views.get_friend_posts)
]