function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // => 找到数组中的中间项的索引;在原数组中的截取中间的项
  var middleIndex = Math.floor(arr.length / 2);
  var middleValue = arr.splice(middleIndex, 1)[0]
  var leftArr = [];
  var rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    cur > middleValue ? rightArr.push(cur) : leftArr.push(cur);
  }
  return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
}
let arr = [99, 12, 8, 24, 16, 3, 9, 5, 1];
console.time('A')
var result = quickSort(arr);
console.timeEnd('A');
console.log(result);
