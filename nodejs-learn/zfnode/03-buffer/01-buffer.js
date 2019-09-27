// var buffer = Buffer.alloc(100); // 这种方法比较消耗性能
// console.log(buffer);

var buffer = Buffer.from([17, 18, 19, 0x11]); // 会把10进制转化为16进制
console.log(typeof buffer);
var newBuffer = buffer.slice(0, 1);
newBuffer[0] = 100;
console.log(buffer === newBuffer);


// var buffer = Buffer.from('自学网');
// console.log(buffer.length);
// console.log(buffer.toString());

// //  fill 方法
// var buffer = Buffer.allocUnsafe(100);


// var obj = { naem: 'simon' };
// var arr = [obj,1, 2, 3, 4, 5, 6];
// var newArr = arr.slice(0);
// arr[0].name = 'hello';

// console.log(newArr);


// var obj = { name: { name: 'simonsinger' } };
// var newObj = Object.assign({}, obj);
// obj.name.name = "hello";
// console.log(newObj);
