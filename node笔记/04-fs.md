## fs --> fielSystem 文件系统
> 主要是文件的读写

- 既有同步也有异步方法
- fs 读取文件，首先要保证文件必须存在
- 读取文件：如果不写 `./`，默认会从当前目录中找
- 读取文件后，默认类型是 buffer
- `fs.readFile(path, 'utf8')` 后面的 `utf8` 是读取的类型

> 文件读取通常会使用到内置模块 `util` 里面有一个 `util.promisify(fs.readFile)` 方法，就可以把 `fs.readFile` 包装成一个 promise 对象，实现链式操作

> `async/await` ES7 中的语法。**await 后面必须跟的是 promise**
---

## 同步异步的结果
  #### promise 解决的问题
  1. 解决回调地狱  链式写法
  2. 解决同步异步的结果 `Promise.all()` **参数是一个数组**，都成功才成功，有一个失败，就失败了。
  3. `Promise.race()` **参数是数组** ；谁快就以谁为准。快的成功就成功了，快的失败就失败了
---

## fs 读写操作
1. **读取文件的结果都是 `buffer` 格式的； 写入的时候是 `utf-8` 格式的**
2. **读取的文件必须存在； 写的时候，如果文件不存在会自动创建，里面有内容会覆盖**
3. `fs.writeFile(path, content, callback);`
    - path 要写入的文件的路径
    - content 的内容必须是 `string buffer` 这样一个类的参数；也不能是对象，如果是对象的话，必须使用 toString 方法转换为 `字符串`
---

  ### 如何实现文件的 copy 功能
  1. **常用的两个方法** *这两个方法都是异步操作*
      ```javaScript
      fs.readFile(url, 'utf8', callback);

      fs.writeFile(url, content, 'utf8', callback);
      ```

  2. 经常用的第二个方法
      ```javascript
      fs.stat(path, callback);
      // 此方法里面的 callback 里面有两个参数， err 和 stat； stat 是文件的状态
      ```
      - stat 文件状态里面有几个参数值得注意：
        1. `mtime`  文件最新被修改的时间
        2. `atime`  文件最近被访问的时间
        3. `ctime`  文件最近被访问的时间
        4. `birthtime`  文件被创建的时间
      - stat 中还有2个方法
        1. `stats.isFile()` 判断是否是文件
        2. `stats.isDirectory()` 判断是否是文件夹

      - `fs.mkdir(fileName,callback)` 此方法创建的是一个文件夹
        ```javaScript
        callback() // 回调里面的参数: err
        ```
      - 递归创建目录
        ```javascript

        ```
      - `fs.`
