import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
  console.log("Users router middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("All users Details");
});

export default router;
