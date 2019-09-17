setTimeout(() => {
  console.log(1);
}, 20);

setTimeout(() => {
  console.log(2);
}, 0);

console.time('WHILE...');
let i = 0;
while (i <= 999999999) {
  i++;
}
console.timeEnd('WHILE...')

setTimeout(() => {
  console.log(3);
}, 10);

console.log(4);
