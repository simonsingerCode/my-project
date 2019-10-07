// nodejs 的事件轮询机制
setTimeout(function () {
  console.log('setTimeout()...');
}, 0);

setImmediate(function (args) {
  console.log('setImmediate()...');
});

process.nextTick(function () {
  console.log('process.nextTick()...');
});

// 无论我们如何调整函数位置，它的执行顺序永远都是 process.nextTick setTimeout  setImmediate

/*
  事件轮询机制的六个阶段
    1. timer 定时器阶段  计时和执行到点的定时器回调函数
    2. pending callbacks 某些系统的操作
    3. idle, prepare 准备工作
    4. poll 轮询阶段 (轮询队列)
      如果轮询队列不为空，一次同步取出轮询队列中第一个回调函数，直到轮询队列为空或者达到系统最大限制
      如果轮询队列为空，
        如果之前设置过 setImmediate函数
          直接进入下一个 check阶段
        如果之前没有设置过 setImmediate 函数
          在当前poll 阶段等待
            直到轮询队列添加回调函数，就去第一个情况执行
            如果定时器到点了，也会去下一个阶段
    5. check 查询阶段


*/
