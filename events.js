const http = require("http");

const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
// Observer
myEmitter.on("newSale", () => {
  console.log("There was a new sale.");
});
// Observer
myEmitter.on("newSale", () => {
  console.log("Customer name: John");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in the stock!`);
});

myEmitter.emit("newSale", 9); //emits event

/////////////////
//////////////////

////////////////
////////////////

//////////////////
////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("Another Request Received");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request");
});
