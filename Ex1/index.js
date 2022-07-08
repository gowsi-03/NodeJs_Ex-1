const http = require("http");
const math = require("./number");

http
  .createServer((req, res) => {
    console.log("Got a new request");
    res.write(`The sum of ${n1} and ${n2} is = ${sum}`);
    res.write(`\nThe average of 2 numbers = ${avg}`);
    res.end();
  })
  .listen(3000);
math.data(123, 321);
