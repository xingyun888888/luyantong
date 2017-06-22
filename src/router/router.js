import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

//测试页面
import App from '../App';
import hello from '../page/hello/Hello';
import Swiper from '../page/hello/Swiper';
import Timeline from'../page/hello/Timeline';

//找投资人页面
import invest from '../page/invest';
import investorDetail from '../page/invest/children/investorDetail';
import moreField from '../page/invest/children/moreField';

import investorList from '../page/invest/children/investorList';

import questionDetail from '../page/invest/children/questionDetail';

/**
 * 我的主页
 */
import mine from '../page/mine/mine';

import waitAnswerDetail from '../page/mine/children/waitAnswerDetail';

import myAnswer from '../page/mine/children/myAnswer';

import waitAnswer from '../page/component/waitAnswer';

import  answered  from '../page/component/answered';

import myQuestion from '../page/mine/children/myQuestion';

import myQuestionDetail from '../page/mine/children/myQuestionDetail';

import  investPreference from "../page/mine/children/investPreference";

import personInfo from "../page/mine/children/personInfo";

import toBeInvestor from "../page/mine/children/toBeInvestor";

import withdrawDepositApply from "../page/mine/children/withdrawDepositApply";

import withdrawDepositRecord from "../page/mine/children/withdrawDepositRecord";

import financialDetail from "../page/mine/children/financialDetail";

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
            path:"/toBeInvestor",
            component:toBeInvestor
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
            path:"/myQuestionDetail",
            component:myQuestionDetail
          },
          {
            path:"/investPreference",
            component:investPreference
          },
          {
            path:"/personInfo",
            component:personInfo
          },
          {
            path:"/withdrawDepositApply",
            component:withdrawDepositApply
          },
          {
            path:"/withdrawDepositRecord",
            component:withdrawDepositRecord
          },
          {
            path:"/financialDetail",
            component:financialDetail
          }
       ]
     }
    ]
})
