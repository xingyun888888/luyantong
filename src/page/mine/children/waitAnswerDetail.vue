<template>
  <div class="wait-answer-container">
     <question-detail-card></question-detail-card>
     <div class="zm-split-line"></div>
     <question-show></question-show>
     <div class="zm-split-line"></div>
     <record-voice></record-voice>
  </div>
</template>
<script>
  import recordVoice from '../../component/recordVoice.vue';
  import questionDetailCard from '../../common/questionDetailCard.vue'
  import questionShow from '../../component/questionShow.vue'
  import {mapActions} from 'vuex'
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
        recordVoice,questionDetailCard,questionShow
      }
  }

</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
  .wait-answer-container{
    margin-bottom:5rem;
  }
</style>
