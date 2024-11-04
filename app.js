const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");

  const url = req.url;
  if (req.method === "GET" && url == "/practice") {
    res.write("Practice is done!");
    res.end();
  } else {
    res.end("Welcome to Re:Coded's Backend Bootcamp!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
