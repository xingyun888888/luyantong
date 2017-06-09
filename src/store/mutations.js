/**
 * Created by gaochao on 6/7/17.
 */

export default{
  'SHOPLIST'(state, data) {
    state.shop = data
  },
  'SESSION'(state, data) {
    state.session = data
  },
  'CLEARSESSION'(state, data) {
    localStorage.removeItem('token')
    state.token = null
  }
}
