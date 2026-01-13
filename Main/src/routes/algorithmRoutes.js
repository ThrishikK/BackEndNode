import express from "express";
import { permutations } from "../controllers/permutationsAndCombinations.js";
import { checkWordLength } from "../middlewares/Algomiddlewares/permAndCombinations.js";

const router = express.Router();

router.post("/permutations", checkWordLength, permutations);

export default router;
