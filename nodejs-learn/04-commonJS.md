## 一、node 入门

  ### 1. node 本身是基于 commonJS 模块规范设计的，所以模块是 node 的组成
  - 内置模块： node 中内置的 http  fs url querystring... 这些模块
  - 三方模块： 别人写好的可以拿过来直接用
  - 自定义模块：自己写的 js 文件

  ### 2. CommonJS 模块化设计思想

  ### 3. CommonJS 模块
  - 每一个js 就是要给模块(模块是私有的，里面的变量、函数等都是私有的，和其他的js文件中的内容是不冲突的)
  - CommonJS 中可以允许模块中的方法互相调用

  **[导出]**
  #### CommonJS 给每一个模块中都设置了内置的变量/属性/方法
     1. module： 代表当前这个模块对象 [Object]
     2. module.exports： 用来导出当前模块 属性/方法的 [Object]
     3. exports: 是内置的一个"变量"，用来导出当前模块的属性和方法的，虽然和 module.exports 不是同一个东西，但是对应的值是同一个 (module.exports = export 值都是对象)

  **[导入]**
  *require('http'); 导入 内置/自定义 模块*
  - require: 也是 CommonJS 提供的内置变量，用来导入模块的(其实导入的就是 module.exports 暴露出来的东西)
  - require 是一个同步操作，只有把导入的模块中的代码执行完毕，才能获取值，然后执行本模块下面的其他代码

  ### 4. CommonJS 的特点：
   1. 模块是私有的独立的，包括里面的所有东西也都是私有的，不会和其他模块产生干扰
   2. 模块可以多次加载，但只会在第一次加载时，运行一次，然后运行结果就被缓存了，如果后面再次加载，直接读取缓存结果。要想让模块再次运行，必须清除缓存。
   3. 加载顺序，按照代码出现的顺序执行。加载模块是同步的，只有加载完成，才能执行后面的代码
   4. exports = {} 是无法导出内容的。默认和 module.exports 是同一个堆内存，但是这种操作，让 exports 指向一个新内存，而 module.exports 则不受影响；而 require 导入的是 module.exports 对应的堆内存；

  ### 5. 案例：
   1. A/B/C 三个模块  A中有一个sum方法：实现任意数求和；B中有一个avg方法：实现任意数求平均数；C中调去B中的avg，实现 12,23,34,45,56,67,78,89，求平均数
   2. **require('./xxx')** 或者 ../xxx 再或者 /xxx 这种自己指定路径的模式，都是为了导入自定义的模块，想要导入自定义的模块，必须加路径。

## 二、node 中的内置模块
  #### 1. `fs内置模块`
  - 实现 **I/O**操作 下面的这些方法都是异步操作。
  - fs.mkdir(path, [model], callback)/fs.mkdirSync(path, [model]) 创建文件夹,有 sync 的是同步创建，反之，没有的则是异步
  - fs.readdir(path, 'utf8', callback) 读取文件目录中的内容 **'utf8'设置读取文件字符编码格式;如果没有'utf8'则是buffer格式的数据**
  - fs.rmdir()  删除文件夹 **删除文件夹必须保证文件夹是空的**
  - fs.unlink()  删除文件
  - fs.readFile()  读取文件中的内容 **'utf8'同上**
  - fs.writeFile()  向文件中写入内容 **(覆盖写入：写入的新内容会替换原有的内容)**
  - fs.appendFile()  追加写入内容，原有内容还在
  - fs.copyFile()  拷贝文件到新的目录下
  - **`注意事项：`**
---

  #### 2. `path内置模块`
  - path.resolve() 返回当前模块的绝对地址(不包含模块名)， __dirname 是当前模块所在的绝对路径
    - path.resolve(__dirname, 'less/tt') 的作用是把 `less/tt` 的相对路径拼接到 __dirname这个绝对路径的后面，形成一个完整的路径
    - path.resolve(__dirname, `${__dirname}/less/tt`) 如果两个路径都是绝对路径，那么只会保留后面的那个绝对路径，前面的就不存在了
    - `注意：`
      - 这里的 __dirname 返回的路径是 **当前__dirname所在模块绝对路径(和模块中的方法在哪里执行是没有关系的)**
      - path.resolve() 返回路径是 **调用执行模块所在的绝对路径**
    - **__dirname：** 是当前模块所在的绝对路径。如：E:\mySelf-worker\NodeJs\note\03-nodejs-git
    - **__filename：** 是当前文件所在的绝对路径,多了模块的名称,例如： E:\mySelf-worker\NodeJs\note\03-nodejs-git\test.js
---

  #### 3. `url模块` 作用： 操作URL地址的
  - url.parse(url[, flag]); 把一个URL地址进行解析，把地址中的每一项按照对象键值对的方式存储起来
    - flag 参数默认是 false， 设置为true 可以把问号传参的部分，也解析称为对象键值对的方法
    - **flag 为 true ，query 的值是一个对象，**这是和不加 true 的区别

