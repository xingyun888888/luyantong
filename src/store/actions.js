/**
 * Created by gaochao on 6/7/17.
 */
import  * as api  from '../service/getData';


const actions={
  /**
   * 获得用户token
   * @param state
   * @param commit
   * @returns {Promise}
   */
  gettoken({ state,commit }){
      return new Promise((resolve, reject)=> {
        let url = window.location.href.split('#')[0];
        resolve(api.getToken({url}));
      })
  },
  /**
   *
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  attentionInvestor({state,commit},params){
     return new Promise((resolve,reject)=>{
        console.log(params);
        resolve(api.attentionInvestor(params));
     })
  },
  /**
   *
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getQuestion({state,commit},params){
    return new Promise((resolve,reject)=>{
      console.log(params);
      resolve(api.getQuestion(params));
    })
  }
}
export default actions;
