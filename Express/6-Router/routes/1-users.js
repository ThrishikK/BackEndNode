import { Router } from "express";
const router = Router();

// GET /users
router.get("/", (req, res) => {
  res.send("Get all users");
});

// POST /users
router.post("/", (req, res) => {
  res.send("Create a user");
});

// GET /users/:id
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

export default router;
