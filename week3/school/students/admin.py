from django.contrib import admin

from .models import *


class StudentAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "age", "eye_color")

class ClassAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "subject", "duration")

# Register your models here.
admin.site.register(Student, StudentAdmin)
admin.site.register(Class, ClassAdmin)
