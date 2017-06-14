<template>
  <div class="question-detail-container">
    <question-detail-card></question-detail-card>
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
  export default{
     data(){
       return{

       }
     },
     methods:{

     },
     components:{questionShow,voiceMessage,questionDetailCard}
  }
</script>
<style lang="scss">
   .question-detail-container{
     margin-bottom:5rem;
   }
</style>
