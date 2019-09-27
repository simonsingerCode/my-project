// process 设置环境变量

process.nextTick(() => {
  console.log('nextTick...');
})

setImmediate(() => {
  console.log('setImmediate...');
  console.log('setImmediate...',this);
})
