// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router/router.js'

import store from "./store"

import {sync} from 'vuex-router-sync'

require("./config/rem.js");

require('vconsole');

const FastClick = require('fastclick')

FastClick.attach(document.body);


store.registerModule('vux', { //
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

/**
 * 引入微信jssdk
 */
import {WechatPlugin,ToastPlugin,ConfirmPlugin} from 'vux'

Vue.use(WechatPlugin);
Vue.use(ToastPlugin);
Vue.use(ConfirmPlugin);

Vue.config.productionTip = false



//路由和store同步
sync(store, router)



// simple history management
/*const history = window.sessionStorage

history.clear()

let historyCount = history.getItem('count') * 1 || 0

history.setItem('/', 0)

*/
router.afterEach(function (to) {
  window.scrollTo(0, 0)
  setTimeout(() => {
    //store.commit('updateLoadingStatus', {isLoading: false})
  }, 10)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //template: '<App/>',
  //render:h=>h(App),
 // components: { App }
})
