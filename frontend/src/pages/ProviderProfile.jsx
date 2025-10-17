import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceData } from "./data"; // import serviceData

function ProviderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Flatten providers
  let provider = null;
  Object.values(serviceData).forEach((service) => {
    const found = service.providers.find((p) => p.id === parseInt(id));
    if (found) provider = found;
  });

  if (!provider) return <p>Provider not found.</p>;

  return (
    <div style={{ padding: "30px", background: "#f4f6f9", minHeight: "100vh" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px", background: "none", border: "none", color: "#1976d2", cursor: "pointer", fontSize: "18px" }}
      >
        ← Back
      </button>

      <div style={{ background: "#fff", padding: "30px", borderRadius: "16px", maxWidth: "900px", margin: "auto" }}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <img src={provider.image} alt={provider.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", border: "3px solid #1976d2" }} />
          <div>
            <h2 style={{ margin: 0, color: "#1976d2" }}>{provider.name}</h2>
            <p style={{ color: "#555", margin: "5px 0" }}>{provider.location}</p>
            <p style={{ fontWeight: "bold", color: "#1976d2" }}>{provider.cost}</p>
            <p style={{ color: "#444" }}>⭐ {provider.rating} | {provider.completed} jobs completed</p>
          </div>
        </div>

        {/* Packages */}
        <h3>Packages</h3>
        {provider.details.packages.map((pkg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#f8f9fa", borderRadius: "8px", marginBottom: "8px" }}>
            <span>{pkg.type}</span>
            <span>⭐ {pkg.rating} ({pkg.reviews} reviews)</span>
            <span>{pkg.price}</span>
            <button style={{ background: "#1976d2", color: "white", border: "none", padding: "5px 12px", borderRadius: "5px", cursor: "pointer" }}>Add</button>
          </div>
        ))}

        {/* Process */}
        <h3 style={{ marginTop: "20px" }}>Our Process</h3>
        <ol>
          {provider.details.process.map((step, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{step}</li>
          ))}
        </ol>

        {/* Reviews */}
        <h3 style={{ marginTop: "20px" }}>Customer Reviews</h3>
        {provider.details.reviews.map((r, i) => (
          <div key={i} style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
            <strong>{r.user}</strong> <span style={{ color: "#777" }}>• {r.date}</span>
            <p>Rating: {r.rating}</p>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProviderProfile;
