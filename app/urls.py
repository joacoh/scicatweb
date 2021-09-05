from django.urls import path
from .views import home, podcat, nosotros, PostView, PostDetailView, AddPostView, EditPostView, DeletePostView

urlpatterns = [
    path('', home, name='home'),
    path('podcat/', podcat, name='podcat'),
    path('ramos/', PostView.as_view(), name='ramos'),
    path('nosotros/', nosotros, name='nosotros'),
    path('articulo/<int:pk>', PostDetailView.as_view(), name='article-detail'),
    path('create/', AddPostView.as_view(), name='create'),
    path('articulo/<int:pk>/editar', EditPostView.as_view(), name='edit'),
    path('articulo/<int:pk>/eliminar', DeletePostView.as_view(), name='delete')
]