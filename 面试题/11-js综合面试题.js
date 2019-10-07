function Foo() {
  getName = function () { console.log(1);}
  return this;
}

Foo.getName = function () { console.log(2);}
Foo.prototype.getName = function () { console.log(3);}
var getName = function () { console.log(4);}
function getName() { console.log(5); }

// 编译阶段的代码,函数，变量名会提升
// function Foo() {
//   getName = function () {
//     console.log(1);
//   }
//   return this;
// }

// var getName;  // 这个变量名会被忽略掉

// 此时这个 getName 函数会被下面的 getName = function(){console.log(4)} 给覆盖掉
// function getName() {
//   console.log(5);
// }

// ===================
// function Foo() {
//   getName = function () {
//     console.log(1);
//   }
//   return this;
// }

// Foo.getName = function () {
//   console.log(2);
// }

// Foo.prototype.getName = function () {
//   console.log(3);
// }

// getName = function () {
//   console.log(4);
// }


// 请写出下列的输出结果
Foo.getName();  // 2
getName()  // 4
Foo().getName() // 1  // (Foo()).getName() 在执行Foo()这个函数的时候，里面的getName() 函数会覆盖掉外面的 getName 函数所以 getName 这个函数最终打印的是 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName()  // 3
