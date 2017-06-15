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
        <img :src="img" alt="" v-for="img in value.images" :key="i"  @click="previewImg(img)" >
      </div>
      <div class="field">
        <a href="" >互联网</a>
        <a href="" >金融服务</a>
        <a href="" >互联网</a>
      </div>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
          <img :src="showImgUrl" style="max-width:100%">
        </div>
        <div @click="show=false">
           <span class="vux-close">
             <svg t="1497436283912" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12306" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M184.64768 836.34176c3.9936 3.9936 9.23648 5.98016 14.47936 5.98016 5.24288 0 10.48576-2.00704 14.49984-6.00064l292.70016-293.04832 292.70016 293.04832c3.9936 4.01408 9.23648 6.00064 14.49984 6.00064 5.24288 0 10.48576-2.00704 14.47936-5.98016 8.00768-7.9872 8.00768-20.95104 0.02048-28.95872L535.61344 514.64192 828.0064 221.92128c7.9872-8.00768 7.9872-20.97152-0.02048-28.95872-8.02816-8.00768-20.97152-8.00768-28.95872 0.02048L506.30656 486.03136 213.6064 192.98304c-8.00768-8.00768-20.97152-8.00768-28.95872-0.02048-8.00768 7.9872-8.00768 20.95104-0.02048 28.95872l292.37248 292.72064L184.6272 807.38304C176.64 815.37024 176.64 828.35456 184.64768 836.34176z" p-id="12307" fill="#bfbfbf"></path></svg>
           </span>
        </div>
      </x-dialog>
  </div>
</template>
<script>
  import {XDialog} from "vux"
  export default{
     components:{XDialog},
     props:{
        value:{
           type:Object,
           default:()=>{
               return{
                   images:["http://img3.redocn.com/tupian/20151013/keaikatongbeijingtupian_5087376.jpg","http://img3.redocn.com/tupian/20151013/keaikatongbeijingtupian_5087376.jpg","http://img3.redocn.com/tupian/20151013/keaikatongbeijingtupian_5087376.jpg","http://img3.redocn.com/tupian/20151013/keaikatongbeijingtupian_5087376.jpg"]
               }
           }
        }
     },
     data(){
       return{
         show: false,//是否放大预览图片
       }
     },
     methods:{
       previewImg(url){
         this.showImgUrl=url;
         this.show=true;
       }
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
