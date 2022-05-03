import email
from telnetlib import STATUS
from tkinter import CASCADE
from unittest.util import _MAX_LENGTH
from django.db import models
from status.models import MilitaryStatus
from branch.models import MilitaryBranch
from rank.models import Ranks
# Create your models here.
class Users (models.Models):
    firstName: models.CharField(_MAX_LENGTH(50))
    lastName: models.CharField(_MAX_LENGTH(50))
    email: models.EmailField(_MAX_LENGTH(50))
    mos: models.CharField(_MAX_LENGTH(50))
    Branch: models.CharField(MilitaryBranch, on_delete=CASCADE)
    rank: models.ForeignKey(Ranks,on_delete=CASCADE)
    currentStatus: models.ForeignKey (MilitaryStatus, on_delete=CASCADE)
    date_joined: models.DateField(_MAX_LENGTH(50))