import express from "express";
import { permutations } from "../controllers/permutationsAndCombinations.js";
import { checkWordLength } from "../middlewares/Algomiddlewares/permAndCombinations.js";
import { createArray } from "../middlewares/Algomiddlewares/kadanes.js";
import { kadanesMaxArray } from "../controllers/kadanes.js";
import { delay } from "../middlewares/MiscMiddlewares/delay.js";

const router = express.Router();

router.post("/permutations", checkWordLength, permutations);

router.get("/kadanes/:arrayLength", delay(2000), createArray, kadanesMaxArray);

export default router;
