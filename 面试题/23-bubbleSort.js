let ary = [99, 12, 8, 24, 16, 3, 9, 5, 1];
console.time('A');
function bubble(arr) {
  // => 外层循环 I 控制比较的轮数
  for (let i = 0; i < ary.length - 1; i++) {
    // => 里层循环控制每一轮比较的次数 k
    for (let k = 0; k < ary.length - i - 1; k++) {
      if (ary[k] > ary[k + 1]) {
        // => 当前项大于后一项交换位置
        // let temp = ary[k];
        // ary[k] = ary[k + 1];
        // ary[k + 1] = temp;
        [ary[k], ary[k + 1]] = [ary[k + 1], ary[k]];
      }
    }
  }
  return arr;
}
console.timeEnd('A')
console.log(bubble(ary));
