import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Rating,
  Modal,
  Checkbox,
  Stack
} from "@mui/material";

// Mock services data
const services = [
  {
    id: 1,
    name: "Plumbing",
    location: "Bangalore",
    category: "Home Maintenance",
    rating: 4.5,
    verified: true,
    providerType: "provider",
    jobsCompleted: 120,
    trustTags: ["Background Checked", "Top Rated"],
    reviews: [
      { user: "Alice", comment: "Great plumber!", rating: 5, image: "" },
      { user: "Bob", comment: "Professional service", rating: 4.5, image: "" }
    ]
  },
  {
    id: 2,
    name: "Electrician",
    location: "Mumbai",
    category: "Home Maintenance",
    rating: 4.2,
    verified: false,
    providerType: "provider",
    jobsCompleted: 80,
    trustTags: ["Top Rated"],
    reviews: []
  },
  {
    id: 3,
    name: "Yoga Trainer",
    location: "Delhi",
    category: "Personal Care",
    rating: 4.8,
    verified: true,
    providerType: "provider",
    jobsCompleted: 200,
    trustTags: ["Background Checked"],
    reviews: []
  },
  {
    id: 4,
    name: "Accounting",
    location: "Bangalore",
    category: "Business Services",
    rating: 4.3,
    verified: true,
    providerType: "organization",
    jobsCompleted: 50,
    trustTags: ["Top Rated"],
    reviews: []
  },
  {
    id: 5,
    name: "Cleaning",
    location: "Bangalore",
    category: "Home Maintenance",
    rating: 4.0,
    verified: false,
    providerType: "provider",
    jobsCompleted: 150,
    trustTags: [],
    reviews: []
  }
];

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState(user?.location || "");
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackImage, setFeedbackImage] = useState(null);

  if (!user) return <p style={{ padding: "40px" }}>Please login first.</p>;

  const handleLocationChange = (e) => {
    user.location = e.target.value;
    setLocationFilter(e.target.value);
  };

  const handleProviderSelect = (id) => {
    setSelectedProviders((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleBulkHire = () => {
    alert(`Hired ${selectedProviders.length} providers!`);
    setSelectedProviders([]);
  };

  const handleOpenFeedback = (service) => {
    setSelectedService(service);
    setOpenFeedback(true);
  };

  const handleCloseFeedback = () => {
    setOpenFeedback(false);
    setFeedbackRating(0);
    setFeedbackText("");
    setFeedbackImage(null);
  };

  const handleSubmitFeedback = () => {
    if (selectedService) {
      selectedService.reviews.push({
        user: user.name,
        comment: feedbackText,
        rating: feedbackRating,
        image: feedbackImage ? URL.createObjectURL(feedbackImage) : ""
      });
      alert("Feedback submitted!");
      handleCloseFeedback();
    }
  };

  // Filter services
  const filtered = services.filter((s) => {
    const matchesCategory = s.name.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesLocation = s.location.toLowerCase().includes(locationFilter.toLowerCase());

    if (user.userType === "user")
      return matchesCategory && matchesLocation && s.location.toLowerCase() === user.location.toLowerCase();
    if (user.userType === "provider")
      return matchesCategory && matchesLocation && s.providerType === "provider";
    if (user.userType === "organization")
      return matchesCategory && matchesLocation && s.providerType === "provider";
    if (user.userType === "admin")
      return matchesCategory && matchesLocation;

    return false;
  });

  return (
    <Box sx={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <Typography variant="h4" sx={{ color: "#1976d2", mb: 3 }}>
        Dashboard
      </Typography>

      {/* Profile Section */}
      <Box sx={{ mb: 4, p: 3, borderRadius: 2, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <Typography variant="h6">Profile</Typography>
        <Typography><strong>Name:</strong> {user.name}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography>
          <strong>Location:</strong>{" "}
          <input
            value={locationFilter}
            onChange={handleLocationChange}
            style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </Typography>
        <Typography><strong>User Type:</strong> {user.userType}</Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <input
          placeholder="Filter by service"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 }}
        />
        <input
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 }}
        />
      </Box>

      {/* Services Grid */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 3 }}>
        {filtered.length > 0 ? (
          filtered.map((s) => (
            <Card
              key={s.id}
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)" }
              }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="primary">
                    {s.name}{" "}
                    {s.verified && <span title="Verified Provider ✅" style={{ marginLeft: "6px", color: "green" }}>✔️</span>}
                  </Typography>
                  {user.userType === "organization" && (
                    <Checkbox
                      checked={selectedProviders.includes(s.id)}
                      onChange={() => handleProviderSelect(s.id)}
                    />
                  )}
                </Stack>

                <Typography>Category: {s.category}</Typography>
                <Typography>Location: {s.location}</Typography>
                <Typography>Jobs Completed: {s.jobsCompleted}</Typography>

                <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
                  {s.trustTags.map((tag, idx) => (
                    <Box key={idx} sx={{ bgcolor: "#e0f7fa", px: 1.5, py: 0.5, borderRadius: 1, fontSize: 12 }}>
                      {tag}
                    </Box>
                  ))}
                </Box>

                {/* <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating value={s.rating} precision={0.1} readOnly size="small" />
                  <Typography sx={{ ml: 1 }}>{s.rating.toFixed(1)} ⭐</Typography>
                </Box> */}

                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleOpenFeedback(s)}>
                  Give Feedback
                </Button>

                {/* Display reviews */}
                {s.reviews.map((r, idx) => (
                  <Box key={idx} sx={{ mt: 2, p: 1, border: "1px solid #ddd", borderRadius: 1 }}>
                    <Typography variant="body2"><strong>{r.user}:</strong> {r.comment}</Typography>
                    {r.image && <img src={r.image} alt="feedback" style={{ width: "100%", marginTop: "5px", borderRadius: "5px" }} />}
                    <Rating value={r.rating} readOnly size="small" precision={0.1} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No services found for your filters.</Typography>
        )}
      </Box>

      {/* Bulk Hire Button */}
      {user.userType === "organization" && selectedProviders.length > 0 && (
        <Button variant="contained" color="success" sx={{ mt: 3 }} onClick={handleBulkHire}>
          Hire Selected Providers
        </Button>
      )}

      {/* Feedback Modal */}
      <Modal open={openFeedback} onClose={handleCloseFeedback}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Feedback for {selectedService?.name}</Typography>
          <Rating
            value={feedbackRating}
            onChange={(e, val) => setFeedbackRating(val)}
          />
          <textarea
            placeholder="Write your feedback"
            rows={3}
            style={{ width: "100%", marginTop: "10px", padding: "5px" }}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFeedbackImage(e.target.files[0])}
            style={{ marginTop: "10px" }}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmitFeedback}>Submit</Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Dashboard;
