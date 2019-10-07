var foo = 'get-element-by-id';
// var foo1 = foo.split('-');
// var tempArr = []
// var result = Array.prototype.slice.call(foo1.splice(1)).forEach(item=>{
//   var temp = item.split('');
//   var temp1 = temp[0].toUpperCase();
//   temp.shift()
//   temp.unshift(temp1);
//   tempArr.push(temp.join(''))
// })

// console.log(foo1[0].concat(tempArr.join('')));

function toStrings(str) {
  var arr = foo.split('-');
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
  }
  return arr.join('');
}

var result = toStrings(foo)
console.log(result);
