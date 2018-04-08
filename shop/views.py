from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import HttpResponse


# Create your views here.
from shop.models import Good


def index(request):
    tattooes = get_list_or_404(Good)
    return render(request, 'shop/index.html', {'tattooes': tattooes, 'range': range(len(tattooes))})

def gallery(request):
    tattooes = get_list_or_404(Good)
    return render(request, 'shop/gallery.html', {'tattooes': tattooes, 'range': range(len(tattooes))})