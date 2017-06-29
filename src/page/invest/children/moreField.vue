<template>
  <div class="more-filed-container">
     <router-link tag="li" v-for="(item,index) in investCategories" :key="index" :to="{path:'investorList', query:{title:'企业服务类'}}">
        <invest-field-cell :value="item"></invest-field-cell>
     </router-link>
  </div>
</template>
<script>
  import investFieldCell from "../../common/investFieldCell.vue"
  import reSetTitleUtil from "../../common/RestTitle"
  import {mapActions,mapMutations} from "vuex"
  export default{
    mounted(){
      reSetTitleUtil.reSetTitle("投资领域");
      new Promise((resolve,reject)=>{
        this.getCategories().then((res)=>{
          this.investCategories=res.investCategories;
          resolve()
        })
      }).then((res)=>{
        this.updateLoadingStatus({isLoading:false});
      })
    },
    data(){
       return{
         investCategories:[]
       }
    },
    components:{investFieldCell},
    methods:{
      ...mapActions(["getCategories"]),
      ...mapMutations(["updateLoadingStatus"]),
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
