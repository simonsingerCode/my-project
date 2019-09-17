## JS中的同步异步编程

  ### 1. 浏览器是多线程的, js 是单线程的(浏览器之分配一个线程来执行js)
  > 进程大，线程小： 一个进程中包含多个线程。例如：在浏览器中打开一个HTML页面，就占用了一个**进程**,加载页面的时候，浏览器分配一个**线程**去计算DOM树，分配其他的**线程**去加载对应的资源文件，再分配一个**线程**去自上而下执行js

  ### 2. 同步编程
  > 在一个线程上(主栈/主任务队列)，同一个时间只能做一件事情，当前事件完成，才能做下一个事情(先把一个任务进栈执行，执行完成出栈，再把下一个任务进栈，上一个任务出栈...)

  ### 3. 异步
  > 在主栈中执行一个任务，但是发现这个任务是一个异步操作，会把他移除主栈，放到等待任务队列当中(此时浏览器会分配其他线程监听异步任务是否到达指定的执行时间)，如果主栈执行完成，监听者会把到达时间的异步任务重新放到主栈中执行...
  + 定时器
  + 事件绑定
  + ajax
  + 回调函数
  + Promise(async/await)
  + node中fs 可以进行异步I/O操作
  + process.nextTick
  > 所有JS中的异步编程仅仅是根据某些机制来管控任务的执行顺序，不存在同时执行两个任务这一说
    + 等待队列中的任务即使到达执行条件，也不一定会执行；需要观察主线程中是否已经空闲出来，只有空闲下来才可以执行的
    + 等待区中，谁先到达时间，就把谁拿到主栈区中执行(**特殊情况之外**)
    + 如果一个循环执行时间刚好是10ms，那么 console.log(3) 的这个定时器就会放在最后面执行，详见下面代码
    + **这里面有一个重点：把一个定时器放入等待栈中的时候，就已经开始计时了**
  ```javaScript
  setTimeout(() => {
    console.log(1);
  }, 20);

  setTimeout(() => {
    console.log(2);
  }, 0);

  console.time('WHILE...');
  let i = 0;
  while (i <= 99) {
    i++;
  }
  console.timeEnd('WHILE...')

  setTimeout(() => {
    console.log(3);
  }, 10);

  console.log(4);
  // 4 3 2 1
  ```
  ### 4. ajax 请求数据的四步骤：
  ```javaScript
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
    // 状态为 4 的时候主栈空闲 ==> 只打印一次 为4
  ```
  ```javaScript
    // ajax 任务开始 从 xhr.send() 开始
    // ajax 任务结束  xhr.readyState == 4 && xhr.status == 200
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'xxx.txt', false);
    // 放在等待区的时候，此时的状态是 1，
    xhr.send();
    xhr.onreadystatechange = function () {
      // if (xhr.readyState === 4 && xhr.status === 200) {}
      // 只有状态改变时才会触发，此时在放到等待区的时候状态已经是4了，不会改变了，所以不会执行这个方法...
      console.log(xhr.readyState);
    };
    // 状态为 4 的时候主栈空闲 ==> 一次都不打印
  ```
  ### 5. Promise() 是如何异步的
    - **resolve 的作用：管控 then 里面的方法的执行；可以理解为 then 是往容器里存放方法，resolve 的作用就是用来拿取容器中的方法来执行**
    - **Promise 的原理：**
  > Promise 并不是完全的同步，挡在 excutor 中执行 resolve 或者 reject 的时候，此时是异步操作，会先执行 then/catch 等，当主栈完成后，才会再去调用 resolve/reject 把存放的方法执行

  ### 6. async/await ES7中新增的对 Promise 操作的新语法：async/await(使用 await 必须保证当前方法是基于 async 修饰的才可以)
  ```javaScript
  function AA() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        Math.random() < 0.5 ? reject() : resolve();
      }, 0);
    })
  }
  async function fn() {
    // 先把AA执行，等待AA中的 promise完成(不论成功或者失败)，把最后的处理结果获取到之后赋值给 res，拿到后在执行后面的代码
    let res = await AA();
  }
  ```
  #### 1. await 特点：
    1. 先执行 await 后面的函数；
    2. 它会暂时跳出当前正在执行的函数，也就是 await 后面的代码暂时先不执行(把后面的代码从主栈中移出，放到等待区域中)；
    3. 主栈暂时空闲
    4. 当主栈中的其他任务完成，并且 await 后面的函数返回结果回来之后，再把 await 之后的所有代码重新但回到主栈区中执行

  #### 2. 异步编程的分类
    1. **宏任务 marco task**
      1. 定时器
      2. node中的 fs
      3. 事件绑定
      4. ajax
      5. 回调函数
    2. **微任务 micro task**
      1. Promise(async/await)
      2. process.nextTick

    > 执行顺序优先级： sync同步 --> micro task(微任务) --> macro task(宏任务)

  ```javaScript
  async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
  }
  async function async2() {
    console.log('async2');
  }
  console.log('script start');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  async1();
  new Promise((resolve) => {
    console.log('promise1');
    resolve();
  }).then(() => {
    console.log('promise2');
  });
  console.log('script end');
  ```
