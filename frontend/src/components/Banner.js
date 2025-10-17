// components/Banner.js
import React, { useState } from "react";

function Banner() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${search}" near "${location}"`);
    // Here you can later integrate real search & filter logic
  };

  return (
    <div style={{
      height: "400px",
      background: "linear-gradient(to right, #42a5f5, #1976d2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "0 20px"
    }}>
      {/* 3D-Style Logo */}
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        marginBottom: "20px"
      }}>
        WorkLink
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Find trusted service providers within 3-5 km of your location
      </p>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: "flex", maxWidth: "600px", width: "100%" }}>
        <input
          type="text"
          placeholder="What service do you need?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 2,
            padding: "10px",
            borderRadius: "5px 0 0 5px",
            border: "none",
            outline: "none"
          }}
          required
        />
        <input
          type="text"
          placeholder="Your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            outline: "none"
          }}
          required
        />
        <button type="submit" style={{
          padding: "10px 20px",
          backgroundColor: "#ffc107",
          border: "none",
          borderRadius: "0 5px 5px 0",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Banner;
