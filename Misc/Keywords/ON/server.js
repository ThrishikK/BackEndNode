import http from "http";

const server = http.createServer((req, res) => {
  // Only handle POST request
  if (req.method === "POST") {
    let body = "";

    // 1️⃣ Fires when a chunk of data arrives
    req.on("data", (chunk) => {
      console.log("📦 Received chunk:", chunk);
      body += chunk.toString();
    });

    // 2️⃣ Fires when ALL data is received
    req.on("end", () => {
      console.log("✅ All data received");

      console.log("📄 Full body:", body);

      // Send response
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Data received successfully",
          receivedBody: body,
        })
      );
    });
  } else {
    // Handle non-POST requests
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Send a POST request to this server");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
