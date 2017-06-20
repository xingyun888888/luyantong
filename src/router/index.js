import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

//测试页面
const App = r => require.ensure([], () => r(require('../App')), 'app')
const hello = r => require.ensure([], () => r(require('../page/hello/Hello')), 'hello')
const Swiper = r => require.ensure([], () => r(require('../page/hello/Swiper')), 'swiper')
const Timeline = r => require.ensure([], () => r(require('../page/hello/Timeline')), 'timeline')

//找投资人页面
const invest = r => require.ensure([], () => r(require('../page/invest')), 'invest')
const investorDetail=r => require.ensure([], () => r(require('../page/invest/children/investorDetail')), 'investorDetail')
const  moreField=r => require.ensure([], () => r(require('../page/invest/children/moreField')), 'moreField')

const investorList=r => require.ensure([], () => r(require('../page/invest/children/investorList')), 'investorList')

const questionDetail=r => require.ensure([], () => r(require('../page/invest/children/questionDetail')), 'questionDetail')

/**
 * 我的主页
 */
const mine=  r => require.ensure([], () => r(require('../page/mine/mine')), 'mine')

const waitAnswerDetail = r => require.ensure([],()=>r(require('../page/mine/children/waitAnswerDetail')),'waitAnswerDetail')

const myAnswer = r =>require.ensure([],()=>r(require('../page/mine/children/myAnswer')),'myAnswer')

const waitAnswer = r =>require.ensure([],()=>r(require('../page/component/waitAnswer')),'waitAnswer')

const answered=r => require.ensure([],()=>r(require('../page/component/answered')),'answered')

const myQuestion=r => require.ensure([],()=>r(require('../page/mine/children/myQuestion')),'myQuestion')

const investPreference =r =>require.ensure([],()=>r(require("../page/mine/children/investPreference")),'investPreference')

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
            redirect:"/invest"
          },
          {
            path: '/swiper',
            component: Swiper
          },
          {
            path: '/timeline',
            component: Timeline
          },
        //找投资的页面
          {
            path:"/hello",
            component:hello
          },
          {
            path:"/invest",
            component:invest,
          },
          {
            path:"/investorDetail",
            component:investorDetail
          },
          {
            path:"/moreField",
            component:moreField
          },
          {
            path:"/investorList",
            component:investorList
          },
          {
            path:"/questionDetail",
            component:questionDetail
          },
          //我的资料页面
          {
             path:"/mine",
             component:mine
          },
          {
            path:"/waitAnswerDetail",
            component:waitAnswerDetail
          },
          {
            path:"/myAnswer",
            component:myAnswer,
            children:[
              {
                path:"/waitAnswer",
                component:waitAnswer
              },
              {
                path:"/answered",
                component:answered
              }
            ]
          },
          {
            path:"/myQuestion",
            component:myQuestion
          },
          {
            path:"/investPreference",
            component:investPreference
          }
       ]
     }
    ]
})
