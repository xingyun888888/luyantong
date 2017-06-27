<template>
   <div class="project-card-container">
      <div class="card-img">
        <img src="/static/images/project/project.png" alt="">
      </div>
      <div class="card-title">
        <span class="project-name">项目名称&nbsp;&nbsp;(098765)</span>
        <span class="interest-number">感兴趣人数:567</span>
      </div>
      <div class="project-label">
        <i></i><span>在线教育</span>
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
   @import "../../style/valiable.scss";

   .project-card-container{
     padding:0.5rem 0.8rem;
     font-size:0.9rem;
     &:before{
       display:block;
       content:"";
       clear:both;
     }
     .card-img{
       width:100%;
       img{
         max-width:100%;
       }
     }
     .card-title{
         height:1.5rem;
         line-height:1.5rem;
         .project-name{
           height:1.5rem;
           line-height:1.5rem;
           float:left;
           font-size:1rem;
           font-weight:500;
           color:$gray3;
         }
         .interest-number{
           height:1.5rem;
           line-height:1.5rem;
           float:right;
           color:$gray9;
           font-weight:500;
         }
     }
     .project-label{
       height:1.5rem;
       line-height:1.5rem;
       &:before{
         display:table;
         content:"";
         clear:both;
       }
       span{
         color:$gray9;
         font-weight:500;
       }
     }
   }
</style>
