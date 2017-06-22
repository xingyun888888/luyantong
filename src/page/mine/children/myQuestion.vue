<template>
  <div class="myquestion-container">
    <div class="question-title-msg">
      <p>共需回答<span>19</span>个问题，其中<span>10</span>个是私密问题</p>
    </div>
    <router-link v-for="index in 8" :key="index" to="/myQuestionDetail" tag="li" >
     <answer-question-card ></answer-question-card>
    </router-link>
  </div>
</template>
<script>
  import answerQuestionCard from '../../common/answeredQuestionCard.vue';

  import reSetTitleUtil from "../../common/RestTitle"

  export default{
      mounted(){
          reSetTitleUtil.reSetTitle("我的问题");
      },
      data(){
          return{

          }
      },
      components:{answerQuestionCard}
  }
</script>
<style lang="scss" scoped>
  .myquestion-container{

  }
</style>
