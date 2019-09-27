let fs = require('fs');
let { promisify } = require('util')
// let read = promisify(readFile);

// fs.writeFile('1.txt', '{name:"simon",age:30}', result => {
//   console.log(result);
// });


// function copySync(source, target) { // readFileSync  writeFileSync
//   let result = fs.readFileSync(source);
//   fs.writeFileSync(target, result);
// }
// copySync('1.txt', '2.txt');


function copyAsync(source,target,callback) { // readFile  writeFile
  fs.readFile(source, (err, data) => {
    if (err) return callback(err);
    fs.writeFile(target,data, callback)
  })
}
copyAsync('1.txt', '2.txt', (err) => {
  console.log('successful copy...');
})
