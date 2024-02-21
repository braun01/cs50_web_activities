from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import *

# Create your views here.
def index(request):
    return render(request, "students/index.html", {
        "total": Student.objects.count(),
        "students": Student.objects.all()
    })

def enroll(request, student_id):
    if request.method == "POST":
        # get a list of the selected inputs
        class_ids = request.POST.getlist("classes")

        selected_classes = Class.objects.filter(pk__in=class_ids)
        student = Student.objects.get(id=student_id)

        # assign the classes and save
        # the add function adds Class objects to this Many-to-many relationship.
        # it takes a variable number of inputs, so we can unpack the input using the * operator
        student.classes.add(*selected_classes)
        student.save()

        return HttpResponseRedirect(reverse("students:index"))

    else:
        # get the classes the student is not enrolled in
        unenrolled_classes = Class.objects.exclude(students=student_id).all()
        return render(request, "students/enroll.html", {
            "student_id": student_id,
            "classes": unenrolled_classes
        })