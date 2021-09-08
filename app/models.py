from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.urls import reverse
from datetime import datetime, date

class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        ordering = ('name', )
        verbose_name = 'categoría'
        verbose_name_plural = 'categorías'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('ramos')

class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    prev = RichTextField(blank=True, null=True, max_length=255)
    body = RichTextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=None)
    post_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('ramos')