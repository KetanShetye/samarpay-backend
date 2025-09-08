const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req:any, res:any) => {
  res.send("Samarpay Backend is running on port 8000!");
});

app.get("/inital-commit", (req:any, res:any) => {
  res.send("initial-commit route added");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
