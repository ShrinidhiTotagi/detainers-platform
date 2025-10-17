import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceData } from "./data"; // ✅ Correct import

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[parseInt(id)];

  if (!service) return <p>Service not found.</p>;

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", paddingBottom: "50px" }}>
      {/* Back Button */}
      <div style={{ padding: "20px 40px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{ color: "#1976d2", border: "none", background: "none", cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#1976d2", marginBottom: "10px", fontSize: "2rem" }}>{service.name}</h1>
        <p style={{ color: "#555", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>{service.desc}</p>
      </div>

      {/* Providers */}
      <div style={{ padding: "0 40px" }}>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Available Service Providers</h2>
        <div style={{ display: "flex", overflowX: "auto", gap: "30px", paddingBottom: "30px", scrollSnapType: "x mandatory" }}>
          {service.providers.map((p) => (
            <div key={p.id} style={{ flex: "0 0 350px", background: "#fff", borderRadius: "16px", boxShadow: "0 6px 18px rgba(0,0,0,0.1)", padding: "25px", scrollSnapAlign: "center" }}>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img src={p.image} alt={p.name} style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", marginBottom: "10px", border: "3px solid #1976d2" }} />
                <h3>{p.name} {p.verified && <span style={{ color: "green" }}>✔️</span>}</h3>
                <p style={{ color: "#777", fontSize: "0.95rem" }}>{p.location}</p>
              </div>

              {/* Details */}
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <p style={{ fontWeight: "bold", color: "#1976d2" }}>{p.cost}</p>
                <p style={{ color: "#444" }}>⭐ {p.rating} | {p.completed} jobs completed</p>
              </div>

              {/* Explore Profile Button */}
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <button
                  onClick={() => navigate(`/provider/${p.id}`)}
                  style={{ background: "#ffa500", color: "white", border: "none", padding: "10px 25px", borderRadius: "8px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}
                >
                  Explore Profile
                </button>
              </div>

              {/* Book Now */}
              <div style={{ textAlign: "center" }}>
                <button
                  onClick={() => alert(`Booking ${p.name}'s service...`)}
                  style={{ background: "#1976d2", color: "white", border: "none", padding: "12px 30px", borderRadius: "8px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
