<template>
  <div class="person-info-container">
     <div class="person-photo">
       <img src="" alt="">
     </div>
  </div>
</template>
<script>
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

      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
  .person-info-container{
     .person-photo{
        width:100%;
        height:4rem;
        background:$theme;
        text-align:center;
        img{
          border-radius:50%;
        }
     }
  }
</style>
