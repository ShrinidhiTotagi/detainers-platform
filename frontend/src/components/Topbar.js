import React from "react";

function Topbar() {
  return (
    <div className="h-16 bg-white flex justify-between items-center px-5 shadow-md">
      <h3 className="text-lg font-semibold">Admin Panel</h3>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;
