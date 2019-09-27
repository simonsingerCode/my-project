let fs = require('fs');

// 可写流，默认占用 16384=16k

let ws = fs.createWriteStream('./1.txt', {highWaterMark:1});
var flag = ws.write(1 + '');
console.log(flag);
var flag = ws.write(1 + '');
console.log(flag);
var flag = ws.write(1 + '');
console.log(flag);
var flag = ws.write(1 + '');
console.log(flag);
ws.on('drain', () => { // 当读入的文件全部写入后 就会回复读取
  console.log('吃饱了...');
})
