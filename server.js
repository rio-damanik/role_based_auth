const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// User routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
