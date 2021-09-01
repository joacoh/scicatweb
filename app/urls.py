from django.urls import path
from .views import home, podcat, ramos, nosotros

urlpatterns = [
    path('', home, name='home'),
    path('podcat/', podcat, name='podcat'),
    path('ramos/', ramos, name='ramos'),
    path('nosotros/', nosotros, name='nosotros')
]