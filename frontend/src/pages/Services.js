import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Home", icon: "🏠", description: "Plumbing, cleaning, repair, etc." },
  { id: 2, name: "Medical", icon: "💊", description: "Doctors, nurses, first-aid, etc." },
  { id: 3, name: "Women", icon: "💅", description: "Beauty, tailoring, babysitting, etc." },
  { id: 4, name: "Others", icon: "⚙️", description: "Miscellaneous services" },
];

function Services() {
  const navigate = useNavigate();
  return (
    <section style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px", padding:"30px" }}>
      {categories.map(cat => (
        <div key={cat.id} onClick={()=>navigate(`/services/${cat.name.toLowerCase()}`)}
          style={{ width:"250px", padding:"20px", border:"1px solid #ddd", borderRadius:"10px", background:"#f9f9f9", textAlign:"center", cursor:"pointer", transition:"0.3s" }}>
          <div style={{ fontSize:"3rem" }}>{cat.icon}</div>
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
