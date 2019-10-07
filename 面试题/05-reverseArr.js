var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.reverse(arr));

function reverseArr(arr) {
  let len = Math.ceil(arr.length / 2);
  for (let i = 0; i < len; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArr(arr));
