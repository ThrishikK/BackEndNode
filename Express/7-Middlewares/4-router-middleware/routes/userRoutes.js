const express = require("express");
const router = express.Router();
/**
 * ================================
 * ROUTER-LEVEL MIDDLEWARE
 * ================================
 * Runs ONLY for routes in this router
 */
router.use((req, res, next) => {
  console.log("User Router Middleware executed");
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});
/**
 * ================================
 * ROUTES
 * ================================
 */

// GET /users/profile
router.get("/profile", (req, res) => {
  res.send("User Profile Page");
});

// GET /users/settings
router.get("/settings", (req, res) => {
  res.send("User Settings Page");
});

module.exports = router;
