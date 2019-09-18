let Promise = require('./04-promise-then');

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();
    if (random < 0.5) {
      console.log(random);
      resolve(100);
    } else {
      console.log(random);
      reject(-100);
    }
  }, 1000);

  // throw new Error('Error');
});

let p2 = p1.then(result => {
  return result + 100;
}, reason => {
  return reason + 100;
});

p2.then(result => {
  console.log(result);
}, reason => {
  console.log(reason);
});

console.log(3);
