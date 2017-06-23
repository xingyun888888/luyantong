<template>
  <div class="record-voice-container">
    <div>
      <span class="title">我的回答</span>
      <!--<span class="price">{{"$"+value.price}}</span>-->
    </div>
    <button class="record" @touchstart="startRecord($event)" @touchend="stopRecord($event)">按住录音</button>
    <button class="record" @click="playRecord">播放录音</button>
  </div>
</template>
<script>
  export default{
     props:{
       value:{
           type:Object,
           default:()=>{
               return{
                   price:"160"
               }
           }
       },
       recoding:true
     },
     data(){
         return{
           timer:null,
           localId:null
         }
     },
     methods:{
       startRecord(e){
         e.preventDefault();
//         alert("touchstart");
         this.$vux.toast.show({text:"录音开始"});
         this.$wechat.startRecord({
           cancel:function(){
             alert("用户拒绝授权录音");
           }
         });

         //监听录音自动停止
         this.$wechat.onVoiceRecordEnd({
           complete: (res)=>{
             this.$vux.toast.show({text:'录音时间已超过一分钟'});
             this.localId = res.localId;
           }
         });
       },
       stopRecord(e){
         this.$vux.toast.show({text:"录音结束"});
         e.preventDefault();
         this.$wechat.stopRecord({
           success: (res)=>{
             this.localId = res.localId;
           }
         });
       },
       playRecord(){
         if (this.localId == '') {
           this.$vux.toast.show({text:'请先使用 startRecord 接口录制一段声音'});
           return;
         }
         this.$wechat.playVoice({
           localId: this.localId // 需要播放的音频的本地ID，由stopRecord接口获得
         })
       }
     }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .record-voice-container{
     padding:1rem 0.8rem;
     .title{
       font-size:0.9rem;
     }
     .price{
       font-size:0.9rem;
       color:$theme;
       float:right;
       font-weight:500;
     }
     .record{
       background:$white;
       border:1px solid $borderColor;
       width:10rem;
       padding:0.4rem;
       font-size:0.9rem;
       border-radius:0.5rem;
       margin:1rem 0;
       color:$gray9;
     }
  }
</style>
