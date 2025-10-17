import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProviderProfile from "./pages/ProviderProfile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Public/User Routes with Navbar & Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:category" element={<ServiceCategory />} />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/provider/:id" element={<ProviderProfile />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
