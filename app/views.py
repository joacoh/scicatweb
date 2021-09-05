from django.shortcuts import render
from django.views. generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Post
from .forms import PostForm, EditForm
from django.urls import reverse_lazy

def home(request):
    return render(request, 'app/home.html')

def podcat(request):
    return render(request, 'app/podcat.html')
    
def nosotros(request):
    return render(request, 'app/nosotros.html')

class PostView(ListView):
    model = Post
    template_name = 'app/ramos.html'
    ordering = ['-post_date', '-id']

class PostDetailView(DetailView):
    model = Post 
    template_name = 'app/post_ramos.html'

class AddPostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'app/add_post.html'

class EditPostView(UpdateView):
    model = Post
    form_class = EditForm
    template_name = 'app/edit_post.html'

class DeletePostView(DeleteView):
    model = Post
    template_name = 'app/delete_post.html'
    success_url = reverse_lazy('ramos')