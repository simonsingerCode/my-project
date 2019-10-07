// 函数节流
// 一个函数执行后，只有大于设定的执行周期后才会执行第二次
// 需要频繁触发的函数，处于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不会生效

/** throttle函数
 * @param fn 要被节流的函数
 * @param delay 规定的时间
 */
function throttle(fn,delay) {
  // 记录上一次函数出发的时间
  var lastTime = 0;
  return function () {
    // 记录当前函数触发的时间
    var nowTime = Date.now();

    if (nowTime - lastTime > delay) {
      fn.call(this);

      // 同步时间
      lastTime = nowTime;
    }
  }
}


document.onscroll = throttle(function () { console.log('scroll事件被触发了...' + Date.now()); }, 2000);
