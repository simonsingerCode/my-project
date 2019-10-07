let ary = [99, 12, 8, 24, 16, 3, 9, 5, 1];
function insertSort(arr) {
  // => 1. 准备一个新数组，用来存储抓到的牌，现抓一张牌进来
  let handle = [arr[0]];
  // => 2. 从第二项开始依次抓牌
  for (let i = 1; i < arr.length; i++) {
    let A = ary[i];
    for (let k = handle.length; k >= 0; k--) {
      // => 每一次要比较 handle 里面的牌
      let B = handle[k];
      // 如果当前牌A比要比较的牌B大了，把A放到B后面
      if (A > B) {
        handle.splice(k + 1, 0, A);
        break;
      }
      // 如果已经比到第一项，我们把新牌放到手中最前面即可
      if (k === 0) {
        handle.unshift(A);
      }
    }
  }
  return handle;
}
console.time('A');
let result = insertSort(ary);
console.timeEnd('A');
console.log(result);
