const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    fs.rename("./ukinode.txt",'ukinodejsexercise1.txt',(err, data) => {
      if (err) throw err;
     
    });
    res.write('Rename successfully');
    res.end();
  })
  .listen(3000);
