from django.urls import path
from .views import home, contacto, ramos

urlpatterns = [
    path('', home, name='home'),
    path('contacto/', contacto, name='contacto'),
    path('ramos/', ramos, name='ramos')
]