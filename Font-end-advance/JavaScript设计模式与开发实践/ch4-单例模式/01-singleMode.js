// function Universe() {
//   if (typeof Universe.instance === 'object') {
//     return Universe.instance;
//   }
//   this.xxx = 'xxx';
//   Universe.instance = this;
//   return this;
// }

// var uni1 = new Universe();
// var uni2 = new Universe();
// console.log(uni1 === uni2);



// 使用闭包
function Universe() {
  var instance = this;
  this.xxx = 'xxx';
  Universe = function () {
    return instance;
  }
}

var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);
