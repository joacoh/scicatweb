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



