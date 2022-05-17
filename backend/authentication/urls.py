from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView
from authentication import views

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('finder/', views.find_all_users, name='all_users'),
    path('<int:id>/friends/', views.person_friend_list, name='person_friend_list'),
    path('<int:id>/profile/', views.find_user, name='find_one_user'),
    path('<int:id>/profile/friend_request/', views.friend_request, name='friend_request')
]
