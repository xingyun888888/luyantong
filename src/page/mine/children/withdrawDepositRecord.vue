<template>
  <div class="withdraw-deposit-record-container">
     <div class="account-money">
       <span class="zm-label">账户余额</span><span class="balance">{{accountMoney}}&nbsp;&nbsp;元</span>
     </div>
     <div class="record-content" v-for="i in 5" :key="i">
       <div class="year">{{"2017"}}</div>
       <div class="record-detail">
         <p v-for="index in parseInt(Math.random()*5+1)" :key="index">
           <span class="money">提现<b>{{(Math.random()*100+1).toFixed(2)}}</b>元</span>
           <span class="time">2017年4月1日19点52分48秒</span>
           <span class="state">{{Math.random()>0.5?"提现中":"已到账"}}</span>
         </p>
       </div>
     </div>
  </div>
</template>
<script>
  export default{
      data(){
         return{
           accountMoney:"10034"
         }
      }
  }
</script>
<style lang="scss" scoped >
   @import "../../../style/valiable.scss";
   .withdraw-deposit-record-container{
       margin-bottom:5rem;
       .account-money{
         padding:0 1rem;
         height:4rem;
         line-height:4rem;
         border-bottom:2px solid $borderColor;
         color:$gray6;
         font-size:0.9rem;
         font-weight:600;
         .zm-label{
         }
         .balance{
            margin-left:4rem;
         }
       }


       .record-content{
         padding:1rem;
         color:$gray9;
         font-size:0.9rem;
         border-bottom:0.2rem solid $borderColor;
         .record-detail{
           p{
             margin:0.8rem 0;
             span.money{
               b{
                 color:$theme;
                 display:inline-block;
                 min-width:2.5rem;
                 margin:0 0.3rem;
               }
             }
             span.time{
               margin:0 0.8rem;
             }
             span.state{
               font-weight:600;
               color:$gray6;
             }
           }
         }
       }
   }
</style>
