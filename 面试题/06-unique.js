var arr = [8, 11, 20, 5, 8, 0, 2, 4, 0, 8];


// function unique(arr) {
//   let t = [arr[0]];
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let k = 0; k < t.length; k++) {
//       if (t[k] === arr[i]) {
//         break;
//       }

//       if (k === t.length - 1) {
//         t.push(arr[i]);
//       }
//     }
//   }
//   return t;
// }



function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

console.log(unique(arr));
