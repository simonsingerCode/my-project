// 流---> 可读流 和 可写流

// 文件读写的特点：
// 流： 是可以边读边写的
let fs = require('fs');

// highWaterMark 最高水位线--> 每次能读取到少，默认为64K，不许更改
// 读取文件 默认是 buffer 类型的
let rs = fs.createReadStream('01.txt');

// 读取文件：是基于事件的，需要监听事件  数据到来的事件 fs.emit('data',读取的内容);
// 默认叫非流动模式，我们开听了data 事件，就是流动模式
// 默认data事件不停的触发，直到文件中的数据全部读取出来
let arr = [];
rs.on('data', chunk => {
  arr.push(chunk);
})
// console.log(rs);

rs.on('end', () => {
  console.log(Buffer.concat(arr).toString());
  console.log('end...');
})


rs.on('err', err => {
  console.log('文件不存在...');
})
