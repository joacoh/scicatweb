from django.urls import path
from .views import home, redes, ramos, nosotros, old

urlpatterns = [
    path('', home, name='home'),
    path('redes/', redes, name='redes'),
    path('ramos/', ramos, name='ramos'),
    path('nosotros/', nosotros, name='nosotros'),
    path('old/', old, name='old')
]