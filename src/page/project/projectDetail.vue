<template>
  <div class="project-detail-container">
    <project-detail-header></project-detail-header>
    <div class="zm-split-line"></div>
    <div class="project-list">
      <div class="title">
        <i></i><b>融资历史</b>
      </div>
      <div class="detail history-timeline">
         <ul>
           <li v-for="i in 4" :key="i">
             <p><i :class="{'active':i==4}"></i><b>a轮</b><span>50000万元</span></p>
             <p><b class="date">2017.1.3</b><span>红岭投资</span></p>
           </li>
         </ul>
      </div>
    </div>
    <div class="zm-split-line"></div>
    <div class="project-list">
      <div class="title">
        <i></i><b>项目简介</b>
      </div>
      <div class="detail">
        <p>1、国内最大的EPM全产业链服务提供商
          元年科技十多年来专注于管理会计信息化领域软件研发、销售、实施和维护业务，以国外甲骨文、SAP等公司的管理会计软件代理及实施业务为基础，在消化国外优秀产品的同时，自主研发并形成自有品牌— —元年E7系列管理会计软件系统，是国内EPM细分领域内产业链最全的服务提供商。公司E7系列产品定位于中小型企业，代理和实施的甲骨文、SAP公司的EPM系统定位于超大型企业，两者形成优势互补，这使公司在国内同行业中具有较强的竞争优势。        </p>
        <p>
          2、公司是甲骨文、SAP公司EPM领域亚太区最大合作商
          元年科技及其子公司诺亚舟咨询是甲骨文公司亚太区EPM/BI领域首要推荐的咨询实施服务商和最大的合作伙伴，获得Oracle 唯一授权为该领域其他合作伙伴提供培训。同时公司也是过去一年中实施SAP公司BPC产品案例最多的合作伙伴。
        </p>
        <p>
          3、十年积累形成深厚技术研发能力和行业最强人才培养体系
          公司持续专注于EPM研发和服务，其研发团队在企业绩效管理软件设计与开发方面拥有丰富实践经验，通过多年研发投入，公司已获得了49项软件著作权和4项软件产品登记证书。十年的研发积累和精良的团队，使公司拥有行业内最全面的人才培养体系，能够有效的使计算机软件开发能力与企业管理会计专业知识相结合，形成强大的人才优势壁垒。
        </p>
        <p>
          4、高效的员工激励机制保障核心人员的稳定与活力
          公司属于技术与人才密集型企业，人力资源是公司发展的核心力量之一。公司针对核心人员采取了有效的股权激励措施，保障了核心层的稳定性，目前公司的核心人员均是公司开创期的元老。同时，公司的四位实际控制人韩向东、郝宇晓、李彤和盛桢智均为公司的创始人之一，并签署了一致行动人协议，能够对公司形成有效控制。公司管理层年龄集中在35-45岁年龄段，正处于事业的上升期，非常利于公司的发展。
        </p>
      </div>
    </div>
    <div class="zm-split-line"></div>
    <div class="project-list">
      <div class="title">
        <i></i><b>团队信息</b>
      </div>
      <div class="detail">
        <p>智媒 联合创始人</p>
        <p>股权占比： 49.9%</p>
        <p>传媒公司营销总监；金房网联合创始人</p>
      </div>
    </div>
    <div class="project-list">
      <div class="title">
        <i></i><b>企业展示</b>
      </div>
      <div class="detail">
        <video-player  ref="videoPlayer"
                       :options="playerOptions"

                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"

                       title="or listen state change"
                       @statechanged="playerStateChanged($event)"
                       @ready="playerReadied">
        </video-player>
      </div>
    </div>
    <div class="project-list">
      <div class="title">
        <i></i><b>商业计划书</b>
      </div>
      <div class="detail business-plan-pdf">
        <div class="pdf-img">
          <img src="/static/images/bitmap.png" alt="">
        </div>
        <div class="pdf-info">
          <a href="/static/businessPlan.pptx">项目介绍3.0ppt(20M)</a>
          <p>建议使用wifi查看</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import reSetTitleUtil from '../common/RestTitle'
  import projectDetailHeader from '../common/projectDetailHeader'

  import {videoPlayer} from 'vue-video-player'
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("项目详情");
      },
      data(){
        return{
          playerOptions: {

            // component options
            start: 0,
            playsinline:true,

            // videojs options
            muted: false,
            language: 'zh-CN',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
              type: "video/mp4",
              src: "http://vjs.zencdn.net/v/oceans.mp4"
            }],
            //poster: "/static/images/author.jpg",
          }
        }
      },
      computed:{
        player() {
          return this.$refs.videoPlayer.player
        }
      },
      methods:{
        // listen event
        onPlayerPlay(player) {
          // console.log('player play!', player)
        },
        onPlayerPause(player) {
          // console.log('player pause!', player)
        },
        // ...player event

        // or listen state event
        playerStateChanged(playerCurrentState) {
          // console.log('player current update state', playerCurrentState)
        },

        // player is ready
        playerReadied(player) {
          console.log('the player is readied', player)
          // you can use it to do something...
          // player.[methods]
        }
      },
      components:{
        projectDetailHeader,videoPlayer
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .project-detail-container{
     .project-list{
         padding:0.8rem;
        .title{
          height:3.5rem;
          line-height:3.5rem;
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
              color:$gray6;
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
        .detail{
          padding:0 0.8rem;
          font-size:0.9rem;
          p{
            color:$gray6;
          }
        }
        /*融资历史*/
         .history-timeline{
           ul{
             border-left:1px solid #ccc;
             padding-left:0.5rem;
              li{
                margin-top:0.5rem;
                p{
                  height:1.5rem;
                  line-height:1.5rem;
                  font-size:0.8rem;
                  color:#999;
                  margin:0;
                  position:relative;
                  left:-0.4rem;
                  top:0;
                  span{
                    margin-right:2rem;
                  }
                  b{
                    margin-left:0.8rem;
                    display:inline-block;
                    color:$gray6;
                    font-weight:500;
                    font-size:0.9rem;
                    width:2rem;
                    text-align:left;
                    margin-right:3rem;
                    &.date{
                       font-weight:400;
                       font-size:0.8rem;
                       color:$gray9;
                    }
                  }
                  i{
                    display:inline-block;
                    vertical-align:middle;
                    position:absolute;
                    left:-0.65rem;
                    width:1rem;
                    height:1.5rem;
                    background:url("/static/images/icon/timeline.png") no-repeat center center;
                    background-size:70%;
                    &.active{
                       background:url("/static/images/icon/timeline-active.png") no-repeat center center;
                       background-size:70%;
                    }
                  }
                }
              }
           }

         }

        /**
          商业计划书展示
         */
        .business-plan-pdf{
          height:3rem;
          .pdf-img{
            display:inline-block;
            width:20%;
            vertical-align:middle;
            img{
              max-width:100%;
            }
          }
          .pdf-info{
            padding-left:0.8rem;
            display:inline-block;
            vertical-align:middle;
            a{
              color:$theme;
            }
          }
        }

     }
  }



</style>
