/**
 * Created by gaochao on 6/7/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from "./state"

Vue.use(Vuex);
//console.log(actions);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
