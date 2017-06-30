<template>
  <div class="question-detail-container">
    <question-detail-card :value="questionDetailInfo"></question-detail-card>
    <div class="zm-split-line"></div>
    <question-show></question-show>
    <div class="zm-split-line"></div>
    <voice-message></voice-message>
  </div>
</template>
<script>
  import questionDetailCard from '../../common/questionDetailCard.vue'
  import questionShow from '../../component/questionShow.vue';
  import voiceMessage from '../../component/voiceMessage.vue';
  import reSetTitleUtil from "../../common/RestTitle";
  import {mapActions} from 'vuex';
  export default{
     mounted(){
       reSetTitleUtil.reSetTitle("问题详情");
       this.getQuestionDetail({url:"/api/questions/"+this.$route.query.id}).then((res)=>{
           this.questionDetailInfo=res;
           console.log(this.questionDetailInfo);
       })
     },
     data(){
       return{
          questionDetailInfo:{}
       }
     },
     methods:{
       ...mapActions(['getQuestionDetail'])
     },
     components:{questionShow,voiceMessage,questionDetailCard}
  }
</script>
<style lang="scss">
   .question-detail-container{
     margin-bottom:5rem;
   }
</style>
