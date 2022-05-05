from rest_framework import serializers
from .models import Reply
from authentication.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'rank', 'first_name', 'last_name']
class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Reply
        fields = ['id', 'user', 'post', 'text']
        depth=1