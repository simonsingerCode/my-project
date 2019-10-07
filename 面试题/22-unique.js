// let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// 数组如何扁平化  ES6中的 flat 可以将数组扁平化

// arr = arr.flat(Infinity);
// console.log(arr);
// console.log(Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b));

// console.log(JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item=>Number(item)));

// console.log(arr.toString().split(',').map(item=>Number(item)));


// while (arr.some(item => Array.isArray(item))) {
//   arr = [].concat(...arr);
// }
// console.log(arr);


// 递归的方式处理
// (function () {
//   function myFlat() {
//     let result = [],
//       _this = this;
//     // => 循环 arr 中的每一项，把不是数组的存储到新数组中
//     let fn = (arr) => {
//       for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (Array.isArray(item)) {
//           fn(item);
//           continue;
//         }
//         result.push(item);
//       }
//     }
//     fn(_this);
//     return result;
//   }
  // Array.prototype.myFlat = myFlat;
// })();

// console.log(arr.myFlat());

// console.log('------------------------------------------------');


// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function () {
//   console.log('wangwang...');
// };
// Dog.prototype.sayName = function () {
//   console.log('my name is ' + this.name);
// }

// function _new(Fn, ...arg) {
//   let obj = {};
//   obj.__proto__ = Fn.prototype;
//   Fn.call(obj, ...arg);
//   return obj;
// }

// let sanmao = _new(Dog, '三毛');
// sanmao.bark();
// sanmao.sayName();
// console.log(sanmao instanceof Dog);

// console.log('------------------------------------------------');


// let ary1 = ['D1', 'D2', 'A1', 'A2', 'C1', 'C2', 'B1', 'B2'];
// let ary2 = ['B', 'A', 'D', 'C'];
// 如果合并后的数组没有顺序要求，则使用下面的方法
// ary2 = ary2.map(item => item + 'Z');
// let arr = ary1.concat(ary2);
// arr = arr.sort((a, b) => a.localeCompare(b)).map(item => item.replace('Z', ''));
// console.log(arr);

// 如果合并后的数组有顺序要求，则使用下面方法
// let n = 0
// for (let i = 0; i < ary2.length; i++) {
//   let item2 = ary2[i];
//   for (let k = 0; k < ary1.length; k++) {
//     let item1 = ary1[k];
//     if (item1.includes(item2)) {
//       // => 如果包含就记录以下当前这一项的索引位置(后面还有包含的会重新记录这个值)
//       n = k;
//     }
//   }
//   ary1.splice(n + 1, 0, item2);
// }
// console.log(ary1);

// console.log('------------------------------------------------');



// let obj = {
//   2: 3,
//   3: 4,
//   length: 2,
//   push: Array.prototype.push
// }
// obj.push(1);
// obj.push(2);
// obj.push(3);
// console.log(obj);


let obj = {
  1: 222,
  2: 123,
  5: 888
};

// => 第一种方法
let arr = new Array(12).fill(null).map((item, index) => {
  return obj[index + 1] || null;
})
console.log(arr);

// => 第二种方法
let res = Array.from({ length: 12 }).fill(null);
Object.keys(obj).forEach(item => {
  res[item - 1] = obj[item];
});
console.log(res);

// => 第三种方法
let arr = Object.keys(obj);
let newArr = new Array(12).fill(null);
for (let i = 0; i < 12; i++) {
  if (obj[i + 1]) {
    newArr[i] = obj[i + 1];
  }
}
console.log(newArr);
