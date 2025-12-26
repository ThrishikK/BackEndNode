import express from "express";

const app = express();

app.get("/users/:id", (req, res) => {
  const user = {
    id: req.params.id,
    name: "Ravi",
    role: "admin",
  };

  // 1️⃣ Status + JSON in one chain
  res.status(200).set("X-Powered-By", "Express").json({
    success: true,
    data: user,
  });
});

app.listen(3000);
