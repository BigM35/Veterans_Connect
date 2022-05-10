from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView
from authentication import views

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('finder/', views.find_user, name='finder'),
    path('<int:id>/profile/', views.person_friend_list, name='person_friend_list')
]
