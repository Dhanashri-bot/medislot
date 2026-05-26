from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Doctor, Appointment
from .serializers import DoctorSerializer, AppointmentSerializer


@api_view(['GET'])
def doctor_list(request):

    doctors = Doctor.objects.filter(available=True)

    serializer = DoctorSerializer(doctors, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def book_appointment(request):

    serializer = AppointmentSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Appointment booked successfully"
        })

    return Response(serializer.errors, status=400)
