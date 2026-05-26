import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (

    <div>

      <Navbar />

      <div style={container}>

        <Sidebar />

        <div style={content}>

          <h1>Dashboard</h1>

          <div style={cardContainer}>

            <div style={card}>
              <h2>Total Doctors</h2>
              <p>15</p>
            </div>

            <div style={card}>
              <h2>Total Patients</h2>
              <p>120</p>
            </div>

            <div style={card}>
              <h2>Appointments</h2>
              <p>45</p>
            </div>

            <div style={card}>
              <h2>Revenue</h2>
              <p>₹25,000</p>
            </div>

          </div>

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

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

export default Dashboard;