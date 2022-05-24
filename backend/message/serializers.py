from email import message
from django.dispatch import receiver
from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
    sender          = serializers.SerializerMethodField('get_user_data')
    sender_id       = serializers.IntegerField(write_only=True)
    receiver        = serializers.SerializerMethodField('get_user_data')
    receiver_i      = serializers.IntegerField(write_only=True)
    class Meta:
        model       = Message
        fields      = "__all__"

        depth       = 1

    def get_user_data(self, obj):
        from authentication.serializers import RegistrationSerializer
        return RegistrationSerializer(obj.sender.user)



