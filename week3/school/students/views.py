from django.shortcuts import render

from .models import *

# Create your views here.
def index(request):
    return render(request, "students/index.html", {
        "total": Student.objects.count(),
        "students": Student.objects.all()
    })

# def enroll(request, student_id):
#     return render(request, "students/enroll.html", {
#         "student_id": student_id
#     })