from django.shortcuts import render, HttpResponse
from .models import Producto

# Create your views here.
def home(request):
    return render(request, "mi_aplicacion/index.html")

def about(request):
   return render(request, "mi_aplicacion/contact.html")

def others(request):
   return render(request, "mi_aplicacion/otros.html")

def products(request):
   productos = Producto.objects.all()
   return render(request, "mi_aplicacion/productos.html",  {'productos': productos} )


def servTect(request):
   return render(request, "mi_aplicacion/servtec.html")