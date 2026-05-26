import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username");

  const handleLogout = () => {

    // REMOVE USER
    localStorage.removeItem("username");

    // GO LOGIN PAGE
    navigate("/");
  };

  return (

    <div style={navbar}>

      <h1 style={logo}>
        MediSlot
      </h1>

      <div style={rightSection}>

        <p>
          Welcome, {username}
        </p>

        <button
          style={button}
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

const navbar = {
  height: "70px",
  backgroundColor: "#2563eb",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 30px",
};

const logo = {
  fontSize: "32px",
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const button = {
  padding: "8px 15px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "#2563eb",
  cursor: "pointer",
};

export default Navbar;