import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingForm({ provider, service, onClose }) {
  const [formData, setFormData] = useState({
    scheduledTime: "",
    paymentMethod: "cash",
    totalAmount: service?.defaultCost || "", // pre-fill from service
    address: "",
    lat: "",
    lng: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Update totalAmount dynamically based on selected provider
    if (provider) {
      setFormData((prev) => ({
        ...prev,
        totalAmount: provider.cost.split(" - ")[0], // take the starting price
      }));
    }
  }, [provider]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("/api/bookings", {
        providerId: provider.id,
        serviceId: service.id,
        scheduledTime: formData.scheduledTime,
        paymentMethod: formData.paymentMethod,
        totalAmount: formData.totalAmount,
        location: {
          address: formData.address,
          coordinates: {
            lat: parseFloat(formData.lat),
            lng: parseFloat(formData.lng),
          },
        },
      });

      setSuccess("Booking successful!");
      setFormData({
        scheduledTime: "",
        paymentMethod: "cash",
        totalAmount: provider.cost.split(" - ")[0],
        address: "",
        lat: "",
        lng: "",
      });

      onClose(); // close modal
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Book {provider.name}'s Service
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Scheduled Time</label>
            <input
              type="datetime-local"
              name="scheduledTime"
              value={formData.scheduledTime}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="cash">Cash</option>
              <option value="wallet">Wallet</option>
              <option value="online">Online</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
              placeholder="₹"
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="flex gap-2">
            <input
              type="number"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              required
              placeholder="Latitude"
              className="w-1/2 border p-2 rounded"
            />
            <input
              type="number"
              name="lng"
              value={formData.lng}
              onChange={handleChange}
              required
              placeholder="Longitude"
              className="w-1/2 border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
