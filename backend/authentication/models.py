from distutils.command.upload import upload
from email.policy import default
from operator import truediv
from django.db import models
from django.contrib.auth.models import AbstractUser
from authentication import images

class User(AbstractUser): 
   
    
    profile_pic     = models.ImageField(upload_to='images/', default='images/default.jpeg')
    mos             = models.CharField(max_length=50,null=True)
    current_status  = models.CharField(max_length=10)
    branch          = models.CharField(max_length=5, blank=True)
    grade           = models.CharField(max_length=2, blank=True)
    rank            = models.CharField(max_length=50,blank=True)
    friends = models.ManyToManyField("self",  blank=True, related_name="reciver")
    

    
    

    # pass
    '''
    This is a custom version of the built in User class
    It contains all of the built in fields and functionality of the standard User
    You can add fields here for any additional properties you want a User to have
    This is useful for adding roles (Customer and Employee, for example)
    For just a few roles, adding boolean fields is advised
    '''
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)
