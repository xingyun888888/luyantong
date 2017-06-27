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
   * 获得所有投资人
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
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
           let investorInfo={
             id:result.id,
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
   * 向投资人提交问题
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  saveQuestion({state,commit},params){
     return new Promise((resolve,reject)=>{
         api.saveQuestion(params).then((res)=>{
            resolve();
         })
     })
  },


  /**
   * 关注投资人
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  followInvestor({state,commit},params){
     return new Promise((resolve,reject)=>{
        api.followInvestor(params).then((res)=>{
          resolve({message:res.data.message});
        });
     })
  },

  /**
   * 获得问题
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getQuestion({state,commit},params={url:"/api/questions"}){
    return new Promise((resolve,reject)=>{
      api.getQuestion(params).then((res)=>{
        let questionList=[];
        let pagination=null;
        let result=res.data.data;
        result.map((item,index)=>{
          questionList.push({
            id:item.id,
            summary:item.summary,
            detail:item.detail,
            photo:item.user.data.wechat.data.headimgurl,
            totalListens:item.totalListens
          });
        })
        pagination=res;

        resolve({questionList,pagination});
      });
    })
  },
  /**
   * 获得我的问题列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getMyQuestion({state,commit},params){
    return new Promise((resolve,reject)=>{
       api.getMyQuestion(params).then((res)=> {
         let myQuestionList = [];
         let result = res.data.data;
         result.map((item, index) => {
            myQuestionList.push({
              id:item.id,
              name:item.investor.data.realname,
              summary:item.summary,
              detail:item.detail,
              price:item.paid,
              is_private:item.is_private,
              totalListens:item.totalListens,
              photo:item.user.data.wechat.data.headimgurl
            })
         })

         resolve({myQuestionList})
       })
    })
  },
  /**
   * 获得我的回答列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
 getMyAnswer({state,commit},params){
   return new Promise((resolve,reject)=>{
      api.getMyAnswer(params).then((res)=>{
         let myAnswerList=[];
         let result=res.data.data;
         result.map((item,index)=>{
           myAnswerList.push({
             name:item.investor.data.realname,
             id:item.id,
             summary:item.summary,
             is_private:item.is_private,
             price:null||0,
             detail:item.detail,
             totalListens:item.totalListens,
             photo:item.user.data.wechat.data.headimgurl
           })
         })
         resolve({myAnswerList});

      })
   })
 },
  /**
   * 获得听过的问题
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
 getListenedQuestion({state,commit},params){
   return new Promise((resolve,reject)=>{
      api.getListenedQuestion(params).then((res)=>{
          let listenedQuestionList=[];
          let result=res.data.data;
          result.map((item,index)=>{
            listenedQuestionList.push({
              name:item.investor.data.realname,
              id:item.id,
              summary:item.summary,
              is_private:item.is_private,
              price:null||0,
              detail:item.detail,
              totalListens:item.totalListens,
              photo:item.user.data.wechat.data.headimgurl
            })
          })
          resolve({listenedQuestionList})
      })
   })
 },



  /**
   * 获得问题详情
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getQuestionDetail({state,commit},params){
    return new Promise((resolve,reject)=>{
      api.getQuestionDetail(params).then((res)=>{
         let result = res.data.data;
         console.log(result);
         resolve({
           answer:result.answer,
           bp_images:result.bp_images,
           detail:result.detail,
           id:result.id,
           totalListens:result.totalListens,
           summary:result.summary,
           photo:result.user.data.wechat.data.headimgurl
         });
      })
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
           amount_per_project_checked,
           investment_stages,
           investment_stages_checked,
           plan_to_invest_amount,
           plan_to_invest_amount_checked
         });


       });
    })
  },

  /**
   *  获得投资领域列表
   * @param state
   * @param commit
   * @param params
   */
  getCategories({state,commit},params){
     return new Promise((resolve,reject)=>{
        api.getCategories(params).then((res)=>{
            console.log(res);
            let result = res.data.data;
            let investCategories=[];
            result.map((item,index)=>{
              investCategories.push({
                title:item.title,
                id:item.id,
                icon:item.icon,
                url:item.url
              })
            })

          resolve({investCategories});

        })
     })

  },
  /**
   * 获得投资人列表信息
   * @param state
   * @param commit
   * @param params
   * @returns {Promise}
   */
  getFieldInvestorList({state,commit},params={url:""}){
    return new Promise((resolve,reject)=>{
      api.getFieldInvestorList(params).then((res)=>{
        let result = res.data.data.investors.data;
        console.log(result);
        let investorList=[];
        let investorsTotal=res.data.data.investorsTotal;
        result.map((item,index)=>{
          investorList.push({
            id:item.id,
            realname:item.realname,
            investment_fields:item.investment_fields,
            photo:item.user.data.wechat.data.headimgurl,
            isFollowing:item.isFollowing,
            answer:item.totalQuestionsAnswers

          });
        })
         resolve({investorList,investorsTotal});
      })
    })
  }


}

export default actions;
