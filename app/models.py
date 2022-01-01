from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.urls import reverse
from datetime import datetime, date

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='nombre')
    desc = RichTextField(blank=True, null=True, verbose_name='descripción')

    class Meta:
        ordering = ('name', )
        verbose_name = 'categoría'
        verbose_name_plural = 'categorías'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('ramos')

class Post(models.Model):
    title = models.CharField(max_length=255, verbose_name='título')
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='autor')
    prev = RichTextField(blank=True, null=True, max_length=255, verbose_name='resumen')
    body = RichTextField(blank=True, null=True, verbose_name='contenido')
    category = models.ForeignKey(Category, on_delete=None, verbose_name='categoría')
    post_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('ramos')