<template>
  <div class="zm-container">
    <div class="invest-field"><span>投资人关注领域</span><x-icon class="invest-search" type="ios-search" size="20" @click=""></x-icon></div>
    <grid :rows="4" class="field-list">
      <grid-item v-for="(i,index) in 8" :key="i" class="text-center">
          <router-link to="hello">
            <img style="width:100%;height:100%"  src="" />
            <span class="field-title">{{fieldNames[index]}}</span>
          </router-link>
      </grid-item>
    </grid>
    <div class="list-title">投资人列表</div>
    <card v-for="(item,index) in 10" :key="index"></card>
  </div>
</template>
<script>
   import Card from '../../components/common/card'
   import {Grid,GridItem,GroupTitle,Search,Icon} from "vux"
   function getResult (val) {
     let rs = []
     for (let i = 0; i < 20; i++) {
       rs.push({
         title: `${val} result: ${i + 1} `,
         other: i
       })
     }
     return rs
   }
   export default {
       data(){
         return{
           fieldNames:["企业服务","金融服务","互联网","学习教育","生活消费","机械硬件","食品链","更多分类"],
           results: [],
           value: 'test'

         }
       },
       components:{Card,Grid,GridItem,GroupTitle,Search,Icon},
       methods:{
         resultClick (item) {
           window.alert('you click the result item: ' + JSON.stringify(item))
         },
         getResult (val) {
           this.results = val ? getResult(this.value) : []
         },
         onSubmit () {
           this.$vux.toast.show({
             type: 'text',
             position: 'top',
             text: 'on submit'
           })
         },
         onFocus () {
           console.log('on focus')
         },
         onCancel () {
           console.log('on cancel')
         }
       }

   }
</script>
<style lang="scss">
  .text-center{
    text-align:center;
  }
  .invest-field{
    text-align:center;
    height:3rem;
    line-height:3rem;
    span{

    }
    .invest-search{
      display:inline-block;
      vertical-align:middle;
      margin-left:1rem;
      width:1.5rem;
      height:1.5rem;
    }
  }
  .list-title{
    height:3rem;
    line-height:3rem;
    padding-left:0.8rem;
  }
  .zm-container{
    margin-bottom:5rem;
  }
  .field-list{
    a{
      text-decoration:none;
    }
    .field-title{
      color:#999;
    }
  }
</style>
