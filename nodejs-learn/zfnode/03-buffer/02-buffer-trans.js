// base64 进制转换

let buf = Buffer.from('我命由我不由天，是魔是仙，我自己说了算');
let m = buf.toString('base64');
console.log(m);
