let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);


// fs.readFile('2.txt', 'utf8', function(err, result){
//   if (err) return console.log(err);
//   fs.readFile(result.toString().slice(0,5), 'utf8', function(err, data) {
//     if(err) return console.log(err);
//     console.log(data);
//   })
// })


// read('./1.txt', 'utf8').then(data => {
//   return read(data.toString().slice(0,5), 'utf8');
// }).then(data => {
//   console.log();
//   return read(data.toString().slice(0, 5), 'utf8');
// }).then(data => {
//   console.log(data);

// }).catch(err => {
//   console.log(err);
// })


// async function result() {
//   let content1 = await read('1.txt', 'utf8');
//   let content2 = await read('2.txt', 'utf8');
//   let content3 = await read('3.txt', 'utf8');
//   let str = content1 + content2 + content3;
//   console.log(str);
// }

// result()


let school = {};
// let result1 = read('4.txt', 'utf8').then(data => {
//   school.name = data;
// }, err => { });
// let result2 = read('5.txt', 'utf8').then(data => {
//   school.age = data;
// }, err => { });


// Promise.all([read('4.txt', 'utf8'), read('5.txt', 'utf8')]).then(data => {
//   console.log(data);
// }).catch (err=> {
//   console.log(err);
// })


async function result() {
  let [name, age] = await Promise.all([read('4.txt', 'utf8'), read('5.txt', 'utf8')]);
  console.log(name,age);
}

result()
