import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".jpg": "image/jpeg",
  };

  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("File not found");
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Node server running on port 3000");
});
