# SciCat Web / Rama joacoh (dev)
Repositorio para el desarrollo colaborativo de la página web de SciCat

En esta rama estará todo lo que sea testeo del proyecto **COMPLETO**, con HTML, CSS, JS y PY listos para descargar, ejecutar y probar!

Para poder realizar una prueba se debe instalar **DJANGO 3.2.7** en el ambiente de desarrollo deseado (Native, Conda, etc).

    #Native
    pip install Django
    #Conda
    conda install -c anaconda django
    
# Para Desarrollo 
El proyecto final no necesitara de estos pasos, sin embargo como esta es una rama de desarrollo backend, es necesario instalar par de funciones extra

CKEditor:

    #Native
    pip install django-ckeditor
    #Conda
    conda install -c auto django-ckeditor
    
En caso de faltar algún plugin en CKEditor, instalarlo individualmente o contactar al equipo para ayudar con esta parte.

# Ejecutar

Para ejecutar el proyecto, dirijirse a la carpeta del proyecto y ejecutar el siguiente comando:

    #Native
    python3 manage.py runserver
    #Conda
    RutaPythonConda manage.py runserver
