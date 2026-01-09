import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { restrictTo } from "../middleware/restrictTo.js";
import {
  createPost,
  getAllPosts,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// Logged-in users can view posts
router.get("/", protect, getAllPosts);

// Admin-only routes
router.post("/", protect, restrictTo("admin"), createPost);
router.delete("/:id", protect, restrictTo("admin"), deletePost);

export default router;
