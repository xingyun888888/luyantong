<template>
  <div class="active-detail-container">
    <active-detail-header></active-detail-header>
    <div class="zm-split-line"></div>


    <a href="#activeRegist">点击报名</a>
  </div>
</template>
<script>
  import activeDetailHeader from '../common/activeDetailHeader.vue'
  import reSetTitleUtil from "../common/RestTitle"
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("活动详情");
      },
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
        activeDetailHeader
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";

</style>
