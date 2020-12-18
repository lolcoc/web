import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/**
 * 第一步   引入文件
 */
import Test from '@/components/Test'

Vue.use(Router)

/**
 * 第二步   添加路由
 * mode  必填
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
