import { Router } from "express";
const router = Router();

router
  .route("/")
  .get((req, res) => res.send("Get users"))
  .post((req, res) => res.send("Create user"));

router
  .route("/:id")
  .get((req, res) => res.send("Get user"))
  .put((req, res) => res.send("Update user"))
  .delete((req, res) => res.send("Delete user"));

export default router;
