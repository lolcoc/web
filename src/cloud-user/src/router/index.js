import Vue from 'vue'
import Router from 'vue-router'
/**
 * 第一步   引入文件
 */
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'

Vue.use(Router)

/**
 * 第二步   添加路由
 * mode  必填
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Register',
      component: Register
    }
  ]
})
