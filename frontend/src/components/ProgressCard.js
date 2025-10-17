import React from "react";

function ProgressCard({ title, progress, color }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition">
      <h4 className="text-gray-500">{title}</h4>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div className={`${color} h-4 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{progress}% Completed</p>
    </div>
  );
}

export default ProgressCard;
