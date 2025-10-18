import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // <-- import navigate
import { AuthContext } from "../context/AuthContext";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const mainCategories = [
  {
    name: "Home Maintenance",
    key: "home-improvement",
    desc: "🛠️ Plumbing, Electrical, Painting, Cleaning & more.",
    image: "/assets/home-improvement.jpg",
    location: "Bangalore",
    servicesAvailable: 120,
    verified: true,
    category: "Home Maintenance",
  },
  {
    name: "Home Health Care",
    key: "home-health-care",
    desc: "💉 Skilled Nursing, Personal Care, Therapy & more.",
    image: "/assets/home-health-care.jpg",
    location: "Delhi",
    servicesAvailable: 80,
    verified: true,
    category: "Personal Care",
  },
  {
    name: "Business Services (B2B)",
    key: "business-services",
    desc: "💼 IT, HR, Accounting, Marketing, Logistics & more.",
    image: "/assets/business-services.jpg",
    location: "Bangalore",
    servicesAvailable: 50,
    verified: false,
    category: "Business Services",
  },
  {
    name: "Personal Services",
    key: "personal-services",
    desc: "💅 Beauty, Fitness, Childcare, Pet Care & more.",
    image: "/assets/personal-services.jpg",
    location: "Mumbai",
    servicesAvailable: 60,
    verified: true,
    category: "Personal Care",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // <-- initialize navigate

  const filteredCategories = mainCategories.filter((cat) => {
    return (
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.location.toLowerCase().includes(search.toLowerCase()) ||
      cat.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* 🌊 Animated Banner Section */}
      <motion.div
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Animated Blue Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%", filter: "brightness(0.9)" }}
        />

        <div className="absolute inset-0 bg-black/30"></div>

        {/* Banner Text */}
        <motion.div
          className="relative z-10 p-6 text-white max-w-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            💎 Premium Services at Your Doorstep
          </h1>
          <p className="text-lg mb-6 text-blue-100">
            Book trusted professionals for all your needs — fast, safe, and reliable ⚡
          </p>

          <motion.input
            type="text"
            placeholder="🔍 Search for services, categories or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[400px] px-5 py-3 rounded-full border-none outline-none shadow-lg text-gray-800"
            whileFocus={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>

      {/* ⚡ Category Cards Section */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9)",
          padding: "60px 5%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            width: "100%",
          }}
        >
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div
                key={cat.key}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#1976d2", fontSize: "1.2rem", fontWeight: "bold" }}>
                    {cat.name}
                  </h3>
                  <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "8px" }}>
                    {cat.desc}
                  </p>
                  <p style={{ color: "#1976d2", fontWeight: "600" }}>
                    {cat.servicesAvailable}+ services available
                  </p>

                  {/* Book Now Button navigates to category page */}
                  <button
                    onClick={() => navigate(`/services/${cat.key}`)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 16px",
                      backgroundColor: "#1976d2",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#0d47a1")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#1976d2")}
                  >
                    Explore Services
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#444", gridColumn: "1/-1" }}>
              No services found for "{search}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
