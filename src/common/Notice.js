import Notices from './Notice.vue'
const Notice = {
  install: function (Vue) {
    // Vue.component()是用来注册全局组件的
    Vue.component('Notice', Notices)
  }
}
export default Notice
