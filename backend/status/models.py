from django.db import models

# Create your models here.

class MilitaryStatus(models.Models):
    status:models.CharField(max_length=50)