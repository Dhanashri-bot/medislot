from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Doctor, Appointment

User = get_user_model()


# =========================
# REGISTER SERIALIZER
# =========================

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        fields = [
            'id',
            'username',
            'email',
            'password'
        ]

        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        return user


# =========================
# DOCTOR SERIALIZER
# =========================

class DoctorSerializer(serializers.ModelSerializer):

    class Meta:

        model = Doctor

        fields = "__all__"


# =========================
# APPOINTMENT SERIALIZER
# =========================

class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:

        model = Appointment

        fields = "__all__"