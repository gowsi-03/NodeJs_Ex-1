const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    fs.appendFile("./ukinode.txt", " Stepping Stone.", (err, data) => {
      if (err) throw err;
    });
    res.write("File is up to date");
    res.end();
  })
  .listen(3000);
