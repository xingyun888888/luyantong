<template>
  <div class="invest-detail-container">
    <invest-head></invest-head>
    <div class="zm-split-line"></div>
    <question-add></question-add>
    <div class="zm-split-line"></div>
    <div class="question-msg">
      <span>共回答{{totalQuestion}}个问题，其中{{privateQuestion}}个是私密问题，以下不展示</span>
    </div>
    <router-link v-for="i in 8" :key="i" to="questionDetail" tag="li">
      <request-card ></request-card>
    </router-link>
  </div>
</template>
<script>
    import  investHead  from  "../../component/investHead.vue"
    import questionAdd  from "../../component/questionAdd.vue"
    import RequestCard from '../../common/questionCard'
    export default{
        data(){
           return{
              totalQuestion:64,
              privateQuestion:23
           }
        },
        methods:{
        },
        components:{
           investHead,questionAdd,RequestCard
        }

    }
</script>
<style lang="scss">
  .invest-detail-container{
    margin-bottom:5rem;
  }
</style>
