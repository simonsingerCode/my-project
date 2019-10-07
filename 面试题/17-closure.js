/**理解闭包
 * 1. 密闭的容器，类似与 set map 容器，存储数据的
 * 2. 闭包是一个对象；存放数据的格式是 key:value 形式的
 *
 * 闭包形成的条件：
 *  1. 函数嵌套
 *  2. 内部函数引用外部函数的局部变量
 */


// function fun() {
//   var count = 1;
//   return function() {
//     console.log(count);
//   }
// }

// var fun2 = fun();
// fun2();
// fun2();


function fun(n,o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  }
}

var a = fun(0); // undefined
a.fun(1); // fun(1,0) // 0
a.fun(2); // fun(2,0) // 0
a.fun(3); // fun(3,0) // 0

var b = fun(0).fun(1).fun(2).fun(3);
// undefined 0 1,2,

var c = fun(0).fun(1); // undefined 0
c.fun(2); // 1
c.fun(3); // 1
