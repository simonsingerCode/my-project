let path = require('path');
console.log(path.join(__dirname,'./b'));

console.log(path.resolve());


let EventEmitter = require('events');
let e = new EventEmitter;
