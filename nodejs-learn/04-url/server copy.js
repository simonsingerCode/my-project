
const http = require('http'), url = require('url'), path = require('path'), fs = require('fs');

// 1. 创建web服务器，并设置端口号 0~65535之间
let port = 8000;
let handle = function handle (req,res) {
  // req.pathname // 存储的请求资源的路径地址
  // let { url, method } = req;
  // console.log(url);
  // console.log(method);
  // console.log(req.headers['user-agent']);
  // let { pathname, query } = url.parse(req.url, true);
  // console.log(pathname);
  // console.log(query);
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8;' });
  res.end(JSON.stringify({name: '哈哈哈....'}));
};
// http.createServer((req, res) => {
//   // 此回调函数，当服务创建成功，并且客户端相当前服务发送了请求，才会执行此回调函数，并且发送一次请求，回调函数就会触发执行一次
//   console.log('hello world!...');
// }).listen(port, () => {
//   // 当服务创建成功，并且端口号也已经监听后，触发此回调。此回调也可以不设置
//   console.log(`server is success, listen on ${port}...`);
// });
http.createServer(handle).listen(port, () => {
  // 当服务创建成功，并且端口号也已经监听后，触发此回调。此回调也可以不设置
  console.log(`server is success, listen on ${port}...`);
});
