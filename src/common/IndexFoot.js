import Comheads from './IndexFoot.vue'
const IndexFoot = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('IndexFoot', Comheads)
  }
}
export default IndexFoot
