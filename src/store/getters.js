/**
 * Created by gaochao on 6/7/17.
 */


export default{
  //投资人信息
  Investors(state,getters,rootState){
    return state.investors
  },




  Shop:(state,getters,rootState) => {
    return state.shop
  },
  System:(state,getters,rootState) => {
    return rootState.common.system
  }
}
