from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'app/home.html')

def redes(request):
    return render(request, 'app/redes.html')
    
def ramos(request):
    return render(request, 'app/ramos.html')

def nosotros(request):
    return render(request, 'app/nosotros.html')

def old(request):
    return render(request, 'app/home_old.html')