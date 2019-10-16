// => 这是实现vue的核心方法
import Vue from './instance/index'
// => 初始化全局的一些 api
import { initGlobalAPI } from './global-api/index'
// => 获取一个 Boolean 类型的变量，来判断是不是 ssr
import { isServerRendering } from 'core/util/env'
// => 实现渲染功能的上下文
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
// => 这里开始执行全局化变量
initGlobalAPI(Vue)
// => 为Vue 原型定义属性 $isServer
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// => 为 Vue 原型定义属性 $ssrContext
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
