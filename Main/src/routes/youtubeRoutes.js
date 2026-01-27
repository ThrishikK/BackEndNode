import express from "express";
import { loadVideoDetails } from "../controllers/youtubeStats.js";

const router = express.Router();

router.post("/video-details", loadVideoDetails);

export default router;
