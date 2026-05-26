from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from .models import Doctor, Appointment

from .serializers import (
    RegisterSerializer,
    DoctorSerializer,
    AppointmentSerializer
)


# =========================
# REGISTER VIEW
# =========================

class RegisterView(generics.CreateAPIView):

    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():

            serializer.save()

            return Response(
                {"message": "User registered successfully"},
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# =========================
# LOGIN VIEW
# =========================

class LoginView(generics.GenericAPIView):

    permission_classes = [AllowAny]

    def post(self, request):

        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:

            return Response(
                {
                    "message": "Login successful",
                    "username": user.username
                },
                status=status.HTTP_200_OK
            )

        return Response(
            {"error": "Invalid username or password"},
            status=status.HTTP_401_UNAUTHORIZED
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