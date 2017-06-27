<template>
  <div>
    <div class="question-title-msg">
      <p>共听过<span>100</span>个问题</p>
    </div>
    <router-link tag="li"   v-for="(item,index) in listenedQuestionList" :key="index"  :to="{path:'answered',query:{id:item.id}}">
      <answered-question-card :value="item"></answered-question-card>
    </router-link>
  </div>
</template>
<script>
  import answeredQuestionCard from '../../common/answeredQuestionCard'
  import {mapActions} from 'vuex'
  export default{
    mounted(){
      this.getListenedQuestion().then((res)=>{
        this.listenedQuestionList=res.listenedQuestionList;
      })
    },
    data(){
      return{
        listenedQuestionList:[]
      }
    },
    methods:{
      ...mapActions(["getListenedQuestion"])
    },
    components:{answeredQuestionCard}
  }
</script>
<style lang="scss" scoped>

</style>
