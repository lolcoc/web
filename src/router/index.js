import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/page/Login'
import Register from '../components/page/Registere'
import Date from '../components/util/Date'
import ElementUI from 'element-ui'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '欢迎登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '欢迎注册'
      }
    },
    {
      path: '/date',
      name: 'Date',
      component: Date
    }
  ]
})
