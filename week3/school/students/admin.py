from django.contrib import admin

from .models import Student


class StudentAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "age", "eye_color")

# Register your models here.
admin.site.register(Student, StudentAdmin)
