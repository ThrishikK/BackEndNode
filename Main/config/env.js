// config/env.js
import dotenv from "dotenv";
import path from "path";

const filepath = path.join(process.cwd(), "/.env");
// console.log("Current working directory:", filepath);

dotenv.config({
  path: filepath,
});
