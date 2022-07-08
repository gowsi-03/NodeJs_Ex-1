const http = require("http");
const upperCase = require("upper-case");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    res.write(
      "<h3>" +
        upperCase.upperCase("Uki is the best place to learn programming !") +
        "</h3>"
    );
    res.end();
  })
  .listen(3000);
