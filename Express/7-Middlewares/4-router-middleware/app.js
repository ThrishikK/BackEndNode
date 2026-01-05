const express = require("express");
const app = express();

// Import router
const userRouter = require("./routes/userRoutes");

// Mount router at /users
app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
