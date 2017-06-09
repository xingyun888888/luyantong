import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

//测试页面
const App = r => require.ensure([], () => r(require('../App')), 'app')
const hello = r => require.ensure([], () => r(require('../page/hello/Hello')), 'hello')
const Swiper = r => require.ensure([], () => r(require('../page/hello/Swiper')), 'swiper')
const Timeline = r => require.ensure([], () => r(require('../page/hello/Timeline')), 'timeline')

/**
 * 我的主页
 */
const Mine=  r => require.ensure([], () => r(require('../page/mine/mine')), 'mine')



Vue.use(Router)

export default new Router({
  routes: [
    //测试页面
    {
      path:"/",
      component:App,
      children:[
          {
            path:"",
            redirect:"/hello"
          },
          {
            path: '/swiper',
            component: Swiper
          },
          {
            path: '/timeline',
            component: Timeline
          },
          {
            path:"/hello",
            component:hello
          }
      ]
    }
  ]
})
