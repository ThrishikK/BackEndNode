const express = require("express");
const app = express();

/**
 * ================================
 * BUILT-IN MIDDLEWARE
 * ================================
 * Parses:
 * application/x-www-form-urlencoded
 */
app.use(express.urlencoded({ extended: true }));

/**
 * ================================
 * ROUTES
 * ================================
 */

// Serve HTML form
app.get("/", (req, res) => {
  res.send(`
    <h2>Login Form</h2>
    <form method="POST" action="/login">
      <label>Email:</label><br/>
      <input type="email" name="email" /><br/><br/>

      <label>Password:</label><br/>
      <input type="password" name="password" /><br/><br/>

      <button type="submit">Login</button>
    </form>
  `);
});

// Handle form submission
app.post("/login", (req, res) => {
  console.log(req.body); // ✅ parsed form data

  res.send(`
    <h3>Form Data Received</h3>
    <p>Email: ${req.body.email}</p>
    <p>Password: ${req.body.password}</p>
  `);
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
