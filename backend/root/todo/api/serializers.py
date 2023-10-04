from rest_framework import serializers

from ..models import Task
from ..models import Color

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class TaskSerializerDetail(serializers.ModelSerializer):
    color_name = serializers.CharField(source = "color.name", read_only = True)
    color_code = serializers.CharField(source = "color.code", read_only = True)
    class Meta:
        model = Task
        fields = '__all__'