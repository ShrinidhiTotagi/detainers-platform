import React, { useState } from "react";
import {
  Box, Grid, Card, CardContent, Typography, Avatar,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, TablePagination, LinearProgress, IconButton, Tooltip, Button
} from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import {
  Menu as MenuIcon, Dashboard as DashboardIcon, Person as PersonIcon,
  Work as WorkIcon, MonetizationOn as MonetizationOnIcon, Notifications as NotificationsIcon,
  Logout as LogoutIcon
} from "@mui/icons-material";

// Mock Data
const cardData = [
  { title: "Total Users", value: 1240, icon: <PersonIcon fontSize="large" />, color: "#42a5f5", progress: 75 },
  { title: "Providers", value: 320, icon: <WorkIcon fontSize="large" />, color: "#66bb6a", progress: 60 },
  { title: "Services", value: 58, icon: <DashboardIcon fontSize="large" />, color: "#ab47bc", progress: 45 },
  { title: "Revenue", value: "$12,400", icon: <MonetizationOnIcon fontSize="large" />, color: "#ffa726", progress: 80 },
];

const lineData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1000 },
  { month: "May", users: 1200 },
];

const pieData = [
  { name: "Plumbing", value: 400 },
  { name: "Cleaning", value: 300 },
  { name: "Electrician", value: 300 },
  { name: "Carpentry", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const usersTableData = [
  { id: 1, name: "John Doe", email: "john@example.com", type: "User" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", type: "Provider" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", type: "Organization" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", type: "User" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com", type: "Provider" },
  { id: 6, name: "Eve White", email: "eve@example.com", type: "Organization" },
];

function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredUsers = usersTableData.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, height: "100vh", bgcolor: "#1976d2", color: "#fff", p: 2 }}>
        <Typography variant="h5" sx={{ mb: 4 }}>Admin Panel</Typography>
        {["Dashboard", "Users", "Services", "Reports", "Settings"].map((item) => (
          <Typography key={item} sx={{ mb: 2, p: 1, borderRadius: 1, "&:hover": { bgcolor: "#1565c0", cursor: "pointer" } }}>{item}</Typography>
        ))}
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3, bgcolor: "#f4f6f8", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Dashboard</Typography>

        {/* Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {cardData.map((card, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 }
              }}>
                <Avatar sx={{ bgcolor: "#fff", color: card.color, mr: 2 }}>{card.icon}</Avatar>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="h5">{card.value}</Typography>
                  <LinearProgress variant="determinate" value={card.progress} sx={{ mt: 1, height: 8, borderRadius: 5 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>User Growth</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ReTooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#1976d2" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Service Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Grid>
        </Grid>

        {/* Users Table */}
        <Card sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Users</Typography>
          <TextField
            label="Search Users"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Feedback</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.type}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">Give Feedback</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
          />
        </Card>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
