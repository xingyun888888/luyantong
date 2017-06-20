<template>
  <div class="more-filed-container">
     <router-link tag="li" v-for="i in 16" :key="i" :to="{path:'investorList', query:{title:'企业服务类'}}">
        <invest-field-cell></invest-field-cell>
     </router-link>
  </div>
</template>
<script>
  import investFieldCell from "../../common/investFieldCell.vue"
  import reSetTitleUtil from "../../common/RestTitle"
  export default{
    mounted(){
      reSetTitleUtil.reSetTitle("投资领域");
    },
    data(){
       return{

       }
    },
    components:{investFieldCell},
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  .more-filed-container{
    margin-bottom:5rem;
    .title{
      text-align:center;
      height:3rem;
      line-height:3rem;
      font-size:1.2rem;
    }
  }
</style>
