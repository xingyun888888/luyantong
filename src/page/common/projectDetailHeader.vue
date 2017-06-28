<template>
  <div class="project-detail-header-container">
     <div class="header-img">
       <img src="/static/images/project/project.png" alt="">
     </div>
     <div class="header-content">
       <div class="header-title">
         <h3>项目名称&nbsp;&nbsp;(098765)</h3>
       </div>
       <div class="header-detail">
         <p class="label"><span v-for="item in projectLabel">{{item}}</span></p>
         <p class="interest">92位投资人对此项目感兴趣</p>
         <p class="address">地址：深圳</p>
         <p class="stage">当前阶段：B轮</p>
         <p class="time">上线时间：2017-02-20</p>
       </div>
     </div>
  </div>
</template>
<script>
  export default{
      mounted(){

      },
      data(){
         return{
           projectLabel:['在线教育','大数据','项目类别']
         }
      },
      methods:{

      },
      components:{

      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .project-detail-header-container{
     .header-img{
       width:100%;
       img{
         max-width:100%;
       }
     }
     .header-content{
       font-size:0.9rem;
       padding:0 0.8rem;
       .header-title{
         h3{
           color:$gray3;
           font-weight:500;
         }
       }
       .header-detail{
         margin-bottom:0.8rem;
         p{
           margin:0.3rem 0;
           padding-left:1.2rem;
           color:$gray9;
           font-weight:500;
         }
         span{
           color:$gray9;
           font-weight:500;
         }
         .label{
           background:url('/static/images/icon/label.png') no-repeat center left;
           background-size:3.8%;
           &>span{
               margin-right:0.5rem;
           }
         }
          .interest{
            background:url('/static/images/icon/interest.png') no-repeat center left;
            background-size:3.8%;
          }
          .address{
            background:url('/static/images/icon/position.png') no-repeat center left;
            background-size:3.8%;
          }
          .stage{
            background:url('/static/images/icon/stage.png') no-repeat center left;
            background-size:3.8%;
          }
          .time{
            background:url('/static/images/icon/time.png') no-repeat center left;
            background-size:3.8%;
          }
       }
     }
   }
</style>
