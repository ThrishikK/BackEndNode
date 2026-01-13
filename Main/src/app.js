import express from "express";
import cors from "cors";

import algorithmRoutes from "./routes/algorithmRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// app
app.use("/api/algorithms", algorithmRoutes);

export default app;
