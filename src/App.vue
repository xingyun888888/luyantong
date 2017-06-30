<template>
  <div>
    <!--<transition :name="'vux-pop-'+(direction=='forward' ? 'in' : 'out')">-->
     <!---->
    <!--</transition> -->
    <loading v-model="isLoading"></loading>
    <transition name="fadeOutLeftBig">
        <router-view class="router-view"></router-view>
    </transition>
    <foot-guide v-show="$route.path=='/invest'||$route.path=='/project'||$route.path=='/active'||$route.path=='/mine'"></foot-guide>
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import FootGuide from "./components/footer/footGuide.vue"
import {Loading} from 'vux'

export default {
    components:{
      FootGuide,Loading,
    },
    mounted(){
//      this.gettoken().then((res)=>{
//        console.info("res.data:"+res.data);
//        this.$wechat.config({
//          //debug:true,
//          appId  : "wxda4d3c7659b5fc61",
//          timestamp : res.data.timestamp,
//          nonceStr :res.data.nonceStr,
//          signature:res.data.signature,
//          jsApiList:['onMenuShareTimeline','startRecord','stopRecord','playVoice','uploadImage','chooseImage','chooseWXPay','translateVoice']
//        });
//      })
//
       this.getWechatConfig().then((res)=>{
           this.$wechat.config({
            debug:true,
            appId  : res.appId,
            timestamp : res.timestamp,
            nonceStr :res.nonceStr,
            signature:res.signature,
            jsApiList:res.jsApiList
          });
       })
    },
    computed:{
      ...mapState({
        isLoading: (state) => {
          return state.vux.isLoading
        }
      })
    },
    methods:{
      ...mapActions(["gettoken","getWechatConfig"]),
    },
    data(){
        return{
            localId:"",
            direction:"forward",
            timer:null
        }
    }
}
</script>

<style lang="scss">
  @import "./style/common.scss";

  .fadeOutLeftBig-enter-active,.fadeOutLeftBig-leave-action{
    transition:opacity 1s;
  }

  .fadeOutLeftBig-enter,.fadeOutLeftBig-leave-active{
    opacity:0;
  }
  .router-view {
    width: 100%;
    /*height:100%;*/
    /*top: 46px;*/
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


  /*.router-fade-enter-active,.router-fade-leave-action{
    transition:opacity 0.5s;
  }
  .router-fade-enter,.router-fade-leave-active{
    opacity:0;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
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
  */

</style>
