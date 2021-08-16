from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'app/home.html')

def contacto(request):
    return render(request, 'app/d_contacto.html')
    
def ramos(request):
    return render(request, 'app/d_ramos.html')