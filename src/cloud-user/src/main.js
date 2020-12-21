// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* 引入element UI */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8002/user/'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
/* 引入element UI */
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
