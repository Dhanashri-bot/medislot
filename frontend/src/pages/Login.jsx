import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // =========================
  // LOGIN FUNCTION
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATION
    if (!formData.username || !formData.password) {

      alert("Please fill all fields");

      return;
    }

    try {

      // API CALL
      const response = await axios.post(
        "https://dhanashri1201.pythonanywhere.com/api/login/",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      console.log(response.data);

      // SUCCESS MESSAGE
      alert("Login Successful");

      // STORE USERNAME IN LOCAL STORAGE
      localStorage.setItem(
        "username",
        formData.username
      );

      // REDIRECT TO DOCTORS PAGE
      navigate("/doctors");

    } catch (error) {

      console.log(error);

      // SHOW BACKEND ERROR
      if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {

        alert(error.response.data.error);

      } else {

        alert("Login failed");

      }
    }
  };

  return (

    <div style={container}>

      <div style={card}>

        <h1 style={title}>
          Patient Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            style={input}
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            style={input}
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" style={button}>
            Login
          </button>

        </form>

        <p style={text}>

          Don't have an account?

          <Link to="/register" style={link}>
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

// =========================
// STYLES
// =========================

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f1f5f9",
};

const card = {
  width: "350px",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const button = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const text = {
  textAlign: "center",
  marginTop: "15px",
};

const link = {
  marginLeft: "5px",
  color: "#2563eb",
  textDecoration: "none",
};

export default Login;