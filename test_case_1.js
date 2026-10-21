const createHelloWorld = require('./solution');

const hello = createHelloWorld();

console.log(hello());           // Hello World
console.log(hello({}, null, 42)); // Hello World