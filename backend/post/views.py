from urllib import response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Post
from .serializers import PostSerializer




@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def add_post(request):
    if request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_post(request, pk):
        post = Post.objects.get(pk = pk)
        serializer = PostSerializer(post, data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
 
# Create your views here.

@api_view(['GET'])
@permission_classes({IsAuthenticated})
def get_friend_posts(request):
    # get user off request
    friends = request.user.friends.all()
    vis = [item for item in friends]
    friend_posts = Post.objects.filter(user__in=friends)
    serializer = PostSerializer(friend_posts, many=True)
    return Response(serializer.data)