import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginUser = async () => {

    const res = await axios.post(
      "https://dhanashri1201.pythonanywhere.com/api/login/",
      data
    );

    localStorage.setItem("token", res.data.access);

    navigate("/doctors");
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>MediSlot Login</h1>

      <input
        placeholder="Username"
        onChange={(e) =>
          setData({
            ...data,
            username: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({
            ...data,
            password: e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>

    </div>
  );
}