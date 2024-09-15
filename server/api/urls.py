from django.urls import path
from .views import get_faqs,create_faqs,faqs_detail,get_faqs_id

urlpatterns = [
    path('faqs/', get_faqs,name='get_faqs'),
    path('faqs/create/', create_faqs,name='create_faqs'),
    path('faqs/<int:pk>/edit/', faqs_detail,name='faqs_detail'),
    path('faqs/<int:pk>', get_faqs_id,name='get_faqs_id'),


    
]