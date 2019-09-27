console.log(this);

// node 文件的 js 实现，实在最外边套了一个看不见的的 闭包，所以每个模块内部定义个变量和属性都是私有的

var a = 1; // 每个文件都有独立的作用域，不会讲属性挂载到global上
console.log(global.a);

console.time('start');
for (let i = 0; i < 99999; i++) {

}
console.timeEnd('start');
