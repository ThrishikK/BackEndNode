import express from "express";

const app = express();

// Serve static files
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});
