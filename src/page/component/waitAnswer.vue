<template>
  <div>
    <div class="question-msg">
      <span>共需回答19个问题，其中10个是私密问题</span>
    </div>
    <question-detail-card v-for="index in 8" :key="index"></question-detail-card>
  </div>
</template>
<script>
  import questionDetailCard from '../common/questionDetailCard'
  export default{

     data(){
         return{

         }
     },
     components:{questionDetailCard}
  }
</script>
<style lang="scss" scoped>

</style>
