<template>
   <div class="investor-list-container">
      <!--<div class="field-name">{{$route.query.title}}</div>-->
      <investor-card v-for="i in 8" :key="i"></investor-card>
   </div>
</template>
<script>
  import  investorCard   from  "../../common/investorCard.vue"
  export default{
      mounted(){
      },
     data(){
       return{

       }
     },
     methods:{

     },
     components:{
       investorCard
     }
  }
</script>
<style lang="scss" scoped>
   .investor-list-container{
      margin-bottom:5rem;
      .field-name{
          text-align:center;
          height:3rem;
          line-height:3rem;
      }
   }
</style>
