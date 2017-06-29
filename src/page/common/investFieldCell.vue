<template>
  <div class="invest-cell">
    <!--<span class="field-icon">-->
    <!--</span>-->
    <h2 class="fieldName">{{value.title}}</h2>
    <div class="arrow-right">
      <svg t="1497348917788" class="icon" style="width:1.5rem;height:1.5rem;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4394" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs></defs><path d="M325.259922 72.02643l417.415808 417.415808c12.135388 12.132318 12.135388 31.80538 0 43.941791-12.132318 12.129248-31.80231 12.129248-43.938722 0L281.3212 115.964128c-12.132318-12.132318-12.132318-31.80538 0-43.938722S313.12658 59.894112 325.259922 72.02643z" p-id="4395" fill="#8a8a8a"></path><path d="M742.67573 489.442238c12.135388 12.132318 12.135388 31.80538 0 43.941791L325.259922 950.799838c-12.132318 12.129248-31.80538 12.129248-43.938722 0-12.132318-12.135388-12.132318-31.80845 0-43.938722L698.738032 489.442238C710.87342 477.30992 730.543412 477.30992 742.67573 489.442238z" p-id="4396" fill="#8a8a8a"></path></svg>
    </div>
    <span class="investorNumber">{{value.investorsTotal}}位投资人</span>
  </div>
</template>
<script>
   export default{
       props:{
         value:{
            type:Object,
            default:()=>{
               return{
               }
            }
         }

       },
       data(){
         return{

         }
       },
       methods:{

       },
       components:{

       }

   }
</script>
<style lang="scss" scoped>
   @import "../../style/valiable.scss";
    .invest-cell{
      padding:0.8rem;
      width:100%;
      height:4rem;
      line-height:4rem;
      box-sizing:border-box;
      border-bottom:2px solid $borderColor;
      position:relative;
      .field-icon{
          line-height:3.6rem;
          float:left;
          width:10%;
          height:2.4rem;
          margin-right:0.8rem;
      }
      .fieldName{
        float:left;
        font-size:1rem;
        line-height:2.4rem;
        font-weight:600;
        color:$gray6;
        margin-left:1.5rem;
      }
      .investorNumber{
        float:right;
        line-height:2.4rem;
        font-weight:500;
        font-size:0.9rem;
        margin-right:0.5rem;
        color:$gray9;
      }
      .arrow-right{
         float:right;
         height:1.5rem;
         line-height:3rem;
      }
    }
</style>
