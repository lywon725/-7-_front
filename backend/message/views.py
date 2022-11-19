from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

# Create your views here.
class TextCreate(generics.ListCreateAPIView):
    serializer_class = TextSerializer
    queryset = Text.objects.all()

class CategoryCreate(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
    queryset = Category.objects.all()

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
    queryset = Category.objects.all()
    lookup_field ='id'


    