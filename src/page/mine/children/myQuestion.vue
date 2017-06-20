<template>
  <div class="myquestion-container">
    <div class="question-msg">
      <span>共需回答19个问题，其中10个是私密问题</span>
    </div>
     <answer-question-card v-for="index in 8" :key="index" ></answer-question-card>
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
