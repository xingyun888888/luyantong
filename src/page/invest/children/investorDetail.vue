<template>
  <div class="invest-detail-container">
    <invest-head></invest-head>
    <question></question>
    <request-list></request-list>
  </div>
</template>
<script>
    import  investHead  from  "../component/investHead.vue"
    import question  from "../component/question.vue"
    import requestList from "../component/requestList.vue"
    export default{
        data(){
           return{

           }
        },
        methods:{
        },
        components:{
           investHead,question,requestList
        }

    }
</script>
<style lang="scss">
  .invest-detail-container{
    margin-bottom:5rem;
  }
</style>
