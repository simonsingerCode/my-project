const fs = require('fs');

// fs.stat('2.txt', (err, stats) => {
//   console.log(err);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
// })


// linux 中有这样一个命令 mkdir -p a/b/c/d 循环创建目录
// 递归创建目录
function makeP(url, cb) {
  let urlArr = url.split('/');
  let index = 0;

  function make(p) {
    if (urlArr.length < index) return;

    fs.stat(p, err => {
      if (err) {
        fs.mkdir(p, err => {
          if (err) return console.log(err);
          make(urlArr.slice(0, ++index + 1).join('/'));
        })
      } else {
        make(urlArr.slice(0, ++index + 1).join('/'));
      }
    })
  }
  make(urlArr[index]);
}

makeP('a/b/c/d', err => {
  console.log('创建成功');
})
