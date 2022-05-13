from django.contrib.auth import get_user_model
from .serializers import FriendsListSerializer, MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
User = get_user_model()
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def person_friend_list(request, id):
    person = User.objects.filter(pk=id)
    serialized_friend_list = FriendsListSerializer(person, many=True)
    return Response(serialized_friend_list.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def find_all_users(request):
    user = User.objects.all()
    serializer = RegistrationSerializer(user, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def find_user(request, id):
    user = User.objects.get(pk=id)
    serializer = RegistrationSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

# add path for this function
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_friend(request, new_friend_id):
    # find the user profile of the person being friended
    new_friend = User.objects.get(pk=new_friend_id)
    # add user to friends list
    request.user.friends.add(new_friend)
    # save user
    request.user.save()
    return Response(status=status.HTTP_200_OK)