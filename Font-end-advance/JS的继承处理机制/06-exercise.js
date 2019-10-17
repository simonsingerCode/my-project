// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Parent.prototype.getName = function () {
//   console.log(this.name);
// };
// Parent.prototype.getAge = function () {
//   console.log(this.age);
// };
// function Child(name, age, job) {
//   Parent.call(this,name,age);
//   this.job = job;
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
// Child.prototype.getJob = function () {
//   console.log(this.job);
// };

// let p = new Child('simon', 30, 'software');
// p.getName();
// p.getAge();
// p.getJob()


// ES6中的方法
// class Parent {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
//   getName() { console.log(this.name);}
//   getAge() { console.log(this.age);}
//   getJob() { console.log(this.job);}
// }

// class Child extends Parent {
//   constructor (years) {
//     super('Camel', 30, 'Engineer');
//     this.years = years;
//   }
//   getYears() { console.log(this.years);}
// }

// let p = new Child(5);
// p.getName();
// p.getYears();
// p.getAge();
// p.getJob();



/*
let yourMsg = {};
yourMsg.peopleList = [];
yourMsg.listen = function (fn) {
  this.peopleList.push(fn);
};

yourMsg.triger = function () {
  let that = this;
  let args = arguments;
  setTimeout(() => {
    for (let i = 0, fn; fn = that.peopleList[i++];) {
      fn.apply(that, args);
    }
  }, 2000);
}

yourMsg.listen(function () {
  console.log('我被通知之了，我去参见会议，给我事件地点');
  console.log(`title:${arguments[0]}`);;
  console.log(`title:${arguments[1]}`);
});

yourMsg.listen(() => {
  console.log('我被通知了，但是我不care');
});

yourMsg.listen(function () {
  console.log('我被通知了，Jack代替我去');
});

yourMsg.triger('会议', '3:00');

*/




// let yourMsg = {};
// yourMsg.peopleList = [];
// yourMsg.listen = function (key, fn) {
//   if (!this.peopleList[key]) {
//     this.peopleList[key] = []; // 如果非类中没有此类型的信息，则新建一个
//   }
//   this.peopleList[key].push(fn);
// }

// yourMsg.triger = function () {
//   let key = Array.prototype.shift.call(arguments);
//   let fns = this.peopleList[key];
//   let that = this;
//   let args = arguments;
//   if (!fns) {
//     return false;
//   }
//   setTimeout(() => {
//     for (let i = 0, fn; fn = fns[i++];) {
//       fn.apply(that, args);
//     }
//   }, 200);
// }

// yourMsg.listen('prod', function () {
//   console.log('小A：我只关心会议消息，其他的事别来烦我');
//   console.log(`title: ${arguments[0]}`);
//   console.log(`title: ${arguments[1]}`);
// });

// yourMsg.listen('prod', function () {
//   console.log('小B：会议是我精神倍爽百倍!');
//   console.log(`title: ${arguments[0]}`);
//   console.log(`title: ${arguments[1]}`);
// });

// yourMsg.listen('tech', function () {
//   console.log('小C：我只关心技术会议，产品会议让那些傻瓜去吧');
// });

// yourMsg.listen('tech', function () {
//   console.log('小D：又到技术会议时间了？我是被逼的!');
// });

// yourMsg.triger('prod', '开会啦', '下午3:00');
// yourMsg.triger('tech');



// let installer = {
//   peopleList: [],
//   listen(key, fn) {
//     if (!this.peopleList[key]) {
//       this.peopleList[key] = [];
//     }
//     this.peopleList[key].push(fn);
//   },
//   triger() {
//     let key = Array.prototype.shift.call(arguments),
//       fns = this.peopleList[key],
//       that = this,
//       args = arguments;
//     if (!fns) {
//       return false;
//     }

//     setTimeout(() => {
//       for (let i = 0, fn; fn = fns[i++];) {
//         fn.apply(that, args);
//       }
//     }, 200);
//   },
//   remove(key, fn) {
//     let fns = this.peopleList[key];
//     if (!fns) {
//       return false;
//     }

//     for (let index = 0; index < fns.length; index++) {
//       const _fn = fns[index];
//       if (_fn === fn) {
//         fns.splice(index, 1);
//       }
//     }
//   }
// }

// let yourMsg = Object.create(installer);
// yourMsg.listen('prod', function () {
//   console.log('小A： 我只关心会议消息，其它的事别来烦我')
//   console.log(`title:${arguments[0]}`);
//   console.log(`time:${arguments[1]}`);
// });

// yourMsg.listen('prod', function () {
//   console.log('小B： 会议使我精神百倍！')
//   console.log(`title:${arguments[0]}`);
//   console.log(`time:${arguments[1]}`);
// });

// let smA = function () {
//   console.log('小C：我只关心技术会议，产品开会让那些傻瓜去吧');
// };

// let smB = function () {
//   console.log('小D：又到技术会议时间了？我是被逼的!');
// };

// yourMsg.listen('tech', smA);
// yourMsg.listen('tech', smB);

// yourMsg.remove('tech', smA);

// yourMsg.triger('prod', '开会啦', '下午3:00');
// yourMsg.triger('tech', smA);


// let subscribe = (function () {
//   class Subscribe {
//     constructor () {
//       this.pond = [];
//     }

//     add(fn) {
//       if (typeof fn !== 'function') return false;
//       if (!this.pond.includes(fn)) {
//         this.pond.push(fn);
//       }
//     }

//     remove(fn) {
//       let pond1 = this.pond;
//       for (let i = 0; i < pond1.length; i++) {
//         let item = pond1[i];
//         if (item === fn) {
//           pond1[i] = null;
//         }
//       }
//     }

//     fire(...args) {
//       let $pond = this.pond;
//       for (let i = 0; i < $pond.length; i++) {
//         let item = $pond[i];
//         if (typeof item != 'function') {
//           $pond.splice(i, 1);
//           i--;
//           continue;
//         }
//         item.call(this, ...args);
//       }
//     }
//   }

//   return function () {
//     return new Subscribe();
//   }
// })();
