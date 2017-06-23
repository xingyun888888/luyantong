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

  getInvestors({ state,commit },params={page:1}){
    return new Promise((resolve,reject)=>{
      let result=api.getInvestors(params).then((res)=>{
        let result = res.data;
        let investorList=[];
        let pagination=null;
        result.data.map((item,index)=>{
          investorList.push({
            name:item.realname,
            investment_fields:item.investment_fields||["互联网","电子商务","电子商务"],
            isFollowing:item.isFollowing,
            answer:item.totalQuestionsAnswers,
            position:"创投孵化器/创投总监",
            photo:item.user.data.wechat.data.headimgurl,
            id:item.id,
            url:item.url
          })
        })
        pagination=result.meta.pagination;
        resolve({investorList,pagination})

      });
    })
  },

  /**
   * 获得投资人详情信息
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getInvestorDetail({state,commit},params={url:""}){
     return new Promise((resolve,reject)=>{
        api.getInvestorDetail(params).then((res)=>{
           let result=res.data.data;
           console.log(result);
           let investorInfo={
             name:result.realname,
             isFollowing:result.isFollowing,
             investment_fields:result.investment_fields,
             city:result.city,
             self_introduction:result.self_introduction,
             photo:result.user.data.wechat.data.headimgurl,
             total_follow:result.total_follow,
             totalQuestionsAnswers:result.totalQuestionsAnswers,
             position:"创投孵化器/创投总监"

           };

           resolve({investorInfo})


        });
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
  },

  /**
   * 投资偏好信息
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getInvestPreference({state,commit},params){
    return new Promise((resolve,reject)=>{
       api.getInvestPreference(params).then((res)=>{
          let result = res.data;
          console.log(result);

          let amount_per_project=[];
          let investment_stages=[];
          let plan_to_invest_amount=[];
          let amount_per_project_checked=result.amount_per_project.checked;
          let investment_stages_checked=result.investment_stages.checked;
          let plan_to_invest_amount_checked=result.plan_to_invest_amount.checked;

         Object.keys(result.amount_per_project).map((item,index)=>{
           if(item!="checked"){
             amount_per_project.push(item);
           }
         })
         Object.keys(result.investment_stages).map((item,index)=>{
           if(item!="checked"){
             investment_stages.push(item);
           }
         })
         Object.keys(result.plan_to_invest_amount).map((item,index)=>{
           if(item!="checked"){
             plan_to_invest_amount.push(item);
           }
         })
         resolve({
           amount_per_project,
           investment_stages,
           plan_to_invest_amount,
           amount_per_project_checked,
           investment_stages_checked,
           plan_to_invest_amount_checked
         });


       });
    })
  }

}
export default actions;
