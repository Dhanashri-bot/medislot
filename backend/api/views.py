from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth import get_user_model

from .models import Doctor, Appointment

from .serializers import (
    RegisterSerializer,
    DoctorSerializer,
    AppointmentSerializer
)

User = get_user_model()


# =========================
# REGISTER VIEW
# =========================

class RegisterView(generics.CreateAPIView):

    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):

        username = request.data.get("username")

        if User.objects.filter(username=username).exists():

            return Response(
                {"error": "User already exists"},
                status=400
            )

        return super().create(request, *args, **kwargs)


# =========================
# LOGIN VIEW
# =========================

class LoginView(generics.GenericAPIView):

    permission_classes = [AllowAny]

    def post(self, request):

        return Response({
            "message": "Login successful"
        })


# =========================
# DOCTOR LIST VIEW
# =========================

class DoctorListView(generics.ListCreateAPIView):

    queryset = Doctor.objects.all()

    serializer_class = DoctorSerializer


# =========================
# APPOINTMENT VIEW
# =========================

class AppointmentView(generics.ListCreateAPIView):

    queryset = Appointment.objects.all()

    serializer_class = AppointmentSerializer