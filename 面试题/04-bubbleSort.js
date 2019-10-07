var arr = [9, 18, 7, 36, 25, 549, 3, 2, 1];
let len = arr.length - 1;
for (let i = 0; i < len; i++) {
  for (let j = 0; j < len - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
