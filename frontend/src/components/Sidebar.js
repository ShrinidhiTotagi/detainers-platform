import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-56 bg-gray-800 text-white min-h-screen flex flex-col pt-5">
      <h2 className="text-center text-2xl font-bold mb-8">Admin</h2>
      <nav className="flex flex-col gap-2 px-4">
        <Link
          to="/admin"
          className="py-3 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/users"
          className="py-3 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          Users
        </Link>
        <Link
          to="/admin/services"
          className="py-3 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          Services
        </Link>
        <Link
          to="/admin/settings"
          className="py-3 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
