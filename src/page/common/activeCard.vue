<template>
  <div class="active-card-container">
     <div class="card-img">
       <img src="/static/images/project/1.png" alt="">
     </div>
     <div class="card-title">
       <h3>与习大大一起逛前海</h3>
     </div>
     <div class="card-detail">
       <p><b>活动时间:</b><span>2017年6月9日 9:00--14:00</span></p>
       <p><b>活动地点:</b><span>深圳南山区创投大厦</span></p>
     </div>
  </div>
</template>
<script>
  export default{
      data(){
         return{

         }
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .active-card-container{
     padding:0.5rem 0.8rem;
     font-size:0.9rem;
     color:$gray9;
     &:before{
       content:"";
       display:block;
     }
     .card-img{
       width:100%;
       img{
         max-width:100%;
       }
     }
     .card-title{
       h3{
         font-weight:500;
         color:$gray3;
       }
     }
     .card-detail{
       p{
         b,span{
           font-weight:500;
         }
         b{
           margin-right:0.5rem;
         }
       }
     }
  }
</style>
