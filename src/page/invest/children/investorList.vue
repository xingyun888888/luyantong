<template>
   <div class="investor-list-container">
      <!--<div class="field-name">{{$route.query.title}}</div>-->
       <div class="invest-field-title">
          <h3>{{title}}</h3>
          <span>{{investorsTotal}}位投资人</span>
       </div>
       <div class="zm-split-line"></div>
       <router-link v-for="(item,index) in investorList" :key="index" :to="{path:'investorDetail',query:{id:item.id}}" tab="li">
         <investor-card :value="item" ></investor-card>
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
  import  investorCard   from  "../../common/investorCard.vue"
  import InfiniteLoading from 'vue-infinite-loading';
  import {mapActions,mapMutations} from "vuex";
  export default{
     mounted(){
        new Promise((resolve,reject)=>{
          this.getFieldInvestorList({url:"/api/categories/"+this.$route.query.id}).then((res)=>{
            this.investorList=this.investorList.concat(res.investorList);
            this.investorsTotal=res.investorsTotal;
            this.title=res.title;
            resolve();
          })
        }).then((res)=>{
            this.updateLoadingStatus({isLoading:false});
        })
     },
     data(){
       return{
          investorList:[],
          investorsTotal:"",
          title:"",
       }
     },
     methods:{
       ...mapActions(["getFieldInvestorList"]),
       ...mapMutations(["updateLoadingStatus"]),
       onInfinite() {
           let _this=this;
//           this.getFieldInvestorList({url:"/api/categories/"+this.$route.query.id}).then((res)=>{
//              _this.investorList=_this.investorList.concat(res.investorList);
//              _this.investorsTotal=res.investorsTotal;
//           })
           this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
           this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
       },
       changeFilter() {
         this.list = [];
         this.$nextTick(() => {
           this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
         });
       },
     },
     components:{
       investorCard,InfiniteLoading
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

      .invest-field-title{
        height:4rem;
        line-height:4rem;
        padding-left:0.8rem;
        h3{
          float:left;
          color:#666;
          font-size:1rem;
          font-weight:500;
        }
        span{
          margin-left:0.8rem;
          color:#1b5bb5;
          font-size:0.9rem;
          font-weight:500;
        }
      }
   }
</style>
