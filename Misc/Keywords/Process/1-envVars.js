// Load environment variables
const dotenv = require("dotenv");
dotenv.config(); // loads .env file into process.env

const express = require("express");
const app = express();

// Access environment variables
const port = process.env.PORT;
const secret = process.env.JWT_SECRET;
const dbPassword = process.env.DATABASE_PASSWORD;
const mode = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send({
    message: "Environment Variables Example",
    port: port,
    secret: secret,
    dbPassword: dbPassword,
    environment: mode,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
  console.log("JWT Secret:", secret);
  console.log("DB Password:", dbPassword);
  console.log("Mode:", mode);
});
