<template>
  <div>
    <div class="question-title-msg">
      <p>共需回答<span>10</span>个问题，其中<span>1</span>个是私密问题</p>
    </div>
    <answered-question-card v-for="index in 8" :key="index"></answered-question-card>
  </div>
</template>
<script>
  import answeredQuestionCard from '../common/answeredQuestionCard'
  export default{

    data(){
      return{

      }
    },
    components:{answeredQuestionCard}
  }
</script>
<style lang="scss" scoped>

</style>
