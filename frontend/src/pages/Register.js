import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { login } = useContext(AuthContext); // ✅ log in after register
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    userType: "user",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if location is entered
    if (!form.location) {
      alert("Please enter your location");
      return;
    }

    // For now, register immediately logs in the user
    login(form);

    console.log("Registered:", form);
    navigate("/dashboard"); // redirect to dashboard
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#1976d2" }}>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          name="location"
          type="text"
          placeholder="City / Location"
          value={form.location}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          name="userType"
          value={form.userType}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="user">User</option>
          <option value="provider">Provider</option>
          <option value="organization">Organization</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
