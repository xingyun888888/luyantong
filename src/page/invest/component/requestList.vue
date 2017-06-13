<template>
  <div>
    <request-card v-for="i in 8" :key="i"></request-card>
  </div>
</template>
<script>
  import RequestCard from '../../../components/common/questionCard'
  export default{
      data(){
        return{

        }
      },
      methods:{

      },
      components:{
          RequestCard
      }

  }
</script>
<style lang="scss" scoped>

</style>
