from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Doctor, Appointment

from .serializers import (
    DoctorSerializer,
    AppointmentSerializer
)


# =========================
# REGISTER VIEW
# =========================

class RegisterView(generics.GenericAPIView):

    permission_classes = [AllowAny]

    def post(self, request):

        return Response(
            {
                "message": "User registered successfully"
            },
            status=201
        )


# =========================
# LOGIN VIEW
# =========================

class LoginView(generics.GenericAPIView):

    permission_classes = [AllowAny]

    def post(self, request):

        username = request.data.get("username")

        return Response(
            {
                "message": "Login successful",
                "username": username
            },
            status=200
        )


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