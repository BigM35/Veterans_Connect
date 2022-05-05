from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'rank', 'first_name', 'last_name']
class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'user', 'text', 'likes', 'dislikes']
        depth = 1