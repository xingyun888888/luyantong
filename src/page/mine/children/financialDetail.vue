<template>
  <div class="financial-detail-container">
      <div class="head-msg">
         <span class="zm-label">提现金额：<b>{{withdrawDepositMoney}}</b>&nbsp;元</span>
         <a href="#withdrawDepositRecord" class="record">提现记录</a>
      </div>
      <div class="expend">
         <div class="left-content">
             <span>花</span>
         </div>
         <div class="right-content">
           <p>
             通过提问形式的消费：<span></span>
           </p>
           <p>
             通过偷听形式的消费：<span></span>
           </p>
           <p>
             总计消费金额：<span></span>
           </p>
         </div>
      </div>
      <div class="zm-split-line"></div>
      <div class="income">
        <div class="left-content">
          <span>赚</span>
        </div>
        <div class="right-content">
          <p>
            通过提问形式的消费：<span></span>
          </p>
          <p>
            通过偷听形式的消费：<span></span>
          </p>
          <p>
            总计消费金额：<span></span>
          </p>
        </div>
      </div>
      <div class="zm-split-line"></div>
      <div class="expend-detail">
         <span @click="toggleDetail"  class="expend-detail-title"><i :class="{'arrow-down':!isOpen,'arrow-up':isOpen}"></i>{{isOpen?"收起支付明细":"展开支付明细"}}</span>
         <div class="detail" v-show="isOpen">
            <p v-for="index in 8" :key="index"><span>支付{{180}}&nbsp;元</span><span>2017年4月1日19点52分48秒</span></p>
         </div>
      </div>
  </div>
</template>
<script>
  export default{
      data(){
        return{
          withdrawDepositMoney:1000,
          isOpen:false,
        }
      },
      methods:{
        toggleDetail(){
          this.isOpen=!this.isOpen;
        }
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
   .financial-detail-container{
      margin-bottom:5rem;
     .head-msg{
       padding:1rem 2rem;
       font-size:0.9rem;
       font-weight:500;
       color:$gray9;
       border-bottom:2px solid $borderColor;
       .zm-label{
         b{
           font-weight:400;
         }
       }
       .record{
         float:right;
         color:$theme;
         font-weight:500;
       }
     }
     .expend,.income{
         margin:2rem 0;
         height:6rem;
         line-height:6rem;
        .left-content{
          float:left;
          width:30%;
          text-align:center;
          span{
            color:$red;
            font-size:1.5rem;
          }
        }
        .right-content{
           width:70%;
           float:right;
           font-size:0.9rem;
           text-align:left;
           color:$gray9;
           p{
             line-height:2rem;
           }
        }
     }
     .income{
        .left-content{
          span{
            color:$theme;
          }
        }
     }

     .expend-detail{
        text-align:center;
        margin-top:1rem;
        span.expend-detail-title{
          display:inline-block;
          padding-left:1.2rem;
          font-size:0.9rem;
          color:$gray6;
          margin:1rem 0;
          i{
            display:inline-block;
            background:url('/static/images/arrow-down.png') no-repeat center;
            background-size:100%;
            width:0.8rem;
            height:0.8rem;
            margin-right:0.5rem;
            transition:transform 250ms linear;
          }
          i.arrow-down{
            transform:rotate(0deg);
          }
          i.arrow-up{
            transform:rotate(-180deg);
          }
        }
        .detail{
          p{
            color:$gray9;
            font-size:0.9rem;
            margin:0.5rem 0;
            span:first-child{
              margin-right:2rem;
            }
          }
        }

     }

   }
</style>