---
  #### 4. `http模块` 作用： 创建服务
  ```javaScript
  const server = http.createServer((request,response)=>{}); // 创建服务器
  server.listen(8000); // 监听端口
  ```
  1. DNS 解析
    - 找到对应的服务器 -> 服务器通过端口号找到对应的服务
    - 服务器会把客户端请求的内容相应到对应的客户端
    - 客户端： 发请求和渲染
    - 服务器端的任务：
      1. 创建服务器(指定端口的web服务器)
      2. 接受客户端的请求信息，并且进行解析处理，把需要的内容获取到，并且响应给客户端
    - 实例见 04-url文件夹下的 urlTest.js 文件
    - `注意：`
      - 基于node创建后台程序，一般都会创建一个server模块，在模块中实现创建web服务，和对于请求的处理(一般都会把server模块放到当前项目的根目录下)
      - 如果出现 *listen EACCES 0.0.0.0:8000* 说明端口号被占用，修改端口号后，重新启动服务。
      - ctrl + c  结束服务
    - 客户端如何向创建的服务器发送请求?
      - 对应好协议、域名、端口信息，在浏览器中或者ajax等中发送请求即可
      - http://localhost:8000/... 服务器在电脑上，localhost 本机域名，也就是本机的的客户端浏览器，访问本机的服务端程序
      - http://IP:8000/... IP 做域名访问，如果是内网IP，相同局域网下的用户可以访问这个服务； 如果是外网IP，所有能联网的基本上都可以访问这个服务
      - 使用 ipconfig 命令就可查看本机的Ip地址。http://192.168.31.207:8000/就可以访问。**局域网下互相访问，需要关掉防火墙**
  2. 详解 request 和 response 详解
    - request 请求对象，包含了客户端请求的信息
      1. req.url  *存储的请求资源的路径地址以及问号传参*
      2. req.method  *客户端请求方式*
      3. req.headers  *包含了请求头的信息,是一个对象*
      4. 把请求的url地址中，路径名称 问号传参 分别解析出来
        - 需要通过 url 模块中的 url.path(req.path) 方法解析出来
    - response 相应对象，包含了一些属性和方法，可以让服务器端返回给客户端内容
      1. res.write() *服务器端可以向客户端返回内容*
      2. res.end() *结束响应*
        - 可以把 res.write() 和 res.end() 只写res.end() 即可，**服务器端返回给客户端的内容一般都是 string 或者 buffer 格式的数据**
        - 如果有中文，会出现乱码，需要设置相应头信息，就可以了
      3. res.writeHead()  *设置响应头信息*
        - 第一个参数 200 相应成功;
        - 第二个参数 {'content-type': 'text/plain; charset=utf-8;'}

## 三、创建静态资源服务器
  1. 我们创建的web服务的服务主要有两种：
    **1. 静态资源文件的web服务处理** 请求的地址中后后缀名
    **2. 对应API接口的数据请求处理** 没有后缀名

  2. 首先，我们在我们的服务器根目录下，有一个静态资源 static 文件夹
    - 服务器上有一堆代码，这些代码有可能有服务器端的代码，也有可能有 客户端的程序代码，而客户端程序代码我们一般都放到 static 文件夹中
    - 在后台服务器这里，文件夹 static 中的所有东西，都是有服务器返回给客户端，有客户端负责渲染解析的。
    ```JavaScript
    static
      都是服务器端需要返回给客户端，有客户端浏览器渲染和解析的(前端项目：包括 html css js 图片等等...)

    server.js
      都是需要在服务器端基于 node 执行的代码(属于后端项目： 一般只有 js 代码)

    ```
    - 这时候，客户端请求资源文件，服务器端都是到 static 文件夹中进行读取，
      也是根据客户端请求路径名读取的，服务器端基于FS 读取文件中内容的时候，直接加上 `./static` 即可
    - { methods, headers: requestHeaders } = req; 这里用到结构赋值，加上重命名

  3. API 接口的请求处理
    - GET 请求方式的处理
    - POST 请求方式的处理
      1. axios 默认请求主体传递给服务器的是 RAW 格式的：*'{"name":"xxx", ...}';*
      2. 真实项目中我们和服务器约定的传输格式应该是 *x-www-url-encodeed: "name=xxx&..."*
      3. 这个时候，就需要添加一个请求处理机制
      ```JavaScript
      axios.defaults.transform.request = data=>{
        // 基于这个请求拦截器可以把 POST 和PUT 等传递给服务器的请求主体(data)内容格式进行格式化处理
        // data 就是配置的请求主体对象
        let str = '';
        if(data && typeof data === 'object'){
          for(let key in data){
            if(data.hasOwnProperty(key)){
              str += `${key} = ${data[key]}&`;
            }
          }
          data = str.substring(0, str.length-1);
        }
        return data;
      }
      ```

  4. js中的同步异步处理


  5. 后台处理中最重要的是：逻辑
    - 业务逻辑
    - 编程逻辑

---
  ##### 实例代码
    ```javascript
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
    ```
