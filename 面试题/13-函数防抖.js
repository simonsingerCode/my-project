/**防抖函数： 一个需要触发的函数，在规定的时间内，只让最后一个生效，前面的不生效
 *
 */

function debounce(fn, delay) {
  var timer = null;
  return function () {
    // 清除上一次的延时器
    clearTimeout(timer);
    // 重新设置新的延时器
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

document.getElementById('btn').onclick = debounce(function () {
  console.log('点击时间被触发了' + Date.now());
},1000)
