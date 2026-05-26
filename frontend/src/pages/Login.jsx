import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://dhanashri1201.pythonanywhere.com/api/login/",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      alert(response.data.message);

      localStorage.setItem(
        "username",
        response.data.username
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login failed");

    }

  };

  return (

    <div style={container}>

      <div style={card}>

        <h1 style={title}>Patient Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={input}
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

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f4f7fb",
};

const card = {
  width: "350px",
  background: "white",
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