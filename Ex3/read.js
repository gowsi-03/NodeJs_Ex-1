const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    fs.readFile("./ukinode.txt", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
