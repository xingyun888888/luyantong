<template>
  <div>
    <!--<transition name="router-fade" mode="out-in">-->
    <transition :name="'vux-pop-'+(direction=='forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
    <button @click="stopRecord">停止录音</button>
    <button @click="playRecord">播放录音</button>
    <button @touchstart="a($event)" @touchend="b($event)" class="cancelCopy">录音</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    mounted(){
      this.gettoken().then((res)=>{
        this.$wechat.config({
          debug:true,
          appId  : "wxda4d3c7659b5fc61",
          timestamp : res.data.timestamp,
          nonceStr :res.data.nonceStr,
          signature:res.data.signature,
          jsApiList:['onMenuShareTimeline','startRecord','stopRecord','playVoice','uploadImage','chooseImage','chooseWXPay']
        })   
      })  
    },
    methods:{
      ...mapActions(["gettoken"]),
      a(e){
        e.preventDefault();
         this.$wechat.ready(()=>{
            this.$wechat.startRecord();
        })
      },
      b(e){
         e.preventDefault();
         this.$wechat.stopRecord({
           success: (res)=>{
                this.localId = res.localId;
           }
        });
      },
      stopRecord(){
        this.$wechat.stopRecord({
           success: (res)=>{
                this.localId = res.localId;
           }
        });
      },
      playRecord(){
        this.$wechat.playVoice({
            localId: this.localId // 需要播放的音频的本地ID，由stopRecord接口获得
        })
      }
    },
    data(){
        return{
            localId:"",
            direction:"forward"
        }
    }
}
</script>

<style lang="scss">
  /*@import "./style/common.scss";*/
  /*.router-fade-enter-active,.router-fade-leave-action{*/
    /*transition:opacity 0.3s;*/
  /*}*/
  /*.router-fade-enter,.router-fade-leave-active{*/
    /*opacity:0;*/
  /*}*/
  .router-view {
    width: 100%;
    /*top: 46px;*/
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    /*top: 46px;*/
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .cancelCopy{
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -o-user-select:none;
  }
</style>
