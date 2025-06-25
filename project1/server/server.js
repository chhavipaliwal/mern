// jsut simply start the server not mongodb
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.send("Hello World");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
