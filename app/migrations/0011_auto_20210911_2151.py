# Generated by Django 2.2.5 on 2021-09-11 21:51

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20210908_0049'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='desc',
            field=ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='descripción'),
        ),
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='autor'),
        ),
        migrations.AlterField(
            model_name='post',
            name='body',
            field=ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='contenido'),
        ),
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.ForeignKey(on_delete=None, to='app.Category', verbose_name='categoría'),
        ),
        migrations.AlterField(
            model_name='post',
            name='prev',
            field=ckeditor.fields.RichTextField(blank=True, max_length=255, null=True, verbose_name='resumen'),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=255, verbose_name='título'),
        ),
    ]
