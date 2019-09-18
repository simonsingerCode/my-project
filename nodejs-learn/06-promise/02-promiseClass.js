class Promise {
  constructor (exectueCallBack) {
    this.status = 'pending';
    this.value = undefined;
    this.fulfilledAry = [];
    this.rejectedAry = [];

    let resolveFn = result => {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        if (this.status !== 'pending') return;
        this.status = 'fulfilled';
        this.value = result;
        this.fulfilledAry.forEach(item => item(this.value));
      },0)
    };

    let rejectFn = reason => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if (this.status !== 'pending') return;
        this.status = 'rejected';
        this.value = reason;
        this.rejectedAry.forEach(item => item(this.value));
      }, 0);
    };

    try {
      exectueCallBack(resolveFn, rejectFn);
    } catch(err) {
      // => 有异常信息，按照 reject 状态处理
      rejectFn(err)
    }
  }

  // 这是ES6 类的原型中的方法
  then(fuifilledCallBack,rejectedCallBack) {
    // 这里面需要创建两个容器，挂载在promise的实例上，待执行then中某一个方法的时候，在对应的容器中拿取数据
    this.fulfilledAry.push(fuifilledCallBack);
    this.rejectedAry.push(rejectedCallBack);
  }
}

module.exports = Promise;
