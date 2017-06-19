<template>
  <div class="myquestion-container">
     <answer-question-card v-for="index in 8" :key="index" ></answer-question-card>
  </div>
</template>
<script>
  import answerQuestionCard from '../../common/answeredQuestionCard.vue';
  export default{
      data(){
          return{

          }
      },
      components:{answerQuestionCard}
  }
</script>
<style lang="scss" scoped>

</style>
