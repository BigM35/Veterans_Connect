
from telnetlib import STATUS
from time import timezone
from tkinter import CASCADE
from unittest.util import _MAX_LENGTH
from django.db import models
from status.models import MilitaryStatus
from branch.models import MilitaryBranch
from rank.models import Ranks
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
# Create your models here.




class CustomAccountManager(BaseUserManager):
    
    def create_superuser(self, email, user_name, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('superuser must be assigned to is_staff=True')

        if other_fields.get('is_superuser') is not True:
            raise ValueError('superuser must be assigned to is_superuser=True')

        return self.create_user(email, user_name, first_name, last_name, password, **other_fields)


    def create_user(self, email, user_name, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError(_("You must provide an email address"))
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, first_name=first_name, last_name=last_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class Users (AbstractBaseUser, PermissionsMixin):
    first_name: models.CharField(max_length=50)
    last_name: models.CharField(max_length=50)
    user_name:models.CharField(max_length=50)
    email: models.EmailField(_('email address'), unique=True)
    mos: models.CharField(max_length=50)
    Branch: models.CharField(MilitaryBranch, on_delete=CASCADE)
    rank: models.ForeignKey(Ranks,on_delete=CASCADE)
    currentStatus: models.ForeignKey (MilitaryStatus, on_delete=CASCADE)
    start_date: models.DateTimeField(default=timezone.now)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name', 'last_name']

    def __str__(self) -> str:
        return self.user_name