/* 自己封装性能测试
      任何代码的性能测试都是和测试的环境有关系的，例如 CPU, 内存、GPU 等电脑当前性能不会有相同情况，不同浏览器也会导致性能上的不同
 */

console.time('A');
for (let i = 0; i < 100000000; i++) {}
console.timeEnd('A');


console.log('-------------------------------------------------');

// 实现(5).add(3).manus(2) 使其结果为 6
(function () {
  // => 每一个方法执行完，都要返回Number这个类的实例，这样才能继续调用Number类型原型中的方法(链式写法)
  function check(n) {
    n = Number(n);
    return isNaN(n) ? 0 : n;
  }

  function add(n) {
    n = check(n)
    return this + n;
  }

  function manus(n) {
    n = check(n)
    return this - n;
  }

  ['add', 'manus'].forEach(item => {
    Number.prototype[item] = eval(item);
  })
})();
console.log((5).add(3).manus(2));

console.log('-------------------------------------------------');

// document.body.onclick = () => {
//   //  => this 是 window 而不是当前操作的 body 了
// }

// document.body.onclick = function () {
//   // => this 是 body
//   arr.sort(function (a, b) {
//     // => this 是 window 回调函数中的 this 一般都是 window
//     return a - b;
//   })
// }


// function Fn() {
//   this.x = 100;
// }

// Fn.prototype.getX = function () { };
// let f = new Fn;
// console.log(f);

// let Fn2 = () => {
//   this.x = 200;
// };
// let f2 = new Fn2;
// console.log(f2);


// => 回调函数的机制
// function each(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     let flag = callback.call(arr, arr[i], i);
//     if (flag === false) {
//       break;
//     }
//   }
// }

// each([10, 20, 30, 40], function (item, index) {
//   if (index > 1) {
//     return false;
//   }
// });


// let str = 'na zha nao hai SHI ZHEN DE ME,ying gai shi zhen de 就开始对肌肤来说';
// str = str.replace(/[a-zA-Z]/g, content => {
//   // return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase();
//   if (content.charCodeAt() >= 65 && content.charCodeAt() <= 90) {
//     return content.toLowerCase();
//   } else {
//     return content.toUpperCase();
//   }
// });
// console.log(str);



// (function () {
//   function myIndexOf(T){
//     let reg = new RegExp(T),
//       res = reg.exec(this);
//     return res = null ? -1 : res.index;
//   }

//   String.prototype.myIndexOf = myIndexOf;
// })();

// let S = 'mamamiyazainali';
// let T = 'iy';
// console.log(S.myIndexOf(T));



// var a = {}, b = '123', c = 123;
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); // 'c'


// var a = {}, b = Symbol('123'), c = Symbol('123');
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); // 'b'


// var a = {}, b = { key: '123' }, c = { key: '456' };
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); // 'c'



function Foo() {
  Foo.a = function () {
    console.log(1);
  }

  this.a = function () {
    console.log(2);
  }
}

Foo.prototype.a = function () {
  console.log(3);
};

Foo.a = function () {
  console.log(4);
};

Foo.a(); // 4
let obj = new Foo();
obj.a(); // 2
Foo.a(); // 1
