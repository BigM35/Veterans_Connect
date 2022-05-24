from pickle import TRUE
from django.db import models
from authentication.models import User
# Create your models here.

class Message(models.Model):
    sender      = models.ForeignKey(User, related_name="message_sender", on_delete=models.CASCADE)
    receiver    = models.ForeignKey(User, related_name="message_receiver", on_delete=models.CASCADE)
    message     = models.TextField(blank=True, null=True)
    is_read     = models.BooleanField(default=False)
    is_created  = models.DateTimeField(auto_now=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"message between {self.sender.last_name} and {self.receiver.last_name}"
