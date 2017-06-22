// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router/router.js'

import store from "./store"

import {sync} from 'vuex-router-sync'

require("./config/rem.js");

const FastClick = require('fastclick')

FastClick.attach(document.body);

/**
 * 引入微信jssdk
 */
import {WechatPlugin,ToastPlugin,ConfirmPlugin} from 'vux'

Vue.use(WechatPlugin);
Vue.use(ToastPlugin);
Vue.use(ConfirmPlugin);


//
// Vue.config({
//   debug:true,
//   appId	:	"wxda4d3c7659b5fc61",
//   timestamp	:	new Date().getTime(),
//   nonceStr	:	"",
//   signature	:"",
//   jsApiList:[
//     "getLocation","getLocation","previewImage"
//   ]
// })


Vue.config.productionTip = false



//路由和store同步
//sync(store, router)



// simple history management
/*const history = window.sessionStorage

history.clear()

let historyCount = history.getItem('count') * 1 || 0

history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})
*/
// router.afterEach(function (transition) {
//   setTimeout(() => {
//     window.scrollTo(0, 0)
//   }, 0)
// })





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //template: '<App/>',
  //render:h=>h(App),
 // components: { App }
})
