<template>
  <div class="invest-detail-container">
    <invest-head></invest-head>
    <question-add></question-add>
    <request-card v-for="i in 8" :key="i"></request-card>
  </div>
</template>
<script>
    import  investHead  from  "../../component/investHead.vue"
    import questionAdd  from "../../component/questionAdd.vue"
    import RequestCard from '../../common/questionCard'
    export default{
        data(){
           return{

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
