import http from "http";

const server = http.createServer((req, res) => {
  // 1. Status code
  res.statusCode = 200;

  // 2. Headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Node.js");

  // 3. JSON response (MANUAL)
  const user = {
    id: 42,
    name: "Ravi",
    role: "admin",
  };

  res.end(
    JSON.stringify({
      success: true,
      data: user,
    })
  );
});

server.listen(3000);
