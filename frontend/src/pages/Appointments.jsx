import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Appointments() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    fetchAppointments();

  }, []);

  const fetchAppointments = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/appointments/"
      );

      setAppointments(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch appointments");

    }
  };

  return (

    <div>

      <Navbar />

      <div style={container}>

        <Sidebar />

        <div style={content}>

          <h1>My Appointments</h1>

          {appointments.length === 0 ? (

            <p>No Appointments Found</p>

          ) : (

            appointments.map((appointment) => (

              <div
                key={appointment.id}
                style={card}
              >

                <h3>
                  Patient:
                  {" "}
                  {appointment.patient_name}
                </h3>

                <p>
                  Doctor ID:
                  {" "}
                  {appointment.doctor}
                </p>

                <p>
                  Date:
                  {" "}
                  {appointment.appointment_date}
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

const container = {
  display: "flex",
};

const content = {
  flex: 1,
  padding: "30px",
  backgroundColor: "#f1f5f9",
  minHeight: "100vh",
};

const card = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

export default Appointments;