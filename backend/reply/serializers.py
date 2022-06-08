from rest_framework import serializers
from .models import Reply
from authentication.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'profile_pic', 'username', 'rank', 'first_name', 'last_name', 'current_status', 'branch']
class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Reply
        fields = ['id', 'user', 'post', 'text', 'likes', 'dislikes']
        depth=1