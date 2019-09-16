## 一、node 入门

### 1. node 本身是基于 commonJS 模块规范设计的，所以模块是 node 的组成
  - 内置模块： node 中内置的 http  fs url querystring... 这些模块
  - 三方模块： 别人写好的可以拿过来直接用
  - 自定义模块：自己写的 js 文件

### 2. CommonJS 模块化设计思想
===

### CommonJS 模块
  - 每一个js 就是要给模块(模块是私有的，里面的变量、函数等都是私有的，和其他的js文件中的内容是不冲突的)
  - CommonJS 中可以允许模块中的方法互相调用

  [导出]
    CommonJS 给每一个模块中都设置了内置的变量/属性/方法
     1. module： 代表当前这个模块对象 [Object]
     2. module.exports： 用来导出当前模块 属性/方法的 [Object]
     3. exports: 是内置的一个"变量"，用来导出当前模块的属性和方法的，虽然和 module.exports 不是同一个东西，但是对应的值是同一个 (module.exports = export 值都是对象)

  [导入]
    require('http'); // 导入 内置/自定义 模块
    - require: 也是 CommonJS 提供的内置变量，用来导入模块的(其实导入的就是 module.exports 暴露出来的东西)
    - require 是一个同步操作，只有把导入的模块中的代码执行完毕，才能获取值，然后执行本模块下面的其他代码
