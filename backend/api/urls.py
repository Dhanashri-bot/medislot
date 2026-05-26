from django.urls import path
from .views import *

urlpatterns = [

    path('register/', RegisterView.as_view()),

    path('login/', LoginView.as_view()),

    path('doctors/', DoctorListView.as_view()),

    path('doctors/book/', AppointmentView.as_view()),

    path('appointments/', AppointmentView.as_view()),

]