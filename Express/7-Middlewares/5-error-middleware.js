const express = require("express");
const app = express();

/**
 * ================================
 * NORMAL MIDDLEWARE
 * ================================
 */
app.use(express.json());

/**
 * ================================
 * ROUTES
 * ================================
 */

// Normal route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route that throws an error
app.get("/crash", (req, res) => {
  throw new Error("Something went wrong!");
});

// Route that passes error manually
app.get("/manual-error", (req, res, next) => {
  const err = new Error("Manual error triggered");
  err.statusCode = 400;
  next(err); // 👈 pass error to error middleware
});

/**
 * ================================
 * 404 HANDLER (NOT FOUND)
 * ================================
 */
app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.statusCode = 404;
  next(err);
});

/**
 * ================================
 * ERROR-HANDLING MIDDLEWARE
 * MUST HAVE 4 PARAMETERS
 * ================================
 */
app.use((err, req, res, next) => {
  console.error("💥 ERROR:", err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
});

/**
 * ================================
 * SERVER
 * ================================
 */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
