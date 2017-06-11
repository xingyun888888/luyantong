/**
 * Created by gaochao on 6/7/17.
 */



import axios from "axios"

const actions={
  gettoken({ state,commit }){
    debugger;
      return new Promise((resolve, reject)=> {
        let url = window.location.href.split('#')[0];
        axios({
          method:'get',
          url: 'http://smile888.applinzi.com/getToken.php',
          params:{url}
        }).then((response) => {
            commit('GET_TOKEN',response)
            resolve(response)
        })
      })
  }
}
export default actions;