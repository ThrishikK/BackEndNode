import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  // 1. HTTP method
  console.log("METHOD:", req.method);

  // 2. Raw URL
  console.log("RAW URL:", req.url);

  // 3. Parse URL & query params
  const parsedUrl = url.parse(req.url, true);
  console.log("PATH:", parsedUrl.pathname);
  console.log("QUERY:", parsedUrl.query); // { role: 'admin' }

  // 4. Headers
  console.log("HEADERS:", req.headers);

  // 5. Route params (MANUAL)
  const pathParts = parsedUrl.pathname.split("/");
  const userId = pathParts[2]; // /users/42
  console.log("USER ID:", userId);

  // 6. Body (STREAM handling)
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    console.log("BODY:", data); // { name: 'Ravi', age: 25 }

    res.end("OK");
  });
});

server.listen(3000);
