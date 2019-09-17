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
   2. 模块可以多次加载，但只会在第一次加载时，运行一次，然后运行结果就被缓存了，如果后面在此加载，直接读取缓存结果。要想让模块再次运行，必须清楚缓存。
   3. 加载顺序，按照代码出现的顺序执行。加载模块是同步的，只有加载完成，才能执行后面的代码
   4. exports = {} 是无法到处内容的。默认和 module.exports 是同一个堆内存，但是这种操作，让 exports 指向一个新内存，而 module.exports 则不受影响；而 require 导入的是 module.exports 对应的堆内存；

  ### 5. 案例：
   1. A/B/C 三个模块  A中有一个sum方法：实现任意数求和；B中有一个avg方法：实现任意数求平均数；C中调去B中的avg，实现 12,23,34,45,56,67,78,89，求平均数
   2. **require('./xxx')** 或者 ../xxx 再或者 /xxx 这种自己指定路径的模式，都是为了导入自定义的模块，想要导入自定义的模块，必须加路径。

## 二、node 中的内置模块
  ### 1. `fs内置模块`
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

  ### 2. `path内置模块`
  - path.resolve() 返回当前模块的绝对地址(不包含模块名)， __dirname 是当前模块所在的绝对路径
    - path.resolve(__dirname, 'less/tt') 的作用是把 `less/tt` 的相对路径拼接到 __dirname这个绝对路径的后面，形成一个完整的路径
    - path.resolve(__dirname, `${__dirname}/less/tt`) 如果两个路径都是绝对路径，那么只会保留后面的那个绝对路径，前面的就不存在了
    - `注意：`
      - 这里的 __dirname 返回的路径是 **当前__dirname所在模块绝对路径(和模块中的方法在哪里执行是没有关系的)**
      - path.resolve() 返回路径是 **调用执行模块所在的绝对路径**
    - **__dirname：** 是当前模块所在的绝对路径。如：E:\mySelf-worker\NodeJs\note\03-nodejs-git
    - **__filename：** 是当前文件所在的绝对路径,多了模块的名称,例如： E:\mySelf-worker\NodeJs\note\03-nodejs-git\test.js

## 三、
