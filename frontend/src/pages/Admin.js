// pages/Admin.js
import React from "react";

const adminActions = [
  { name: "Manage Users", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", description: "Verify and monitor platform users." },
  { name: "Manage Providers", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", description: "Approve and manage service providers." },
  { name: "Manage Services", icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", description: "Add, remove or edit services offered on the platform." },
  { name: "View Complaints", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135712.png", description: "Monitor complaints and maintain platform integrity." },
  { name: "Contact Info", icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png", description: "View and update admin contact details." },
];

function AdminSection() {
  return (
    <section style={{ padding: "50px 20px", textAlign: "center", background: "#e3f2fd" }}>
      <h2 style={{ marginBottom: "40px" }}>Admin Panel Preview</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {adminActions.map((action, idx) => (
          <div key={idx} style={{
            width: "200px",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.transform="translateY(-5px)"}
          onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}
          >
            <img src={action.icon} alt={action.name} style={{ width: "50px", height: "50px", marginBottom: "15px" }} />
            <h4 style={{ marginBottom: "10px" }}>{action.name}</h4>
            <p style={{ fontSize: "0.85rem", color: "#555" }}>{action.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminSection;
