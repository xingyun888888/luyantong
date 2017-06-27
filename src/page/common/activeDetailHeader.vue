<template>
  <div class="active-detail-header-container">
     <div class="header-img">
       <img src="/static/images/project/project.png" alt="">
     </div>
     <div class="header-content">
       <div class="header-title">
         <h3>活动的标题在这里</h3>
       </div>
       <div class="header-detail">
         <p><b>活动时间：</b><span>2017年6月9月 9:00--14:00</span></p>
         <p><b>报名时间：</b></p>
         <p><b>活动地点：</b><span>广东省深圳市南山区创投大厦1702</span></p>
         <p><b>限制人数：</b><span>100(人) 还有2个名额</span></p>
         <p><b>已报名人数：</b><span>98(人)</span></p>
         <p><b>直播开始时间：</b><span>2017年6月9日 9:00--14:00</span></p>
       </div>
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
  .active-detail-header-container{
    margin-bottom:0.8rem;
    .header-img{
      width:100%;
      img{
        max-width:100%;
      }
    }
    .header-content{
      font-size:0.9rem;
      padding:0 0.8rem;
      color:$gray9;
      .header-title{
        h3{
          font-weight:500;
          color:$gray3;
        }
      }
      .header-detail{
        p{
          margin:0.3rem 0;
        }
      }
    }
  }
</style>
