<template>
  <div class="myanswer-container">
    <tab>
      <tab-item selected @on-item-click="onItemClick">待回答</tab-item>
      <tab-item @on-item-click="onItemClick">已回答</tab-item>
    </tab>
    <router-view>

    </router-view>
  </div>
</template>
<script>
  import {Tab,TabItem} from 'vux';
  import reSetTitleUtil from "../../common/RestTitle"
  export default{
    mounted(){
      reSetTitleUtil.reSetTitle("我的回答");
      this.$router.replace("waitAnswer");
    },
    data(){
        return {

        }
    },
    methods:{
      onItemClick (index) {
        console.log('on item click:', index)
        if(index==0){
          this.$router.replace("waitAnswer");
        }else if(index==1){
          this.$router.replace("answered");
        }
      }
    },
    components:{Tab,TabItem}
  }
</script>
<style lang="scss" scoped>
   .myanswer-container{
     margin-bottom:5rem;
   }
</style>
