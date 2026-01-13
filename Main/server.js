import "./config/env.js";

import app from "./src/app.js";

const PORT = process.env.PORT;

// console.log(process.env.JWT_SECRET);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
