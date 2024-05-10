from django.db import models
from random import randint

from django.utils import timezone
# Create your models here.

class User(models.Model) : 
  name = models.CharField(max_length=225, default=f"user{randint(100000, 999999)}")
  mail = models.EmailField()
  password = models.CharField(max_length=225)
  registr_data = models.DateTimeField(default=timezone.now)
  sold = models.IntegerField(default=0)
  contact_mail = models.EmailField(null=True)
  phone = models.IntegerField(null=True)
  region = models.CharField(max_length=22, default="Украина")
  allowNotifications = models.BooleanField(default=False)
  instagram = models.CharField(max_length=225, null=True)
  telegram = models.CharField(max_length=225, null=True)
  products = models.CharField(max_length=225, default=[])
  image = models.CharField(max_length=225, null=True)
  def __str__(self) :
    return self.name

class Product(models.Model) :
  name = models.CharField(max_length=225)
  code = models.IntegerField(default=randint(100000, 999999))
  price = models.IntegerField()
  seller = models.ForeignKey(User, on_delete=models.CASCADE)
  country = models.CharField(max_length=225)
  type = models.CharField(max_length=225)
  date = models.DateTimeField(default=timezone.now)
  category = models.CharField(max_length=225)
  description = models.CharField(max_length=225)
  images = models.CharField(max_length=225)
  def __str__(self) :
    return self.name