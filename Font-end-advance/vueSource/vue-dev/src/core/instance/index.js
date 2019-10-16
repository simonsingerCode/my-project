// => 初始化混入方法
import { initMixin } from './init'
// => state 混入方法
import { stateMixin } from './state'
// => 渲染函数的混入方法
import { renderMixin } from './render'
// => 事件的混入方法
import { eventsMixin } from './events'
// => 生命周期的混入方法
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
