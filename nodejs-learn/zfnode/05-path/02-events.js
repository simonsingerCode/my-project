let EventEmitter = require('events');
let { inherits } = require('util');

function Girl() { };

let girl = new Girl();

inherits(Girl, EventEmitter);

girl.on('shilian', (param) => {
  console.log('is crying..., and '+ param);
});
girl.on('shilian', (param) => {
  console.log('is eating..., and ' + param);
});

girl.emit('shilian','She')
