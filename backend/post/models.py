from django.db import models
from authentication.models import User
# Create your models here.

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)
    likes = models.IntegerField(null=True, blank=True, default=0)
    dislikes = models.IntegerField(null=True, blank=True, default=0)