<template>
  <div>
    <div class="question-msg">
      <span>共需回答19个问题，其中10个是私密问题</span>
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
