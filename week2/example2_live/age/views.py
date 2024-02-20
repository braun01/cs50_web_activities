from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django import forms

class AgeForm(forms.Form):
    name = forms.CharField(label="Name?")

# Create your views here.
def index(request):
    return HttpResponse("Hello!")

def get_age(request):
    if request.method == "POST":
        form = AgeForm(request.POST)
        request.sessions["name"] = form.cleaned_data["name"]
        return HttpResponseRedirect(reverse("age:index"))
    else:
        return render(request, "age/get_age.html", {
            "form": AgeForm()
        })


