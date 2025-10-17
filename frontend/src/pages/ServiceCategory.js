import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const allServices = {
  "home-improvement": [
    { id: 1, name: "Plumbing & Electrical", desc: "Installation, repair, and maintenance of water and electrical systems.", price: "₹500", icon: "🔧" },
    { id: 2, name: "HVAC Services", desc: "Heating, ventilation, and air conditioning.", price: "₹800", icon: "❄️" },
    { id: 3, name: "Cleaning Services", desc: "Regular, deep, or specialized cleaning.", price: "₹400", icon: "🧹" },
    { id: 4, name: "Painting & Carpentry", desc: "Interior/exterior painting and woodwork.", price: "₹700", icon: "🎨" },
  ],
  "home-health-care": [
    { id: 10, name: "Skilled Nursing", desc: "Medical care by a licensed nurse.", price: "₹1000", icon: "🏥" },
    { id: 11, name: "Personal Care", desc: "Assistance with bathing, dressing, and grooming.", price: "₹800", icon: "🛁" },
  ],
  "business-services": [
    { id: 20, name: "IT Services", desc: "Software, hardware, network, cybersecurity support.", price: "₹1800", icon: "💻" },
    { id: 21, name: "Accounting & Finance", desc: "Banking, tax, bookkeeping, payroll.", price: "₹1500", icon: "📊" },
  ],
  "personal-services": [
    { id: 30, name: "Beauty & Lifestyle", desc: "Hair, makeup, nails, personal shopping.", price: "₹700", icon: "💇‍♀️" },
    { id: 31, name: "Health & Wellness", desc: "Fitness training, yoga, nutrition.", price: "₹800", icon: "🧘‍♀️" },
  ],
};

function ServiceCategory() {
  const { category } = useParams();
  const services = allServices[category] || [];
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px", minHeight: "100vh", background: "#f8f9fa" }}>
      <h2 style={{ marginBottom: "30px", color: "#1976d2" }}>
        {category.replace("-", " ").toUpperCase()}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => navigate(`/service/${s.id}`)}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>{s.icon}</div>
            <h3 style={{ marginBottom: "10px", color: "#1976d2" }}>{s.name}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{s.desc}</p>
            <p style={{ fontWeight: "bold", color: "#007bff", marginTop: "10px" }}>{s.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCategory;
