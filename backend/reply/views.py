from pyexpat import model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404
from post.models import Post




# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, pk):
    reply = Reply.objects.filter(pk=pk)
    post = get_object_or_404(Post, pk=pk)
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(post=post,user= request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        replies = Reply.objects.filter(post = pk)
        serializer = ReplySerializer(replies, many= True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_reply(request, pk):
        replies = Reply.objects.get(pk = pk)
        serializer = ReplySerializer(replies, data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)