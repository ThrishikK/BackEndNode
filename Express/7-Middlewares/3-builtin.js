const express = require("express");
const app = express();

// app.use(express.json()); // for parsing application/json

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("user recieved");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
