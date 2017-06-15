<template>
   <div class="voice-message-container">
      <div class="data-and-time">{{new Date().toString()}}</div>
      <div class="photo-and-voice">
        <div class="photo">
          <img src="" alt=""/>
        </div>
        <div class="voice" @click="play">
          <svg t="1497422232684" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11372" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M323.598073 357.220844c-14.740726-11.897981-37.535895-10.896164-50.907437 2.253321-13.356193 13.149485-12.236696 33.472346 2.518356 45.400002 33.766035 27.301809 53.145407 66.38392 53.145408 107.202581 0 40.762379-19.422352 79.873142-53.321416 107.262956-7.864108 6.347568-11.838629 15.064091-11.83863 23.825638 0 7.687076 3.078105 15.432481 9.350972 21.588691 13.370519 13.136182 36.166711 14.136975 50.906414 2.209318 48.91813-39.568181 76.986395-96.011704 76.986395-154.886603-0.001023-58.947554-28.008914-115.390054-76.839039-154.855904h-0.001023m136.62468-105.908098c-14.032598-12.590759-36.84414-12.664438-50.951439-0.13303-14.121626 12.487406-14.165628 32.882921-0.147356 45.458331 64.101947 57.504692 99.4275 134.005017 99.4275 215.437678 0 81.286328-35.370579 157.772326-99.604532 215.380372-6.979972 6.258541-10.484795 14.46034-10.485819 22.647813 0 8.245801 3.5345 16.523325 10.616802 22.780842 14.121626 12.532431 36.917818 12.473079 50.965765-0.11768 77.768201-69.711711 120.589472-162.307619 120.589473-260.691347 0.001023-98.544387-42.777269-191.153598-120.410394-260.762979M595.670631 144.905274c-13.769608-12.797467-36.579103-13.225209-50.950415-0.927115-14.386662 12.296047-14.84408 32.646538-1.061169 45.444005 93.567026 86.999446 145.078213 201.581088 145.078213 322.641281 0 120.824833-51.599192 235.362472-145.255245 322.538951-6.684236 6.213515-10.028401 14.223956-10.028401 22.234397 0 8.438183 3.711532 16.890692 11.103896 23.208584 14.356986 12.280698 37.181831 11.838629 50.965765-0.972141 106.584504-99.194186 165.281347-229.517347 165.281347-366.996488 0.029676-137.746224-58.636468-268.128737-165.133991-367.171474m0 0z" p-id="11373" fill="#ffffff"></path></svg>
          <span>一元偷听</span>
        </div>
      </div>
      <div class="otherinfo">
        <span class="listenedNumber">{{value.listened}}个人偷听</span>
        <span class="starNumber">其中<b>{{value.star}}</b>人觉得赞</span>
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
                 listened:24,
                 star:20
              }
           }
        }
      },
      data(){
        return{

        }
      },
      methods:{
        play(){
          let _this = this;
          this.$vux.confirm.show({
            title:"确认支付1元偷听此条回答吗?",
            onConfirm(){
              /**
               * 此处调用支付接口
               */
              _this.$wechat.chooseWXPay({
                timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: '', // 支付签名随机串，不长于 32 位
                package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: '', // 支付签名
                success: function (res) {
                  // 支付成功后的回调函数
                }
              })

            },
            onCancel(){
              /**
               * 回到页面，不做任何操作
               */
            }

          })
        }
      },
      components:{}
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
   .voice-message-container{
      color:$gray6;
      font-size:0.8rem;
      box-sizing:border-box;
      padding:0.8rem 0;
     .data-and-time{
        padding:0 0.8rem;
     }
     .photo-and-voice{
        padding:0 0.8rem;
        box-sizing:border-box;
        height:6rem;
        line-height:6rem;
        border-bottom:1px solid $borderColor;
       .photo{
          display:inline-block;
          width:4rem;
          height:4rem;
          border:1px solid $borderColor;
          border-radius:50%;
          vertical-align:middle;
          margin-right:1rem;
       }
       .voice{
          display:inline-block;
          padding:0 1rem;
          border-radius:1rem;
          height:2rem;
          line-height:2rem;
          background:$theme;
          color:$white;
          .icon{
            vertical-align:middle;
          }
       }
     }
     .otherinfo{
         font-size:0.9rem;
         padding:1rem;
         .listenedNumber{
            color:$gray9;
            margin-right:2rem;
         }
         .starNumber{
            color:$gray6;
            b{
              padding:0 0.3rem;
              color: #64c87f;
            }
         }
     }
   }
</style>
