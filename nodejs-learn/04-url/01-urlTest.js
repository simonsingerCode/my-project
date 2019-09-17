const url = require('url');

let urlPath = url.parse('http://www.baidu.com/main/guide/index.html?form=qq&x=stu#video',true);
console.log(urlPath);

/*
Url {
  protocol: 'http:', => 协议
  slashes: true, => 是否有双斜线
  auth: null, => 作者
  host: 'www.baidu.com', => 域名 + 端口
  port: null, => 端口
  hostname: 'www.baidu.com', => 域名
  hash: '#video', => 哈希值
  search: '?form=qq&x=stu', => 问号传参[字符串]
  query: 'form=qq&x=stu', => 传递参数[不包含问号]
  pathname: '/main/guide/index.html', => 请求资源的路径名称
  path: '/main/guide/index.html?form=qq&x=stu',
  href: 'http://www.baidu.com/main/guide/index.html?form=qq&x=stu#video' => 原始的URL地址
}
*/
