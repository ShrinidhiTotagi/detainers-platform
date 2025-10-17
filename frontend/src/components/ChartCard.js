import React from "react";
import { Line } from "react-chartjs-2";

function ChartCard({ title, data }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition">
      <h4 className="text-gray-500 mb-3">{title}</h4>
      <Line data={data} />
    </div>
  );
}

export default ChartCard;
