## 一、 node 是什么?
  1. node 是基于V8引擎，用来渲染js的环境

  2. 如何在 node 执行和解析js
      REPL  read-evaluate-print-loop
      node filename.js

  3. 把 node 作为后台编程语言，是因为我们可以把node安装在服务器上，通过node来执行

  4. node 特点： 单线程、快、异步无阻塞的异步I/O操作、事件驱动 event-driven、

  5. node 安装 npm view jquery > jquery.version.txt 查看所有的版本信息
===

### 在本地项目当中，基于 npm 安装第三方模块
    1. 在本地项目中 创建一个 package.json 的文件。 使用 npm init -y 命令 会自动生成
    2. 安装
    3. 部署的时候 跑环境  npm install  即可

      开发依赖： 项目在开发阶段依赖的第三方模块  npm install xxx --save  保存到 生产依赖 环境当中
      生产依赖： 项目部署的时候，也需要依赖的第三方模块  npm install xxx --save-dev  保存到 开发依赖 当中

===

### 为什么安装在全局可以使用命令?
  ```
    npm root  查看本地项目，npm 的安装目录
    npm root -g 查看全局项目，npm 的安装目录

    如果我们既想安装在本地，也想在全局中使用命令的话，需要在 scripts 中的配置

    首先把模块安装在本地，那么就可以在 package.json 中的 scripts 中进行配置需要执行的命令脚本即可。
    "scripts":{
      "less": "lessc -v"
    }
    使用 npm run less 就可以执行 less 命令了
  ```
