// 需求
// 文件30b 每次读取4b， 读取第一次开始写，每次只能写入1b,暂停读取，当 drain 后，在回复读取

let fs = require('fs');

function pipe(source,target) {
  let rs = fs.createReadStream(source, { highWaterMark: 4 });
  let ws = fs.createWriteStream(target, { highWaterMark: 1 });
  // 开启可读流
  rs.on('data', chunk => {
    if (ws.write(chunk) === false) { // 可写流不能再写入了
      rs.pause(); // 暂停读取
    }
  });
  ws.on('drain', () => {
    console.log('over...');
    rs.resume(); // 当当前读入的内容都写入到了文件中，调用rs.on('data')继续读取
  })

  rs.on('end', () => { // 当读取完毕，强制将内存中未写完的内容导入到文件中，关闭文件
    ws.end();
  })
}

pipe('1.txt','2.txt')
