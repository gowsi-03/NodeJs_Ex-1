const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    let current = url.parse(req.url, true);
    let folder = "." + current.pathname;
    fs.readFile(folder, (err, data) => {
      if (err) {
        return res.end("<h1><center>" + `404 Not Found` + "</center></h1>");
      }
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
