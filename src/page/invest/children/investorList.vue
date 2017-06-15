<template>
   <div class="investor-list-container">
      <!--<div class="field-name">{{$route.query.title}}</div>-->
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
         }, 2000);
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
   }
</style>
