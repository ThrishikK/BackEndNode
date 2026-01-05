const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // move to next middleware or route
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
