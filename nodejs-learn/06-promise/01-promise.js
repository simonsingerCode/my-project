new Promise((resolve, reject) => {
  // => resolve & reject 使自己任意执行的，通常情况下，成功执行 resolve 失败执行 reject
  // excutor 执行函数
  resolve(100)
}).then(result => {

}, reason => {
    console.log(1);
    return 1000; // => 会把这个值传给下一个then中的方法； 如果返回的是一个新的 promise实例，则等到Promise处理完成，把处理完成的结果传递给下一个then

}).then(result => { // => 需要保证then方法返回的依然是promise实例，这样才可以链式调用

  // => 上一个then中管控的两个方法中只要任何一个执行不报错，就会执行这个then中的第一个方法，如果执行报错，会执行此then中的第二个回调函数

}).catch(reason => {
  // => catch 相当于then(null, reason=>{})
})

console.log(3);
