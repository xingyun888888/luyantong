<template>
   <div class="request-card">
     <div class="card-left">
        <div class="card-img">
          <img src="" alt="">
        </div>
     </div>
     <div class="card-right">
        <div class="card-right-title">
          <span class="name">{{value.name}}</span>
          <span class="address">{{value.address}}</span>
          <button class="will-pay-listen" @click="pay(value.listenPrice)">{{value.listenPrice}}元偷听</button>
          <span class="listened">{{value.listened}}人偷听</span>
        </div>
       <div class="card-right-body">
          <p>如果你无法简洁的表达你的想法，那只能说明你还不够了解它</p>
       </div>
     </div>
   </div>
</template>
<script>
  export default{
    props:{
      value:{
          type:Object,
          default:()=>{
              return{
                  name:"哈哈",
                  address:"北京",
                  listened:"12",
                  listenPrice:"1",
                  pay:(price)=>{
                      alert("确认是否支付"+price+"元");
                  }
              }
          }
      }
    },
    data(){
       return{

       }
    },
    methods:{
      pay(price){
        let _this = this;
        this.$vux.confirm.show({
          title:`确认是否支付${price}元`,
          onCancel(){

          },
          onConfirm(){
            _this.$vux.toast.show({text:"支付成功"});
          }
        })
      }
    },
    components:{

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .request-card{
    &:after{
       display:div;
       clear:both;
    }
    border-top:1px solid $borderColor;
    padding:0.8rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height:6rem;
    .card-left{
      float:left;
      width:15%;
      height:6rem;
      .card-img{
        display:inline-block;
        vertical-align:top;
        width:4rem;
        height:4rem;
        border:1px solid $borderColor;
        border-radius:50%;
        overflow:hidden;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .card-right{
      font-weight:300;
      float:left;
      width:85%;
      box-sizing:border-box;
      padding-left:1.5rem;
      span{
        margin-right:0.2rem;
      }
      .card-right-title{
        line-height:1.6rem;

        .address{
          color:$gray9;
          font-size:0.9rem;
        }
        .listened{
          font-size:0.8rem;
          float:right;
        }
        button{
          width:5rem;
          padding:0.3rem 0;
          background:$theme;
          border:0;
          outline:0;
          color:$white;
          border-radius:1.5rem;
          float:right;
        }
      }
      .card-right-body{
        clear:both;
        font-size:0.8rem;
      }
    }
  }
</style>
