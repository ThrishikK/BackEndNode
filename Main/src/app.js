import express from "express";
import cors from "cors";

import algorithmRoutes from "./routes/algorithmRoutes.js";
import youtubeRoutes from "./routes/youtubeRoutes.js";
import { globalErrorHandler } from "./controllers/errorController.js";

const app = express();

app.use(cors());
app.use(express.json());

// app
app.use("/api/algorithms", algorithmRoutes);
app.use("/api/youtube-videos", youtubeRoutes);

app.use(globalErrorHandler);

export default app;
