<template>
  <div class="my-question-detail">
      <question-show></question-show>
      <div class="zm-split-line"></div>
      <voice-message></voice-message>
  </div>
</template>
<script>
  import questionShow from '../../component/questionShow.vue';

  import voiceMessage from '../../component/voiceMessage.vue';

  export default{
      mounted(){

      },
      data(){
         return{

         }
      },
      methods:{

      },
      components:{
         questionShow,voiceMessage
      }
  }
</script>
<style lang="scss" scoped >

</style>
