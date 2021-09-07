from django import forms
from .models import Post, Category

choices = Category.objects.all().values_list('name','name')

choice_list = [choice for choice in choices]

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'author', 'prev', 'body', 'category')
        widget = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'category': forms.ChoiceField(choices=choice_list),
            'author': forms.Select(attrs={'class': 'form-control'}),
            'prev': forms.Textarea(attrs={'class': 'form-control'}),
            'body': forms.Textarea(attrs={'class': 'form-control'}),
        }

class EditForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title','prev', 'body', 'category')
        widget = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'category': forms.ChoiceField(choices=choice_list),
             #'author': forms.Select(attrs={'class': 'form-control'}),
            'prev': forms.Textarea(attrs={'class': 'form-control'}),
            'body': forms.Textarea(attrs={'class': 'form-control'}),
        }