<template>
    <div class="mine-header">
      <div class="photo-and-name">
        <a href="#personInfo">
          <div class="photo">
            <img :src="photo" alt="" />
          </div>
        </a>
        <div class="name">
          <span>王强</span>
        </div>
      </div>
      <div class="account-info">
        <div class="account-balance">
          <b>账户金额</b><span class="money">￥689.00</span>
        </div>
        <div class="total-consume">
          <b>共计消费</b><span class="money">￥333.00</span>
        </div>
        <div class="gain-money">
          <b>赚取金额</b><span class="money">￥333.00</span>
        </div>
        <a href="#toBeInvestor" class="to-be-invest">成为投资人</a>
      </div>
    </div>
</template>
<script>
  export default{
      data(){
        return{
          photo:"/static/images/bitmap.png"
        }
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .mine-header{
     &:before{
       display:table;
       content:""
     }
    margin-bottom:1rem;
    margin-top:2rem;
    overflow:hidden;
    padding:0 0.8rem;
    width:100%;
    .photo-and-name{
      width:40%;
      box-sizing:content-box;
      float:left;
      text-align:center;
      .photo{
        display:inline-block;
        overflow:hidden;
        border-radius:50%;
        width:5rem;
        height:5rem;
        img{
          width:100%;
        }
      }
      .name{
        color:$gray3;
        margin-top:1rem;
        span{
          font-size:1rem;
        }
      }
    }
    .account-info{
      float:left;
      width:60%;
      font-size:0.9rem;
      &>div{
          margin-bottom:0.8rem;
          .money{
            margin-left:2rem;
            color:$theme;
          }
      }
     .total-consume{
       .money{
         color:#fc656a;
       }
     }
     .gain-money{
       .money{
         color:#1b5bb5;
       }
     }
      .to-be-invest{
        display:inline-block;
        width:13rem;
        text-align:center;
        height:2rem;
        line-height:2rem;
        background:$theme;
        border-radius:0.5rem;
        color:$white;
      }
    }
  }

</style>
