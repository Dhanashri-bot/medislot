import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div
      style={{
        padding: "20px",
        background: "black",
        color: "white",
        display: "flex",
        gap: "20px"
      }}
    >

      <Link
        to="/"
        style={{ color: "white" }}
      >
        Login
      </Link>

      <Link
        to="/doctors"
        style={{ color: "white" }}
      >
        Doctors
      </Link>

    </div>
  );
}