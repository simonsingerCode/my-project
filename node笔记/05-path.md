## nodejs 核心模块 `path`

  ### 一、 常用核心模块
  1. `path.join(__dirname, './a','./b')` 路径拼接
  2. `path.resolve()` 解析一个绝对路径
  3. `path.delimiter` 环境变量分隔符
  4.

  ### 二、流-->是基于事件的
  1. `events库` `let EventEmitter = require('events')` 返回的是一个 eventEmitter 事件发射器
  2. **`util`** 库中有一个 **`inherits`** 方法，这个方法是用来继承共有方法的
      ```javaScript
      inherits(Girl, EventEmitter); // 这里是 Girl 这个类继承 EventEmitter 中的事件机制
      ```
  3. 有关 EventEmitter 触发绑定事件机制

  ### 三、流 --> stream `流分为: 可读流和可写流` *实例见 `04-stream.js`*

  #### 可读流中常用的5个方法**
  - `rs.on('data',cb)` 读取数据的 data 事件
  - `rs.on('end',cb)` 全部读取完毕的时候触发
  - `rs.on('err',cb)` 读取错误或者文件不存在时触发
  - `rs.pause()` 暂停， 暂停的是 `rs.on('data',cb)` 的触发
  - `rs.resume()` 恢复 data 事件的触发

  #### 可写流常用方法
  - `let ws = fs.createWriteStream(path, options)` 返回的是可写的对象
  - **可写流的方法**
    - `ws.write(string/buffer, callback)` 必须是 `string` 或 `buffer` 类型; 回调函数一般不写；并且此函数还有一个返回值 flag ，此 flag 标识
    - `ws.on('drain', callback)` drain 干涸；  `drain`事件 当读取的文件 全部写入后，就会回复读取
    - `ws.end(); ` end() 里面如果有数据，会先把数据写入文件之后关闭。调用 end 后，不能再用 write。 end调用后，会把所有write 中的内容以最快速写入文件
