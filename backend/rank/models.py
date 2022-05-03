from django.db import models

# Create your models here.

class Ranks(models.Models):
    rank:models.CharField(max_length=50)