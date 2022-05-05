from django.urls import path
from . import views



urlpatterns = [
    path('<int:pk>/', views.user_replies),
    path('<int:pk>/update/', views.update_reply)
]