## 模块安装
  1. 第三方模块通过 npm 来进行安装
    - 本地安装 -g(只能在`命令行`中使用)；默认的安装路径是 npm root -g
    - 全局安装

    ### http-server
    ```javaScript
    npm istall -g http-server 帮我们启动一个本地服务
    ```
    - 本地安装
      ```javaScript
      本地安装没有 -g 参数，安装之前需要初始化，记录安装的依赖
      npm init -y
      ```
      > package.json，目录下不能有中文，特殊字符、大写；默认先找当前目录下的 package.json，如果当前没有会向上级查找

      > package.json 中 scripts 可以配置一些快捷方式

    #### 项目依赖
      - 开发时使用，上线时还需要
      ```javaScript
      npm install jquery --save
      ```
    #### 开发依赖
      - 开发时使用，上线时不使用
      ```javaScript
      npm install less --save-dev
      ```
    #### 安装全局依赖
      - 使用下面方式安装全局依赖
      ```javaScript
      npm intall
      ```

## 核心模块
  1. promiseify() 把一个函数 promise 化
