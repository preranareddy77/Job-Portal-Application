const applicationRoutes = require("./routes/applicationRoutes");
const jobRoutes = require("./routes/jobRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Job Portal Backend Running 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});