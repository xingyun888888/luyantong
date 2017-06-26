<template>
  <div class="myquestion-container">
    <div class="question-title-msg">
      <p>共需回答<span>19</span>个问题，其中<span>10</span>个是私密问题</p>
    </div>
    <router-link v-for="(item,index) in myQuestionList" :key="index" to="{path:'myQuestionDetail',query:{id:item.id}}" tag="li" >
     <answer-question-card :value="item"></answer-question-card>
    </router-link>
  </div>
</template>
<script>
  import answerQuestionCard from '../../common/answeredQuestionCard.vue';

  import reSetTitleUtil from "../../common/RestTitle"

  import {mapActions} from 'vuex'

  export default{
      mounted(){
          reSetTitleUtil.reSetTitle("我的问题");
          this.getMyQuestion().then((res)=>{
              console.log(res);
              this.myQuestionList=res.myQuestionList;
          })
      },
      data(){
          return{
             myQuestionList:[]
          }
      },
      methods:{
        ...mapActions(['getMyQuestion'])
      },
      components:{answerQuestionCard}
  }
</script>
<style lang="scss" scoped>
  .myquestion-container{

  }
</style>
