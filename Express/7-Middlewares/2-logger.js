const express = require("express");
const app = express();

/**
 * ================================
 * LOGGER MIDDLEWARE
 * ================================
 * This middleware runs for EVERY request
 */
function loggerMiddleware(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);

  // IMPORTANT: pass control to next middleware / route
  next();
}

// Register logger middleware
app.use(loggerMiddleware);

/**
 * ================================
 * ROUTES
 * ================================
 */

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/login", (req, res) => {
  res.send("Login Route");
});

/**
 * ================================
 * SERVER
 * ================================
 */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
