import express from "express";

const app = express();
app.use(express.json());

// HOME
app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET ALL USERS
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ravi" },
    { id: 2, name: "Anil" },
  ]);
});

// GET USER BY ID (AUTO PARAM PARSING)
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// CREATE USER
app.post("/users", (req, res) => {
  res.send(`User created: ${req.body.name}`);
});

// 404 HANDLER
app.use((req, res) => {
  res.status(404).send("Route Not Found");
});

app.listen(3000);
