<template>
  <div class="question-show-container">
       <div class="date-and-time">
         {{new Date().toString()}}
       </div>
       <div class="title">
         他提出的问题
       </div>
       <div class="content">
         <p>
           哦打飞机搜狗按时给弄死的给你的佛广东东方哦弹弓打飞机哦JOJO搜附近生动风景搜索到金佛山大家哦感觉到佛感觉到分工的非官方大哥
           随处可见的风景，就是没 没美广东分公司广东省的个人给我热特若干豆腐干豆腐
           广东省深圳市南山新区后海创投大厦17楼哦打飞机搜狗按时给弄死的给你的佛广东东方哦弹弓打飞机哦JOJO搜附近生动风景搜索到金佛山大家哦感觉到佛感觉到分工的非官方大哥
           随处可见的风景，就是没 没美广东分公司广东省的个人给我热特若干豆腐干豆腐
           广东省深圳市南山新区后海创投大厦17楼
         </p>
       </div>
      <div class="img-show">
        <img src="" alt="" v-for="i in 5" :key="i">
      </div>
      <div class="field">
        <a href="" >互联网</a>
        <a href="" >金融服务</a>
        <a href="" >互联网</a>
      </div>
  </div>
</template>
<script>
  export default{
     data(){
       return{

       }
     },
     methods:{

     }
  }
</script>
<style lang="scss" scoped>
   @import "../../style/valiable.scss";
   .question-show-container{
      padding:0.8rem;
      font-size:0.8rem;
      box-sizing:border-box;
      .date-and-time{
        color:$gray6;
      }
      .title{
         margin:0.3rem 0;
      }
      .content{

      }
      .img-show{
         display: flex;
         justify-content:space-between;
         flex-wrap:wrap;
         img{
           width:4.5rem;
           height:4rem;
           margin-top:.5rem;
           boder:1px solid $borderColor;
         }
      }
      .field{
        margin-top:1rem;
        a{
          padding:0.3rem 0.5rem;
          background:$textBackgroundGray;
          border-radius:1rem;
          color:$gray6;
          margin-right:0.3rem;
        }
      }
   }
</style>
