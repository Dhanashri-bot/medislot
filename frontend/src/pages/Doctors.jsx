import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Doctors() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {

    const res = await axios.get(
      "http://127.0.0.1:8000/api/doctors/"
    );

    setDoctors(res.data);
  };

  return (
    <>

      <Navbar />

      <div
        style={{
          padding: "40px",
          backgroundColor: "#f4f7fb",
          minHeight: "100vh"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#222",
            fontSize: "40px"
          }}
        >
          Doctors List
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}
        >

          {doctors.map((doc) => (

            <div
              key={doc.id}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >

              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#007bff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px"
                }}
              >
                👨‍⚕️
              </div>

              <h2
                style={{
                  color: "#222",
                  marginBottom: "10px"
                }}
              >
                {doc.specialization}
              </h2>

              <p
                style={{
                  color: "#555",
                  fontSize: "18px",
                  marginBottom: "20px"
                }}
              >
                Consultation Fee: ₹{doc.fee}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Book Appointment
              </button>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}