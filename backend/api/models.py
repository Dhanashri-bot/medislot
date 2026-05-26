from django.db import models


class Doctor(models.Model):

    name = models.CharField(max_length=100)

    specialization = models.CharField(max_length=100)

    experience = models.IntegerField()

    fee = models.IntegerField()

    def __str__(self):

        return self.name


class Appointment(models.Model):

    patient_name = models.CharField(max_length=100)

    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.CASCADE
    )

    appointment_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.patient_name