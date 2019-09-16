
let { readFile } = require('./utils/fsPromise');


readFile('package.json').then(result => {
  console.log(result);
})
