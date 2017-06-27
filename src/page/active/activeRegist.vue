<template>
  <div class="active-regist-container">
    <div class="active-list">
      <div class="title">
        <i></i><b>活动信息</b>
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
    <div class="zm-split-line"></div>
    <div class="active-list">
      <div class="title">
        <i></i><b>报名信息</b>
      </div>
      <div class="content">
        <div class="form-item">
          <span>姓名</span><input type="text">
        </div>
        <div class="form-item">
          <span>性别</span><input type="text">
        </div>
        <div class="form-item">
          <span>联系方式</span><input type="text">
        </div>
        <div class="form-item regist-button">
          <x-button type="primary">报名</x-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XButton} from 'vux'
  import reSetTitleUtil from "../common/RestTitle"
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("活动报名");
      },
      data(){
          return{

          }
      },
      components:{
        XButton
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
   .active-regist-container{
       .active-list{
         padding:0.8rem;
         .title{
           height:4rem;
           line-height:4rem;
           i{
             display:inline-block;
             width:0.3rem;
             height:1rem;
             background:#539ffd;
             vertical-align:middle;
           }
           b{
             margin-left:0.5rem;
             display:inline-block;
             vertical-align:middle;
             font-size:1.0rem;
             color:#666;
             font-weight:500;
           }
           span{
             margin-left:0.8rem;
             color:#539ffd;
             font-size:0.8rem;
             vertical-align:middle;
             font-weight:500;
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

         .content{
           padding:0.8rem;
           .form-item{
             margin:0.8rem 0;
             display:flex;
             justify-content:center;
             align-items:center;
             font-size:1rem;
             span{
               width:5rem;
               color:$gray9;
             }
             input{
               border:0;
               font-size:0.9rem;
               color:$gray6;
               border-bottom:1px solid $gray9;
               padding:0 0.2rem;
               flex:1;
               -webkit-appearance: none;
               border-radius:0;
             }
             &.regist-button{
               margin:2rem 0;
             }
           }

         }


       }
   }
</style>
