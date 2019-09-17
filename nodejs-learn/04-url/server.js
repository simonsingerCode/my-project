
const http = require('http'), url = require('url'), path = require('path'), fs = require('fs');
let { readFile,writeFile } = require('./utils/fsPromise'), mime = require('mime'), qs = require('qs');

// 公共方法
// 返回 响应结果
let responseResult = function (res, returnVal) {
  res.readHead(200, {
    'content-type': 'application/json; charset=utf-8;'
  }); // 注意
  res.end(JSON.stringify(returnVal));
};

// 读取 user.json 文件中的数据
let readUser = function (result) {
  return readFile(`./json/suer.json`).then(result => {
    return JSON.parse(result);
  })
};

// 读取 vote.json 中的数据
let readVote = function (result) {
  return readFile(`./json/vote.json`).then(result => {
    return JSON.parse(result);
  });
};

// 1. 创建web服务器，并设置端口号 0~65535之间
let port = 8000;
let handle = function handle(req, res) {
  let { method, headers:requestHeaders } = req,
    { pathName, query } = url.parse(req.url, true),
    pathReg = /\.([a-z0-9])$/i;

  // 静态资源的文件处理
  if (pathReg.test(pathName)) {
    readFile(`./static${pathname}`).then(result => {
      // 读取成功,根据请求资源文件的类型，设置响应内容的 MIME 类型
      let suffix = pathReg.exec(suffix)[1];
      res.writeHead(200, {
        'content-type': `${mime.getType(pathReg)}; charset=utf-8;`
      });
      res.end(result);
    }).catch(error => {
      // 读取失败：最可能由于文件不存在而读取失败(也就是客户端请求的地址是错误的)
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8;' });
      res.end('Not found...');
      console.log(error);
    });
    return;
  }

  // API 接口请求处理

  // getUser 根据传递的用户ID获取指定的用户信息
  if (pathName === '/getUser' && method === 'GET') {
    // 把数据找到并且返回
    // url中问号后面传递的信息都在query中存储这
    let { userId = 0 } = query,
      returnVal = { code: 1, message: 'no match any data!', data: null };

    /*
    readUser().then(result => {
      let data = result.find(item => parseFloat(item['id']) === parseFloat(userId));
      if (data) {
        returnVal = { code: 0, message: 'ok', data };
        responseResult(res, returnVal);
        return;
      }
      throw new Error(''); // 目的是：没有数据的时候，执行catch 中的操作，这样只需要让 then 方法中有异常信息即可
    }).catch(error => responseResult(res, returnVal));
    */

    // 另一种写法
    readUser().then(result => {
      let data = result.find(item => parseFloat(item['id']) === parseFloat(userId));
      data ? returnVal = { code: 0, message: 'No!', data } : null;
    }).finally(() => responseResult(res, returnVal));
    return;
  }

  // REGIDTER：注册用户
  if (pathName === '/register' && method === 'POST') {

    // => 1. 接收客户端传过来的内容
    let pass = ``;
    req.on('data', chunk => {
      //  正在接收请求主体内容，可能会被触发很多次; chunk 接收的都是本次接收得到的 buffer 格式的数据
      pass += chunk;
    });

    req.on('end', () => {
      // 已经把请求主体内容接收完成了
      // pass 是一个 urlencodeed 格式的字符串，需要解析为对象
      pass = qs.parse(pass);
      readUser().then(result => {
        // => format pass
        let maxId = result.length <= 0 ? 0 : parseFloat(reault[result.length - 1]['id']);
        // password 二级加密
        pass.password = pass.password.substr(4, 24).split('').reverse().join('');
        let newData = {
          id: maxId+1,
          name: '',
          picture: `img/${pass.sex != 0 ? `woman` : `man`}.png`,
          phone: "",
          sex: 0,
          password: "",
          bio: "",
          time: new Date().getTime(),
          isMatch: 0,
          matchId: '000',
          slogan: "",
          voteNum: 0,
          ...pass
        };

        // => 把newData 追加到result 的末尾; 然后把最新的结果重新写入文件
        result.push(newData);
        return writeFile('./json/user.json', result);
      }).then(result => {
        responseResult(res, {
          code: 0,
          message: 'ok'
        })
      }).catch(error => {
        responseResult(res, {
          code: 1,
          message: 'no'
        })
      });
    })
    // 2. 把数据库中的所有的 user 都拿到
    // 3. 把接收到的内容和数据库中的 user 合并在一起
    // 4. 把最新的重新写进去

    return;
  }

  // 请求的都不是以上接口,直接返回404即可
  res.writeHead(404);
  res.end('');

};

http.createServer(handle).listen(port, () => {
  console.log(`server is success, listen on ${port}...`);
});
