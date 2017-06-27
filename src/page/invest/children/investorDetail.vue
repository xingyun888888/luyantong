<template>
  <div class="invest-detail-container">
    <invest-head :value="investorInfo"></invest-head>
    <div class="zm-split-line"></div>
    <question-add></question-add>
    <div class="zm-split-line"></div>
    <div class="question-msg">
      <span>共回答{{totalQuestion}}个问题，其中{{privateQuestion}}个是私密问题，以下不展示</span>
    </div>
    <router-link v-for="(item,index) in questionList" :key="index" :to="{path:'questionDetail',query:{id:item.id}}" tag="li">
      <request-card :value="item"></request-card>
    </router-link>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="circles">
      <div slot="no-results" >
        <p style="font-size:1rem;padding:1rem;text-align:center;" @click="changeFilter">加载失败,请点我重试</p>
      </div>
      <div slot="no-more">
        <p style="font-size:1rem;padding:1rem;text-align:center;" @click="changeFilter">没有更多信息了</p>
      </div>
    </infinite-loading>
  </div>
</template>
<script>
    import  investHead  from  "../../component/investHead.vue"
    import questionAdd  from "../../component/questionAdd.vue"
    import RequestCard from '../../common/questionCard'
    import InfiniteLoading from 'vue-infinite-loading'
    import reSetTitleUtil from '../../common/RestTitle'
    import {mapActions} from 'vuex'
    export default{
        mounted(){

            reSetTitleUtil.reSetTitle("投资人详情");
            this.getInvestorDetail({url:"/api/investors/"+this.$route.query.id}).then((res)=>{
                 this.investorInfo=res.investorInfo;
            });
        },
        data(){
           return{
              investorInfo:{},
              totalQuestion:64,
              privateQuestion:23,
              currentPage:'',
              questionList:[]
           }
        },
        methods:{
          ...mapActions(['getInvestorDetail',"getQuestion"]),
          onInfinite() {
            this.getQuestion({url:"/api/questions"}).then((res)=>{
              this.questionList=this.questionList.concat(res.questionList);
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
              if (true) {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                this.$vux.toast.show({
                  text:"没有更多信息了",
                  type:'text',
                  width:'80%',
                  time:1500
                })
              }
            })
          },
          changeFilter() {
            this.list = [];
            this.$nextTick(() => {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            });
          }
        },
        components:{
           investHead,questionAdd,RequestCard,InfiniteLoading
        }

    }
</script>
<style lang="scss">
  .invest-detail-container{
    margin-bottom:5rem;
  }
</style>
