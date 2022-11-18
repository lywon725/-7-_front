from django.contrib import admin
from django.urls import path
from .views import *

app_name="message"

urlpatterns = [
    path('category/', CategoryCreate.as_view()),
    path('category/<str:id>', CategoryDetail.as_view()),
    path('', TextCreate.as_view()),
]
