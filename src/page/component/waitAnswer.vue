<template>
  <div>
    <div class="question-title-msg">
      <p>共需回答<span>19</span>个问题，其中<span>10</span>个是私密问题</p>
    </div>
    <router-link v-for="index in 8" :key="index" to="/waitAnswerDetail" tag="li">
      <question-detail-card ></question-detail-card>
    </router-link>
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
