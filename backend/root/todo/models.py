from django.db import models
from django.utils import timezone

# Create your models here.

class Color(models.Model):
    name = models.CharField(max_length=10, unique=True)
    code = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return str(self.name)
    
    def save(self, *args, **kwargs):
        self.name = self.name.upper()
        self.code = self.code.upper()
        return super(Color, self).save(*args, **kwargs)
    
class Task(models.Model):
    """ right_now = timezone.now() """
    title = models.CharField(max_length=50)
    description = models.TextField()
    color = models.ForeignKey(Color, on_delete=models.PROTECT)
    archived = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title)
""" 
    def save(self, *args, **kwargs):
        self.edited_at = timezone.now()
        return super(Task, self).save(*args, **kwargs) """