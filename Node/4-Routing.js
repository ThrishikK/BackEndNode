import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // HOME
  if (method === "GET" && path === "/") {
    res.end("Home Page");
  }

  // GET ALL USERS
  else if (method === "GET" && path === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify([
        { id: 1, name: "Ravi" },
        { id: 2, name: "Anil" },
      ])
    );
  }

  // GET USER BY ID (MANUAL PARAM PARSING)
  else if (method === "GET" && path.startsWith("/users/")) {
    const id = path.split("/")[2]; // /users/42
    res.end(`User ID: ${id}`);
  }

  // CREATE USER
  else if (method === "POST" && path === "/users") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const user = JSON.parse(body);
      res.end(`User created: ${user.name}`);
    });
  }

  // 404
  else {
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

server.listen(3000);
