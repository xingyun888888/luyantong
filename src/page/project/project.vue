<template>
  <div>
      <tab>
        <tab-item selected @on-item-click="onItemClick">个人项目</tab-item>
        <tab-item @on-item-click="onItemClick">机构项目</tab-item>
      </tab>
      <router-link to="projectDetail" v-for="i in 8" :key="i" >
          <project-card></project-card>
          <div class="zm-split-line"></div>
      </router-link>
  </div>
</template>
<script>
  import projectCard from '../common/projectCard'
  import {Tab,TabItem} from "vux"
  import reSetTitleUtil from "../common/RestTitle"
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("项目");
      },
      data(){
          return{

          }
      },
      methods:{
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
          projectCard,Tab,TabItem
      }

  }
</script>
<style>

</style>
