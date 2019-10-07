let obj = { name: 'OBJ' };
function fn(...arg) {
  console.log(this);
  console.log(arg);
}
// document.body.onclick = fn;

// => 点击的时候Fn中的this => obj arg=>[100,200, 时间对象]
// document.body.onclick = fn.bind(obj, 100, 200);
// document.body.onclick = function (ev) {
//   fn.call(obj, 100, 200, ev)
// };

// => 执行 bind 方法，会返回一个匿名函数，当时间触发，匿名函数执行，我们在处理 fn 即可

(function () {
  function myBind(context = window, ...outerArg) {
    let _this = this;
    // => this： 就是需要该改变this的函数
    // context: 需要改变的this指向
    // => outerArg: 其余需要传递给函数的实参
    return function (...innerArg) {
      _this.call(context,...outerArg.concat(innerArg))
    }
  }
  Function.prototype.myBind = myBind;
})();
document.body.onclick = fn.myBind(obj, 100, 200);
