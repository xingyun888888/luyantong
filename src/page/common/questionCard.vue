<template>
   <div class="request-card">
     <div class="card-left">
        <div class="card-img">
          <img :src="value.photo" alt="" >
        </div>
     </div>
     <div class="card-right">
        <div class="card-right-title">
          <span class="name">{{value.name}}</span>
          <span class="address">{{value.address}}</span>
          <button class="will-pay-listen" @click="pay($event,value.listenPrice)">{{value.listenPrice}}元偷听</button>
          <span class="listened">{{value.totalListens}}人偷听</span>
        </div>
       <div class="card-right-body">
          <p>{{value.summary}}</p>
       </div>
     </div>
   </div>
</template>
<script>
  import {mapActions,mapMutations} from 'vuex'
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
      ...mapActions(["getWechatPayParameter"]),
      ...mapMutations(["updateLoadingStatus"]),
      pay(e,price){
        e.preventDefault();
        let _this = this;
        this.$vux.confirm.show({
          title:`确认是否支付${price}元`,
          onCancel(){

          },
          onConfirm(){
            /**
             * 此处调用支付接口
             */
              _this.getWechatPayParameter().then((res)=>{
                console.log(res);
              _this.$wechat.chooseWXPay({
                appId:res.appId,
                timestamp: res.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: res.nonceStr, // 支付签名随机串，不长于 32 位
                package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: res.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: res.paySign, // 支付签名
                success: function (res) {
                  // 支付成功后的回调函数


                },
                fail:function(){
                  alert("支付失败");
                }
              })
            })
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
      width:20%;
      height:5rem;
      .card-img{
        display:inline-block;
        vertical-align:top;
        width:4rem;
        height:4rem;
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
      width:80%;
      box-sizing:border-box;
      /*padding-left:1.5rem;*/
      span{
        margin-right:0.2rem;
      }
      .card-right-title{
        line-height:1.6rem;
        .name{
          font-size:0.9rem;
          font-weight:500;
        }
        .address{
          color:$gray6;
          font-size:0.9rem;
          font-weight:500;
        }
        .listened{
          font-size:0.9rem;
          float:right;
          color:$gray6;
          margin-right:0.8rem;
          font-weight:500;
        }
        button{
          padding:0.2rem 0.5rem;
          background:$theme;
          font-weight:400;
          font-size:0.7rem;
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
        color:$gray6;
        font-weight:500;
      }
    }
  }
</style>
