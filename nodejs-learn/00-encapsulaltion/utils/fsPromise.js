const fs = require('fs');
const path = require('path');
// 这些方法我们都需要封装 => mkdir  readdir  rmdir  readFile  writeFile appendFile copyFile

// 存储的是当前模块执行所在的绝对路径 (!== __dirname)
const dirname = path.resolve();

// 创建/删除操作
// 封装 mkdir & rmdir & readdir & readFile & copyFile & unlink 方法
['mkdir', 'rmdir', 'readdir', 'readFile', 'copyFile','unlink'].forEach(item => {
  exports[item] = function (pathName, copyPath='') {
    pathName = path.resolve(dirname, pathName);
    copyPath = path.resolve(dirname, copyPath);
    return new Promise((resolve, reject) => {
      let arg = [(err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result || '');
      }];

      item === 'readFile' ? arg.unshift('utf8') : null;
      item === 'copyFile' ? arg.unshift(copyPath) : null;

      fs[item](pathName, ...arg);
    });
  };
});

// module.exports.writeFile = function () { };
// module.exports.appendFile = function () { };
['writeFile', 'appendFile'].forEach(item => {
  exports[item] = function (pathName, content) {
    pathName = path.resolve(dirname, pathName);
    if (typeof content !== 'string') {
      // 写入的内容规定必须是字符串才可以
      content = JSON.stringify(content);
    }
    return new Promise((resolve, reject) => {
      let arg = [content, 'utf8', (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result || '');
      }];
      fs[item](pathName, ...arg);
    })
  }
})

// copy 操作
// module.exports.copyFile = function () { };

const readFile = function (pathName) {
  // console.log('000...', __dirname);
  // 一般都会把传递的 pathname 进行处理: 以当前项目的根目录为依托，我们只需要传递相对于根目录的相对地址，程序自动生成一个绝对根目录地址
  pathName = path.resolve(path.resolve(pathName));
  // pathName = path.resolve(path.resolve(), pathName);
  return new Promise((resolve, reject) => {
    fs.readFile(pathName, 'utf8', (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(result);
    });
  });
};

module.exports = {
  readFile
};
