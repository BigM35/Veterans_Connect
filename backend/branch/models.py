from django.db import models

# Create your models here.

class MilitaryBranch(models.Model):
    name:models.CharField(max_length=50)