import React from "react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className={`bg-white p-5 rounded-lg shadow-md flex items-center gap-4 hover:shadow-xl transition`}>
      <div className={`p-3 rounded-full text-white ${color}`}>{icon}</div>
      <div>
        <h4 className="text-gray-500">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
