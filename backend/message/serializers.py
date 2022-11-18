from rest_framework import serializers
from .models import *

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = '__all__'

    def create(self, validated_data):
        data = Text.objects.create(**validated_data)
        return data

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    def create(self, validated_data):
        data = Category.objects.create(**validated_data)
        return data