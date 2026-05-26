from django.db import models


class Doctor(models.Model):

    name = models.CharField(max_length=100)

    specialization = models.CharField(max_length=100)

    experience = models.IntegerField()

    fee = models.IntegerField()

    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):

    patient_name = models.CharField(max_length=100)

    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.CASCADE
    )

    appointment_date = models.DateField()

    status = models.CharField(
        max_length=20,
        default='Pending'
    )

    def __str__(self):
        return f"{self.patient_name} - {self.doctor.name}"