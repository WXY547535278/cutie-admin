import Comheads from './IndexHead.vue'
const IndexHead = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('IndexHead', Comheads)
  }
}
export default IndexHead
