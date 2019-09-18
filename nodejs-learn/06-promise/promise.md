## Promise A+ 规范

### 1. 三种状态 pending、fulfilled、rejected
### 2. promise 使用复习
  - 非管控装异步操作
  - Promise.all([promise1, promise2...]) 等待所有的 promise 都成功执行 then，反之有一个失败就执行 catch
  - **模拟Promise实现的原理：**

  ```javaScript
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
  ```
---
### 3. 实现then方法的链式调用
  - 只需要在then里面返回一个新的Promise对象即可,同时我们在向 fulfilledAry中push 的时候，放的是一个匿名函数，在这个匿名函数里处理成功和失败的 resolve 和 reject 的回调
  - 详见如下代码：
    ```javaScript
    class Promise {
      constructor(exectueCallBack){

      }

      // 这是ES6 类的原型中的方法
      // 这里是实现 then 链式回调的核心
      then(fuifilledCallBack, rejectedCallBack) {
        // 这里面需要创建两个容器，挂载在promise的实例上，待执行then中某一个方法的时候，在对应的容器中拿取数据
        // this.fulfilledAry.push(fuifilledCallBack);
        // this.rejectedAry.push(rejectedCallBack);

        // => 执行then 返回的是一个新的promise实例
        return new Promise((resolve, reject) => {
          this.fulfilledAry.push(() => {
            try {
              let x = fuifilledCallBack(this.value);
              x instanceof Promise ? x.then(resolve, reject) : resolve(x);
            } catch (err) {
              reject(err)
            }
          });

          this.rejectedAry.push(() => {
            try {
              let y = rejectedCallBack(this.value);
              y instanceof Promise ? y.thne(resolve, reject) : resolve(y);
            } catch (err) {
              reject(err)
            }
          });
        })
      }
    }
    ```
