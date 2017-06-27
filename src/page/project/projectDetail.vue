<template>
  <div class="project-detail-container">
    <project-detail-header></project-detail-header>
    <div class="zm-split-line"></div>
    <div class="project-list">
      <div class="title">
        <i></i><b>融资历史</b>
      </div>
      <timeline isShowIcon="false">
        <timeline-item v-for="(i, index) in count" :key="index" >
          <h4 :class="[i === 1 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
          <p :class="[i === 1 ? 'recent' : '']">index {{i + 1}}</p>
        </timeline-item>
      </timeline>
    </div>
    <div class="project-list">
      <div class="title">
        <i></i><b>项目简介</b>
      </div>
    </div>
    <div class="project-list">
      <div class="title">
        <i></i><b>团队信息</b>
      </div>
    </div>
    <div class="project-list">
      <div class="title">
        <i></i><b>企业展示</b>
      </div>
    </div>
  </div>
</template>
<script>
  import reSetTitleUtil from '../common/RestTitle'
  import projectDetailHeader from '../common/projectDetailHeader'
  import { Timeline, TimelineItem} from 'vux'
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("项目详情");
      },
      data(){
        return{
          count: 3
        }
      },
      methods:{

      },
      components:{
        projectDetailHeader,Timeline,TimelineItem
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .project-detail-container{
     .project-list{
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

     }
  }



</style>
