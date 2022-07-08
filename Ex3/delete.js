const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    fs.unlink("./ukinodejsexercise1.txt", (err, data) => {
      if (err) throw err;
    });
    res.write("File delete successfully");
    res.end();
  })
  .listen(3000);
