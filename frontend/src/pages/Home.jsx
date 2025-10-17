import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaCheckCircle } from "react-icons/fa";

const mainCategories = [
  {
    name: "Home Improvement & Maintenance",
    key: "home-improvement",
    desc: "Plumbing, Electrical, Painting, Cleaning & more.",
    image: "/assets/home-improvement.jpg",
    location: "Bangalore",
    servicesAvailable: 120,
    verified: true,
    category: "Home Maintenance",
  },
  {
    name: "Home Health Care",
    key: "home-health-care",
    desc: "Skilled Nursing, Personal Care, Therapy & more.",
    image: "/assets/home-health-care.jpg",
    location: "Delhi",
    servicesAvailable: 80,
    verified: true,
    category: "Personal Care",
  },
  {
    name: "Business Services (B2B)",
    key: "business-services",
    desc: "IT, HR, Accounting, Marketing, Logistics & more.",
    image: "/assets/business-services.jpg",
    location: "Bangalore",
    servicesAvailable: 50,
    verified: false,
    category: "Business Services",
  },
  {
    name: "Personal Services",
    key: "personal-services",
    desc: "Beauty, Fitness, Childcare, Pet Care & more.",
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

  const filteredCategories = mainCategories.filter((cat) => {
    return (
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.location.toLowerCase().includes(search.toLowerCase()) ||
      cat.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center min-h-[50vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/assets/banner.webp')" }}
      >
        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 p-5 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 animate-fadeIn">
            Trusted Services at Your Doorstep
          </h1>
          <p className="text-gray-800 text-lg mb-6 animate-fadeIn">
            Book expert professionals for all your daily needs <br />
            fast, safe, and reliable.
          </p>
          {/* Unified search bar */}
          <input
            type="text"
            placeholder="Search for services, categories or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[400px] px-5 py-3 rounded-full border-none outline-none shadow-lg text-gray-700 focus:shadow-xl transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="grid gap-6 p-10 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <Link key={cat.key} to={`/services/${cat.key}`} className="no-underline">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer relative group">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Verified icon */}
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  {cat.verified && (
                    <FaCheckCircle className="text-blue-500" title="Verified Provider" />
                  )}
                </div>

                {/* Recommended tag */}
                {user && cat.location.toLowerCase() === user.location?.toLowerCase() && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <div className="p-5 text-center">
                  <h3 className="text-blue-600 font-semibold mb-1">{cat.name}</h3>
                  <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mb-2">
                    {cat.category}
                  </span>
                  <p className="text-gray-600 text-sm mb-2">{cat.desc}</p>
                  <p className="text-gray-400 text-xs mb-1">Location: {cat.location}</p>
                  <p className="text-gray-500 text-sm">
                    {cat.servicesAvailable}+ services available
                  </p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No services found for "{search}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
