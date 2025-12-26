import express from "express";

const app = express();
app.use(express.json());

app.post("/users/:id", (req, res) => {
  // 1. HTTP method
  console.log("METHOD:", req.method);

  // 2. Path
  console.log("PATH:", req.path);

  // 3. Route params
  console.log("PARAMS:", req.params); // { id: '42' }

  // 4. Query params
  console.log("QUERY:", req.query); // { role: 'admin' }

  // 5. Headers
  console.log("HEADERS:", req.headers);

  // 6. Body
  console.log("BODY:", req.body); // { name: 'Ravi', age: 25 }

  res.json({ status: "success" });
});

app.listen(3000);
