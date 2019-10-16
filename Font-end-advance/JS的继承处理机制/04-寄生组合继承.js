function A(x) {
  this.x = x;
}
A.prototype.getX = function () {
  console.log(this.x);
};

function B(y) {
  // => 这里面的 this 是 B 的实例
  A.call(this, 200);
  this.y = y;
}
// => Object.create(obj);  创建一个空对象，让空对象的 __proto__ 指向obj，也就是指向传进来的第一个参数
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.getY = function () {
  console.log(this.y);
};

let b1 = new B(100);



// => 自己手动实现一个 Object.create() 方法
Object.create = function (obj) {
  function Fn() { }
  Fn.prototype = obj;
  return new Fn();
}
