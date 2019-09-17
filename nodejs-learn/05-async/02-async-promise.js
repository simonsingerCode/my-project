console.log(1);
new Promise((resolve, reject) => {
  // new Promise 的时候，会立即把 excutor 函数(也就是传递的回调函数)执行，所以 promise 本身可以理解为同步的
  console.log(2);
  setTimeout(() => {
    resolve();
  }, 10);
}).then(() => { // 执行完 excutor函数，紧接着执行then，执行then方法，会把传递的函数放在指定的容器当中，等待触发执行(Promise内部机制)
  console.log(3);
})
console.log(4);
