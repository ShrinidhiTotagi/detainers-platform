import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#f1f1f1",
        padding: "40px",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <h4>Company</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>About us</li>
            <li>Investor Relations</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>For Customers</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>UC Reviews</li>
            <li>Categories near you</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4>For Professionals</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Register as a professional</li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: "20px", fontSize: "0.8rem" }}>
        © 2025 WorkLink. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
