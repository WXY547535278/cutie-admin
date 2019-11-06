import Comfoot from './ComLeft.vue'
const ComLeft = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('ComLeft', Comfoot)
  }
}
export default ComLeft
