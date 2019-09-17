let fs = require('fs');
let { readFile, readdir,writeFile } = require('./utils/fsPromise');

// 合并压缩 css 文件 思路：
console.log(readdir);

// 1. 先把所有的 css 文件读取出来
readdir('less').then(result => {
  return result.filter(item => /\.css$/i.test(item));
}).then(result => {
  let arg = [];
  result.forEach(item => {
    // 分别调取 readFile 读取捕捉到的文件，向数组中一次增加读取各个文件中的 promise 实例
    arg.push(readFile(`less/${item}`));
  });

  // 等数组中所有的promise实例都执行成功才成功
  return Promise.all(arg);
}).then(result => {
  result = result.join('');
  return result.replace(/( |\n|\r)/g, '');
  // console.log(result);
}).then(result => {
  return writeFile('less/build.min.css',result)
}).then(() => {
  console.log('创建成功...');
})
