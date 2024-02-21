from django.urls import path
from . import views

app_name = "students"
urlpatterns = [
    path("", views.index, name="index"),
    path("enroll/<int:student_id>", views.enroll, name="enroll"),
]