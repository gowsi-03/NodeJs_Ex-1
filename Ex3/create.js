const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    fs.writeFile(
      "ukinode.txt",
      "Uki is a coding school by Yarl IT Hub, which offers a six months long intensive, in class training program that trains students to acquire skills needed to join tech companies as interns/ junior developers or become entrepreneurs.",
      (err, data) => {
        if (err) throw err;
      }
    );
    res.write("File Created Sucessfully");
    res.end();
  })
  .listen(3000);
