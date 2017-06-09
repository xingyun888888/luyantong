/**
 * Created by gaochao on 6/7/17.
 */





export default{
  /**
   */
  getShop:({ state,commit }) => {
    if(state.shop.length != 0){
      commit('SHOPLIST',state.shop)
      return
    }else{
      return new Promise((resolve, reject)=> {
        axios({
          method:'get',
          url: 'noa/shop'
        })
          .then((response) => {
            commit('SHOPLIST',response.data.data)
            resolve(response)
          })
      })
    }
  },
  setSession:({ commit },data) => {
    commit('SESSION',data.amount)
  },
  clearSession:({ commit }) => {
    commit('CLEARSESSION')
  }
}
