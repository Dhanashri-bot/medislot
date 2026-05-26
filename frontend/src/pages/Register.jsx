import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post(
        "https://dhanashri1201.pythonanywhere.com/api/register/",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(response.data.message);

      navigate("/");

    } catch (error) {

      console.log(error);

      if (error.response && error.response.data) {

        alert(
          JSON.stringify(error.response.data)
        );

      } else {

        alert("Registration failed");

      }

    }

  };

  return (

    <div style={container}>

      <div style={card}>

        <h1 style={title}>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            style={input}
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            style={input}
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            style={input}
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            style={input}
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" style={button}>
            Register
          </button>

        </form>

        <p style={text}>

          Already have an account?

          <Link to="/" style={link}>
            Login
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

export default Register;