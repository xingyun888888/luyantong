<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">报名中</tab-item>
      <tab-item @on-item-click="onItemClick">进行中</tab-item>
      <tab-item @on-item-click="onItemClick">已结束</tab-item>
      <tab-item @on-item-click="onItemClick">全部</tab-item>
    </tab>
    <router-link  to="activeDetail" v-for="i in 8" :key="i">
      <active-card></active-card>
      <div class="zm-split-line"></div>
    </router-link>
  </div>
</template>
<script>
  import {mapMutations} from "vuex"
  import activeCard from "../common/activeCard.vue"
  import reSetTitleUtil from '../common/RestTitle'
  import {Tab,TabItem} from "vux"
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("活动");
        this.updateLoadingStatus({isLoading:false});
      },
      data(){
        return{

        }
      },
      methods:{
        ...mapMutations(["updateLoadingStatus"]),
         onItemClick (index) {
          console.log('on item click:', index)
          if(index==0){
            //this.$router.replace("waitAnswer");
          }else if(index==1){
            //this.$router.replace("answered");
          }
         }
      },
      components:{
        activeCard,Tab,TabItem
      }
  }
</script>
<style lang="scss" scoped>

</style>
