import express from "express";
import { signup, login, profile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { restrictTo } from "../middleware/restrictTo.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
// Accessible to logged-in users
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user,
  });
});

// Admin only
router.get("/admin", protect, restrictTo("admin"), (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});
export default router;
