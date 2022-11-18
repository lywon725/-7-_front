from django.db import models
import datetime

# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=10)
    
    def __str__(self):
        return self.category

class Text(models.Model):
    nickname = models.CharField(max_length=10)
    title = models.CharField(max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    text = models.TextField()
    email = models.CharField(max_length=30)

    def __str__(self):
        return self.nickname