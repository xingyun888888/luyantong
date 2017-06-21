<template>
   <div class="investor-list-container">
      <!--<div class="field-name">{{$route.query.title}}</div>-->
       <div class="invest-field-title">
          <h3>企业服务领域</h3>
          <span>79位投资人</span>
       </div>
       <div class="zm-split-line"></div>
       <investor-card v-for="i in list" :key="i"></investor-card>
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
  export default{
     mounted(){
     },
     data(){
       return{
          list:[]
       }
     },
     methods:{
       onInfinite() {
         setTimeout(() => {
           const temp = [];
           for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
             temp.push(i);
           }
           this.list = this.list.concat(temp);
           this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
           if (this.list.length / 6 === 10) {
             this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
           }
         }, 500);
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
