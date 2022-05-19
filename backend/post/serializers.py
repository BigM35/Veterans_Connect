from rest_framework import serializers
from .models import Post
from authentication.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'profile_pic', 'username', 'rank', 'first_name', 'last_name', 'current_status', 'branch']
class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'user', 'text', 'likes', 'dislikes']
        depth = 1