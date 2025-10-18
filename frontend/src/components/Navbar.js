import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // demo toggle

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          WorkLink
        </Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Home
        </Link>
        <Link
          to="/services/explorer"
          className={location.pathname === "/services/explorer" ? "active-link" : ""}
        >
          Services
        </Link>
        {/* <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active-link" : ""}
        >
          Dashboard
        </Link> */}
      </div>

      <div className="navbar-buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn-register">Register</button>
            </Link>
          </>
        ) : (
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
