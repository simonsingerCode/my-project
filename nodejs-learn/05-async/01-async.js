// setTimeout(() => {
//   console.log(1);
// }, 20);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.time('WHILE...');
// let i = 0;
// while (i <= 99) {
//   i++;
// }
// console.timeEnd('WHILE...')

// setTimeout(() => {
//   console.log(3);
// }, 10);

// console.log(4);

// ajax 任务开始 从 xhr.send() 开始
// ajax 任务结束  xhr.readyState == 4 && xhr.status == 200
let xhr = new XMLHttpRequest();
xhr.open('GET', 'xxx.txt', false);
// 放在等待区的时候，此时的状态是 1，
xhr.onreadystatechange = function () {
  // if (xhr.readyState === 4 && xhr.status === 200) {}
  console.log(xhr.readyState);
};
xhr.send();
// 状态为 4 的时候主栈空闲
