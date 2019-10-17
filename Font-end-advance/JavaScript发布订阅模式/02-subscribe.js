let subscribe = (function () {
  // => Subscribe 发布订阅类
  class Subscribe {
    constructor () {
      // 创建一个事件池，用来存储后期需要执行的方法
      this.pond = [];
    }

    // => 向事件池中追加方法
    add(fn) {
      if (typeof fn != 'function') return;
      // => 去重处理
      // let flag = this.pond.some(item => {
      //   return item === fn;
      // })
      // !flag ? this.pond.push(fn) : null;

      if (!this.pond.includes(fn)) {
        this.pond.push(fn);
      }
    }

    // => 移除事件池中的方法
    remove(fn) {
      let pond1 = this.pond;
      for (let i = 0; i < pond1.length; i++) {
        let item = pond1[i];
        if (item === fn) {
          // => 移除(顺序不变的情况下基本上只能使用 splice)，但是不能这样写，这样
          // 导致数组塌陷问题，我们移除不能真移除，只能把当前项赋值为null
          // pond1.splice(i, 1);

          pond1[i] = null;
          break;
        }
      }
    }

    // => 通知事件池中的方法按顺序依次执行
    fire(...args) {
      let $pond = this.pond;
      for (let i = 0; i < $pond.length; i++) {
        let item = $pond[i];
        if (typeof item !== 'function') {
          // => 此时再删除
          $pond.splice(i, 1);
          i--;
          continue;
        }
        item.call(this,...args);
      }
    }
  }

  // 暴露给外边使用
  return function subscribe() {
    return new Subscribe();
  }
})();

