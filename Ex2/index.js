const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Got a new request");
  const data = (name) => {
    res.write(`Welcome to Uki. I am ${name}`);
  };
  data("Rolex !!");
  res.end();
});

server.listen(8080);
