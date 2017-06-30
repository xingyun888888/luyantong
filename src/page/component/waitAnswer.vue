<template>
  <div>
    <div class="question-title-msg">
      <p>共需回答<span>19</span>个问题，其中<span>10</span>个是私密问题</p>
    </div>
    <router-link v-for="(item,index) in myAnswerList" :key="index" to="{path:'waitAnswerDetail',query:{id:item.id}}" tag="li">
      <question-detail-card :value="item"></question-detail-card>
    </router-link>
  </div>
</template>
<script>
  import questionDetailCard from '../common/questionDetailCard'
  import {mapActions,mapMutations} from 'vuex'
  export default{
     mounted(){
       new Promise((resolve,reject)=>{
         this.getMyAnswer({answer:0}).then((res)=>{
            this.myAnswerList=res.myAnswerList
            resolve()
         })
       }).then((res)=>{
          this.updateLoadingStatus({isLoading:false});
       })
     },
     data(){
         return{
           myAnswerList:[]
         }
     },
     methods:{
       ...mapActions(["getMyAnswer"]),
       ...mapMutations(["updateLoadingStatus"])
     },
     components:{questionDetailCard}
  }
</script>
<style lang="scss" scoped>

</style>
