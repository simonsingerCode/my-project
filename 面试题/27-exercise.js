// let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// console.log(Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b));

// console.log(JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item)));
// console.log(new Set(JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item)).sort((a,b)=>a-b)));


// console.log(Array.from(new Set(arr.toString().split(',').map(item => Number(item)).sort((a, b) => a - b))));

// while (arr.some(item => Array.isArray(item))) {
//   arr = [].concat(...arr);
// }
// console.log(Array.from(new Set(arr.sort((a,b)=>a-b))));

// (function () {
//   function myFlat() {
//     let result = [],
//       _this = this;

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

//   Array.prototype.myFlat = myFlat;
// })()

// arr.myFlat()


// let ary = [99, 12, 8, 24, 16, 3, 9, 5, 1,199];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     for (let k = 0; k < arr.length - 1 - i; k++) {
//       if (arr[k] > arr[k + 1]) {
//         [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
//       }
//     }
//   }
//   return arr;
// }


/**insertSort
 * 此数组排列是正向排列
 * @ arr 数组
 * @ return 返回一个新数组
 */
// function insertSort(arr) {
//   let newArr = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     let index;
//     let tem1 = arr[i];
//     for (let k = 0; k < newArr.length; k++) {
//       let tem2 = newArr[k];
//       if (tem1 >= tem2) {
//         index = k;
//       }
//     }
//     newArr.splice(index + 1, 0, tem1);
//   }
//   return newArr;
// }
// console.log(insertSort(ary));


// let arr = [99, 12, 8, 24, 16, 3, 9, 5, 1];
// function insertSort(arr) {
//   let handle = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     let A = arr[i];
//     for (let k = handle.length; k >= 0; k--) {
//       let B = handle[k];
//       if (A > B) {
//         handle.splice(k + 1, 0, A);
//         break;
//       }
//       if (k === 0) {
//         handle.unshift(A)
//       }
//     }
//   }
//   return handle;
// }
// console.log(insertSort(arr));


// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let middleIndex = Math.ceil(arr.length / 2),
//     middleValue = arr.splice(middleIndex, 1)[0],
//     leftArr = [],
//     rightArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cur = arr[i];
//     cur > middleValue ? rightArr.push(cur) : leftArr.push(cur);
//   }
//   return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
// }

// let arr = [99, 12, 8, 24, 16, 3, 9, 5, 1];
// console.log(quickSort(arr));


// (function () {
//   function myLength() {
//     let _this = this;
//     let len = _this.split('').length;
//     return len;
//   }
//   String.prototype.myLength = myLength;
// })();
// let str = 'simon singer code camel';
// console.log(str.myLength());


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort(function () {
//   return Math.random() - 0.5;
// })
// console.log(arr);


// var obj = { q: 1, w: [{ e: 1 }, 2], r: { t: '123' } };
// function deepClone(obj) {
//   if (!obj || (typeof obj !== 'object')) {
//     return;
//   }
//   var newObj = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
//   for (let key in obj) {
//     if (typeof obj[key] == 'object') {
//       newObj[key] = deepClone(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// console.log(deepClone(obj) == obj);;
// console.log(deepClone(obj));


//1、创造一个vuex实例
//2、把创造的实例放到根实例中
//使用this.$store.state

