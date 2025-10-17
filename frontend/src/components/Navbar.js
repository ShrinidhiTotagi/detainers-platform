import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 30px",
        backgroundColor: "#1976d2",
        color: "white",
        flexWrap: "wrap",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          WorkLink
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Home
        </Link>
        <Link
          to="/services"
          style={{
            color: location.pathname === "/services" ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Services
        </Link>
        <Link
          to="/dashboard"
          style={{
            color: location.pathname === "/dashboard" ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Dashboard
        </Link>
      </div>

      <div>
        <Link to="/login">
          <button
            style={{
              marginLeft: "10px",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "#4caf50",
              color: "white",
            }}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            style={{
              marginLeft: "10px",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "#ffc107",
              color: "black",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
