from django.urls import path
from api.views import DoctorListView, AppointmentView

urlpatterns = [

    path('', DoctorListView.as_view()),

    path('book/', AppointmentView.as_view()),

]