<template>
  <div class="invest-head">
    <div class="invest-card-head">
      <div class="zm-card-left">
        <div class="zm-card-photo">
          <img :src="value.photo" alt="">
        </div>
      </div>
      <div class="zm-card-right">
        <div class="zm-card-header">
          <span class="zm-card-title">{{value.name}}</span>
          <span>{{value.address}}</span>
          <span class="listened-number">{{vlaue.listened}}</span>
          <span class="answer-nummber">{{value.answered}}</span>
        </div>
        <div class="zm-card-body">
          <span class="position">{{value.position}}</span>
          <button @click="value.attention">关注</button>
        </div>
      </div>
    </div>
    <div class="invest-card-body">
       <a class="zm-label" v-for="item in value.label">{{item}}</a>
    </div>
    <div class="invest-card-foot">
      <p>的方式发送到过节费上东国际佛国际法的两个疯掉了国际法的老规矩了解过路费等会就发过了会根据法律积分落户</p>
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
                   photo:"",
                   address:"",
                   name:"",
                   number:"",
                   listened:"",
                   answered:"",
                   position:"",
                   attention:function(){
                       alert("关注");
                   },
                   label:["金融服务",'企业服务','机械硬件']
               }
           }
       }
    },
    data(){
       return{

       }
    },
    methods:{
    },
    components:{

    }
  }
</script>
<style lang="sass">

</style>
