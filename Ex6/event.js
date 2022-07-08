const event = require("events");
const eventEmitter = new event.EventEmitter();

let handler = () => {
  console.log(`I bark when I see strangers !`);
};

eventEmitter.on("bark", handler);

eventEmitter.emit("bark");
