<template>
  <div>
    <!--<transition name="router-fade" mode="out-in">-->
    <transition :name="'vux-pop-'+(direction=='forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
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
</style>
