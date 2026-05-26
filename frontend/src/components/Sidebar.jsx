import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div style={sidebar}>

      <h2 style={title}>Menu</h2>

      <Link to="/dashboard" style={link}>
        Dashboard
      </Link>

      <Link to="/doctors" style={link}>
        Doctors
      </Link>

      <Link to="/appointments" style={link}>
        Appointments
      </Link>

      <Link to="/patients" style={link}>
        Patients
      </Link>

      <Link to="/prescriptions" style={link}>
        Prescriptions
      </Link>

    </div>
  );
}

const sidebar = {
  width: "220px",
  height: "100vh",
  backgroundColor: "#1e293b",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
};

const title = {
  marginBottom: "30px",
};

const link = {
  color: "white",
  textDecoration: "none",
  marginBottom: "20px",
  fontSize: "16px",
};

export default Sidebar;