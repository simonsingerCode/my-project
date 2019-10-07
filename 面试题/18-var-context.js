/**变量提升和执行上下文 */

console.log(username); // undefined
var username = 'kobe';
fun(); // fun()
function fun() {
  console.log('fun()');
}


// 作用域：在定义的时候产生的
// 执行上下文： 代码在执行的时候产生的


// 执行上下文  执行上下文对象
/*execute context EC
  理解： 代码执行的环境
    执行环境的时机： 代码正式执行前会进入到执行环境

  工作：
    1. 创建变量对象，收集
        1. 变量
        2. 函数及函数的参数
        3. 全局： window
           局部： 抽象的，但是确实是存在

    2. 确认 this 的指向
        1. 全局  this ---> window
        2. 局部(函数)  this ---> 调用的对象

    3. 创建作用域链
        1. 父级作用域链 + 当前的变量对象

    4. 扩展:{
      ECObj = {
        变量对象：{变量， 函数， 函数形参}
        scopeChain: 父级作用域链 + 当前的变量对象
        this: {window || 调用的对象}
      }
    }
*/
