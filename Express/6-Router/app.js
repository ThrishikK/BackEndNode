import express from "express";
import usersRouter from "./routes/3-middleware.js";

const app = express();

app.use("/users", usersRouter);

app.listen(3000);
