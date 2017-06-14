<template>
  <div class="record-voice-container">
    <div>
      <span class="title">我的回答</span>
      <span class="price">{{"$"+value.price}}</span>
    </div>
    <button class="record" @touchstart="startRecord($event)" @touchend="stopRecord($event)" >按住说话</button>
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
       }
     },
     data(){
         return{

         }
     },
     methods:{
       startRecord(e){
         e.preventDefault();
         this.timer=setTimeout(()=>{
           this.$wechat.ready(()=>{
             this.$wechat.startRecord({
               cancel:function(){
                 alert("用户拒绝授权录音");
               }
             });
           })
         },400)
       },
       stopRecord(e){
         e.preventDefault();
         if(this.timer){
           clearTimeout(this.timer);
         }
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
             this.$wechat.translateVoice({
               localId:res.localId, // 需要识别的音频的本地Id，由录音相关接口获得
               isShowProgressTips: 1, // 默认为1，显示进度提示
               success: function (res) {
                 alert(res.translateResult); // 语音识别的结果
               }
             });
           }
         });
       },
       playRecord(){
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
     .record{
       background:$white;
       border:1px solid $borderColor;
       padding:0.2rem;
       color:$gray9;
     }
  }
</style>
