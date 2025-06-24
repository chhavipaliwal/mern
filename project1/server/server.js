// const http = require("http"); //call all the http services
// const server = http.createServer((req, res) => {
//   res.send("Hello from the server!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// const http = require("http"); //call all the http services
// const fs = require("fs"); //file system module to read files
//utf-8: we can convert the buffer thing into human readable language

// const server = http.createServer((req, res) => {
//   fs.readFile("data.txt", "utf-8", (err, data) => {
//     if (err) {
//       res.writeHead(500, { "content-Type": "text/plain" });
//       res.end("Error reading file");
//     }
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(data);
//   });
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
