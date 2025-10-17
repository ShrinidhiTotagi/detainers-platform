import React from "react";

const admins = [
  { name: "Rutuja Jirage", email: "admin1@example.com", phone: "+91 99999 11111" },
  { name: "John Doe", email: "admin2@example.com", phone: "+91 88888 22222" },
];

function AdminContacts() {
  return (
    <section>
      <h2>Admin Contacts</h2>
      <div className="card-container">
        {admins.map(a => (
          <div className="card" key={a.email}>
            <h3>{a.name}</h3>
            <p>Email: {a.email}</p>
            <p>Phone: {a.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminContacts;
