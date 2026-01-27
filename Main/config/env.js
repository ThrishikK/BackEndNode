// config/env.js
import dotenv from "dotenv";
import path from "path";

const filepath = path.join(process.cwd(), "/.env");
// console.log("Env File path:", filepath);

dotenv.config({
  path: filepath,
});
