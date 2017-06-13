<template>
   <div class="investor-list-container">
      <div class="field-name">{{}}</div>
      <investor-card v-for="i in 8" :key="i"></investor-card>
   </div>
</template>
<script>
  import  investorCard   from  "../../../components/common/investorCard.vue"
  export default{
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
      .field-name{
          text-align:center;
      }
   }
</style>
