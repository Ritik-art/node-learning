const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('switch off motor!');
  setTimeout(() => {
    console.log('reminder off motor!');
  }, 3000);
});
myEmitter.emit('waterfull');