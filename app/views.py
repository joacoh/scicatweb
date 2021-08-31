from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'app/home.html')

def podcat(request):
    return render(request, 'app/podcat.html')
    
def ramos(request):
    return render(request, 'app/ramos.html')

def nosotros(request):
    return render(request, 'app/nosotros.html')

def buscar(request):
    return render(request, 'app/buscar.html')

def old(request):
    return render(request, 'app/home_old.html')