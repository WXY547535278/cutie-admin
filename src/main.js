// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ElementUI ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 公共css样式文件
import '../static/css/style.css'

// font-awesome图标
import 'font-awesome/css/font-awesome.css'

// 公共组件
import ComHead from './common/ComHead'
import ComLeft from './common/ComLeft'
import Notice from './common/Notice'
import IndexHead from './common/IndexHead'
import IndexFoot from './common/IndexFoot'

// axios安装
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ComHead)
Vue.use(ComLeft)
Vue.use(Notice)
Vue.use(IndexHead)
Vue.use(IndexFoot)

Vue.use(ElementUI)

Vue.config.productionTip = false

// 设置页面标题 关键字 简介
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
