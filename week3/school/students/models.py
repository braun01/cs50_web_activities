from django.core.validators import MaxValueValidator, MinValueValidator 
from django.db import models

colors = ["Green", "Blue", "Brown"]

# Create your models here.
class Student(models.Model):
    # note that id will automatically get created when we inherit from model.Models
    name = models.CharField(max_length=10, null=False)
    age = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)], null=False)
    eye_color = models.CharField(max_length=max([len(c) for c in colors]), choices={color: color for color in colors})

    def __str__(self):
        return f"{self.name}, {self.age} ({self.id})"

class Class(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=20)
    duration = models.IntegerField()
    students = models.ManyToManyField(Student, blank=True, related_name="classes")

    def __str__(self):
        return f"{self.name} ({self.subject})"


