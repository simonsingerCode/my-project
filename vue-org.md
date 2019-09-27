# vue 官网笔记

## Vue 中使用 new 调用 vue 都做了那些事儿
  ### 做了4件事儿：
  1. 创建一个新对象
  2. 这个新对象会被 `__proto__` 指向 构造函数的原型
  3. 函数调用 this 会被绑定在创建的新对象上
  4. new 调用的函数会自动返回一个新创建好的对象
---

## 在vue项目中，使用用回调函数应该注意事项：
  - 不要在选项属性或者回调函数中使用**箭头函数**
---

## slot 插槽
  1. 父级模版里的所有内容都是在父级作用于中编译的；子级模版里的所有内容都是在子级作用域中编译的
  2. ***在 slot中使用 `template` 的时候，要注意 `v-slot` 只能使用在 `<template>` 上***
  3. 具名插槽和作用域插槽不能同时出现在一个组件中
  4. 具名插槽,在父组件中使用 `v-slot:slotName` ; 而作用域插槽，在父组件中使用见下：
      ```javaScript
      // html 页面
       <current-user v-slot:default="slotProps">
          {{slotProps.userText.fullName}}
        </template>
      </current-user>

      // script 页面
      Vue.component('current-user',{
        template:`<div>
            <slot :userText="user" >{{user.firstName}}</slot>
          </div>`,
          data(){
            return {
              user: {
                firstName:'爱新觉罗氏',
                lastName: '玄烨',
                fullName: '爱新觉罗 玄烨'
              }
            }
          }
      });

      var vm= new Vue({
        el: '#app'
      });
      ```
  5. 如果要有多个插槽，始终要为所有插槽使用完整的基于 `<template>` 的写法
---

## vue 组件
  1. 组件中的 `data` 必须是一个函数
  2. 组件中的模版必须**只有一个根节点**

---

## 动态组件
  1. 动态组件是将几个组件放在要给挂载点上，然后根据父组件中的某个变量来决定显示那个，或者都不显示
  2. 挂载点使用 `component` 标签，然后使用 `:is="组件名"`,它会自动匹配组件名
---

## 组件边界问题
  1. 通过 `$root` 可以访问到根组件 ，也就是 `new Vue()` 出来的组件
  2. `$parent` 用来从一个子组件访问父组件的实例
  3. **依赖注入** `provide` 和 `iject`; 这个用法可以让我们在 ***任意后代组件中访问*** 我们传递的属性/方法
      - `provide` 选项允许我们指定我们想要提供给后代组件的数据/方法
        ```javaScript
        provide: function () {
          return {
            getMap: this.getMap
          }
        }
        ```
      - `inject` 后代组件里，使用 `inject` 选项来接收指定的要添加在这个实例上的属性
        ```javaScript
        inject: ['getMap']
        ```
  4. `Vue 程序化的事件侦听器 (就是说创建实例和清楚实例放在一起)`
        ```javaScript
        mounted(){
          const timer = clearInteval(()=>{
            // 某些定时器操作
          },5000);
          // 通过使用 $once 来监听定时器，在 beforeDestroy 钩子可以被清除
          this.$once('hook:beforeDestroy', ()=>{
            clearInteval(timer);
          })
        }
        ```
      ---
      甚至还可以在一个页面开启多个这种创建实例和销毁实例
        ```javaScript
        mounted(){
          this.attachDatepicker('startDateInput')
          this.attachDatepicker('endDateInput')
        },

        methods:{
          attachDatepicker(refName){
            var picker = new Pikaday({
              field: thsi.$refs[refName],
              format: 'YYYY-MM-DD'
            })

            this.$once('hook:beforeDestroy', function(){
              picker.destroy()
            })
          }
        }
        ```
  5. vue 强制更新使用 `$forceUpdate` 来做；如果这样通常情况下是在某个地方做错了事儿
---

## mixin 混入
  1. 一个混入对象可以包含任意组件选项。
  2. 选项合并：组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并。
      - 数据对象在内部会进行递归合并，并在发生冲突时已组建数据优先
      - 同名钩子函数将会合并为一个数组，因此都将被调用。混入对象的钩子将在组自身钩子之前调用
      - 组件和混入对象在合并时，`methods` `components` `directives`, 将被合并为同一个对象。两个对象键值对名冲突时，取组建对象的键值对。
  3. 全局混入：`Vue.mixin({})`;
  4. 自定义选项的合并策略。使用 `Vue.config.optionMergeStrategies.myOption = function(toVal, fromVal){// 返回合并后的值}`
---

## 自定义指令 `Vue.directive(directiveName, options)`
  1. 自定义指令和组件一样；都有 **全局** 和 **局部**
  2. 自定义指令的钩子函数：
      - `bind` 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      - `inserted` 被绑定元素插入到父节点时调用
      - `update` 所在组件的 VNode 更新时调用，但是可能发生在其子 vnode 更新之前。
      - `componentUpdated` 指令在所有组件的 vnode 及其子 vnode 全被更新后调用
      - `unbind` 只调用一次，指令与元素接棒时调用。
      ---

  3. 指令的钩子函数传入以下参数：
      - `el` 指令绑定的元素
      - `binding` 一个对象，包含以下属性
          - `name` 指令名，不包括 v- 前缀
          - `value` 指令的绑定值
          - `oldValue` 指令绑定的前一个值，仅在 update 和 componentUpdated 狗子中可用。无论值是否变化都可用
          - `expression` 字符串形式的指令表达式
          - `arg` 传给指令的参数
          - `modifiers` 一个包含修饰符的对象
      - `vnode` Vue 编译生成的虚拟节点。
      - `oldVnode` 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
---

## 渲染函数 & jsx
  1.
