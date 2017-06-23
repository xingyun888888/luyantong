/**
 * Created by gaochao on 6/7/17.
 */

export default{
  GET_TOKEN(state,data) {
    state.token = data;
  },
  GET_INVESTORS(state,data){
    state.investors=data
  }
}
