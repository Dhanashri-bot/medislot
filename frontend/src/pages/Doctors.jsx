import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Doctors() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    fetchDoctors();

  }, []);

  // =========================
  // FETCH DOCTORS
  // =========================

  const fetchDoctors = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/doctors/"
      );

      console.log("Doctors API:", response.data);

      // Handle both array and paginated response
      if (Array.isArray(response.data)) {

        setDoctors(response.data);

      } else if (response.data.results) {

        setDoctors(response.data.results);

      } else {

        setDoctors([]);

      }

    } catch (error) {

      console.log("Doctor Fetch Error:", error);

      alert("Failed to fetch doctors");

    }
  };

  // =========================
  // BOOK APPOINTMENT
  // =========================

  const bookAppointment = async (doctorId) => {

    // Get logged in username
    const patientName = localStorage.getItem("username");

    // Login check
    if (!patientName) {

      alert("Please login first");

      return;
    }

    // Appointment date
    const appointmentDate = prompt(
      "Enter appointment date (YYYY-MM-DD)"
    );

    // Cancel check
    if (!appointmentDate) {

      alert("Appointment date required");

      return;
    }

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/doctors/book/",
        {
          doctor: doctorId,
          patient_name: patientName,
          appointment_date: appointmentDate,
        }
      );

      console.log("Booking Response:", response.data);

      alert("Appointment Booked Successfully");

    } catch (error) {

      console.log("Booking Error:", error);

      // Show backend error properly
      if (error.response) {

        console.log(error.response.data);

        alert(
          JSON.stringify(error.response.data)
        );

      } else {

        alert("Booking failed");

      }
    }
  };

  return (

    <div>

      <Navbar />

      <div style={container}>

        <Sidebar />

        <div style={content}>

          <h1 style={heading}>
            Doctors
          </h1>

          <div style={doctorContainer}>

            {doctors.length > 0 ? (

              doctors.map((doctor) => (

                <div
                  key={doctor.id}
                  style={doctorCard}
                >

                  <h2>
                    {doctor.name}
                  </h2>

                  <p>
                    <strong>
                      Specialization:
                    </strong>{" "}
                    {doctor.specialization}
                  </p>

                  <p>
                    <strong>
                      Experience:
                    </strong>{" "}
                    {doctor.experience} Years
                  </p>

                  <p>
                    <strong>
                      Consultation Fee:
                    </strong>{" "}
                    ₹{doctor.fee}
                  </p>

                  <button
                    style={button}
                    onClick={() =>
                      bookAppointment(
                        doctor.id
                      )
                    }
                  >
                    Book Appointment
                  </button>

                </div>

              ))

            ) : (

              <h3>
                No Doctors Found
              </h3>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

// =========================
// STYLES
// =========================

const container = {
  display: "flex",
};

const content = {
  flex: 1,
  padding: "30px",
  backgroundColor: "#f1f5f9",
  minHeight: "100vh",
};

const heading = {
  marginBottom: "20px",
  fontSize: "40px",
};

const doctorContainer = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const doctorCard = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 10px rgba(0,0,0,0.1)",
};

const button = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "15px",
};

export default Doctors;