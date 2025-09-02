// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, this is my index.js server 🚀");
});

// Another route
app.get("/about", (req, res) => {
  res.json({ message: "This is the about route", author: "Sumit Awatade" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
