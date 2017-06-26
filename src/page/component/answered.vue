<template>
  <div>
    <div class="question-title-msg">
      <p>共需回答<span>10</span>个问题，其中<span>1</span>个是私密问题</p>
    </div>
    <router-link tag="li"   v-for="(item,index) in myAnswerList" :key="index"  :to="{path:'answered',query:{id:item.id}}">
      <answered-question-card :value="item"></answered-question-card>
    </router-link>
  </div>
</template>
<script>
  import answeredQuestionCard from '../common/answeredQuestionCard'
  import {mapActions} from 'vuex'
  export default{
    mounted(){
      this.getMyAnswer({answer:1}).then((res)=>{
        this.myAnswerList=res.myAnswerList;
      })
    },
    data(){
      return{
        myAnswerList:[]
      }
    },
    methods:{
      ...mapActions(["getMyAnswer"])
    },
    components:{answeredQuestionCard}
  }
</script>
<style lang="scss" scoped>

</style>
