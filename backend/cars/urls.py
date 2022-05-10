from django.urls import path, include
from cars import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_cars),
    path('all/', views.get_all_cars),
    path('<int:id>', views.single_car)
]
