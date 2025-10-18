import React, { useState, useEffect } from "react";

function Banner() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [gradientPos, setGradientPos] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${search}" near "${location}"`);
  };

  // Animate gradient
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "420px",
        background: `linear-gradient(-45deg,
          #42a5f5,
          #5c6bc0,
          #26c6da,
          #1976d2)`,
        backgroundSize: "400% 400%",
        backgroundPosition: `${gradientPos}% 50%`,
        transition: "background-position 0.5s linear",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
        margin: "20px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      }}
    >
      {/* Floating Emojis */}
      {["🛠️", "🧹", "💡", "🔧", "⚡"].map((emoji, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            fontSize: "2rem",
            opacity: 0.8,
            animation: `float${index} 8s ease-in-out infinite`,
          }}
        >
          {emoji}
        </span>
      ))}

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          marginBottom: "20px",
        }}
      >
        WorkLink
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Find trusted service providers within <b>3–5 km</b> of your location 🏠
      </p>

      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          maxWidth: "600px",
          width: "90%",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "10px",
          backdropFilter: "blur(6px)",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="What service do you need?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 2,
            padding: "12px 15px",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "white",
            fontSize: "1rem",
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
            padding: "12px 15px",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "white",
            fontSize: "1rem",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "12px 25px",
            backgroundColor: "#ffc107",
            color: "#333",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Search 🔍
        </button>
      </form>

      <style>{`
        @keyframes float0 { 
          0%, 100% { transform: translate(20px, -10px); } 
          50% { transform: translate(20px, -25px); } 
        }
        @keyframes float1 { 
          0%, 100% { transform: translate(-10px, 10px); } 
          50% { transform: translate(-10px, -15px); } 
        }
        @keyframes float2 { 
          0%, 100% { transform: translate(0, 0); } 
          50% { transform: translate(0, -20px); } 
        }
        @keyframes float3 { 
          0%, 100% { transform: translate(10px, 10px); } 
          50% { transform: translate(10px, -15px); } 
        }
        @keyframes float4 { 
          0%, 100% { transform: translate(-15px, 0); } 
          50% { transform: translate(-15px, -25px); } 
        }
      `}</style>
    </div>
  );
}

export default Banner;
