<template>
  <div class="active-detail-container">
    <active-detail-header></active-detail-header>
    <div class="zm-split-line"></div>
    <div class="active-list">
      <div class="title">
        <i></i><b>活动详情</b>
      </div>
      <div class="detail active-describe">
         <p>
           2016年4月到7月，江苏省举办了“第四届江苏网络文化季”活动。本届网络文化季以“指尖逐浪 聚力起航”为主题，划分为“红色记忆”“家风传承”“文明之光”“网聚安全”“公益力量”“创业创新”“悦读天下”“筑梦启航”八大版块，汇聚了100项精彩纷呈的主题文化活动，54个省、市部门、单位参与承办，线上线下1000余万网民参与和关注，各网络平台总点击转发量达8000万次，推出各类网络文化作品5万多件，通过组织开展丰富多彩的网络文化活动，弘扬社会主义核心价值观，繁荣发展网络文化，培育江苏好网民，推进网络文明建设，为建设“强富美高”新江苏、谱写好中国梦江苏篇章营造良好的网络文化氛围。
         </p>
      </div>
    </div>
    <div class="active-list">
      <div class="title">
        <i></i><b>活动嘉宾</b>
      </div>
      <div class="detail">
        <div class="guest-card">
          <div class="guest-card-head">
            <div class="guest-photo">
              <img src="/static/images/icon/photo1.png" alt="">
            </div>
            <div class="guest-position">
              <h4>余登魁</h4>
              <h4>前海创投孵化器合伙人</h4>
              <h4>董事总经理</h4>
            </div>
          </div>
          <div class="guest-card-body">
            <p>
              带领团队，为几千家企业提供资本市场相关服务 ，全国首推“新四板”，使新四板深入人心，首创新四板全套服务体系。
            </p>
            <p>
              前海智媒网络科技有限公司董事长、勤智国际资本管理有限公司联合创始人、董事西南财大中国新四板研究中心理事长、厦门大学金融研究所兼职研究员
            </p>
          </div>
        </div>
        <div class="guest-card">
          <div class="guest-card-head">
            <div class="guest-photo">
              <img src="/static/images/icon/photo2.png" alt="">
            </div>
            <div class="guest-position">
              <h4>汤大杰博士</h4>
              <h4>前海创投孵化器发起人</h4>
              <h4>董事长</h4>
            </div>
          </div>
          <div class="guest-card-body">
            <p>
              曾任本土PE第一名深圳市创新投资集团副总裁，负责10 多支基金的总体管理,规模近40亿元。汤总20年来在投融资、并购、产业整合和企业管理方面有丰富的实战经验：曾任易方达基金投资部经理、南方基金董事、曾任国内最大担保机构深圳高新投集团董事总经理、曾任深圳机场集团副总经理，并主导多起跨国并购。
            </p>
            <p>
              汤大杰董事长同时兼任厦门大学硕士、暨南大学经济学博士、兼职教授；出版专著《中国证券投资基金行为与市场影响研究》、现任勤智资本总裁。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="active-list">
      <div class="title">
        <i></i><b>活动流程</b>
      </div>
      <div class="detail active-flow">
        <p>
          2017年02月23日下午<br/>
          13:00-13:30 来宾签到<br/>
          13:30-13:35 主持人开场<br/>
          13:35-14:05 协会名誉会长致辞<br/>
          14:05-14:15 协会会长发言<br/>
          14:15-14:25 协会秘书长发言<br/>
          14:25-14:35 协会名誉会长授牌仪式<br/>
          14:35-14:50 协会副会长单位授牌仪式<br/>
          14:50-15:00 协会理事单位授牌仪式<br/>
          15:00-17:30 企业路演（拟定6家）<br/>
          17:30-18:00 留影、交流<br/>
        </p>
      </div>
    </div>
    <div  class="active-regist">
      <a href="#activeRegist">点击报名</a>
    </div>
  </div>
</template>
<script>
  import activeDetailHeader from '../common/activeDetailHeader.vue'
  import reSetTitleUtil from "../common/RestTitle"
  export default{
      mounted(){
        reSetTitleUtil.reSetTitle("活动详情");
      },
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
        activeDetailHeader
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .active-detail-container{
      .active-list {
          padding:0 0.8rem;

          .title {
            height: 3.5rem;
            line-height: 3.5rem;

            i {
              display: inline-block;
              width: 0.3rem;
              height: 1rem;
              background: #539ffd;
              vertical-align: middle;
            }

            b {
              margin-left: 0.5rem;
              display: inline-block;
              vertical-align: middle;
              font-size: 1.0rem;
              color: $gray6;
              font-weight: 500;
            }

            span {
              margin-left: 0.8rem;
              color: #539ffd;
              font-size: 0.8rem;
              vertical-align: middle;
              font-weight: 500;
            }

          }
          .detail{
            padding:0 0.8rem;
            font-size:0.9rem;
            .guest-card:last-child{
              margin-bottom:0;
            }
            .guest-card{
              margin-bottom:1rem;
              .guest-card-head{
                .guest-photo{
                  display:inline-block;
                  vertical-align:middle;
                  width:30%;
                  img{
                    max-width:100%;
                  }
                }
                .guest-position{
                   padding-left:1rem;
                   display:inline-block;
                   vertical-align:middle;
                }
              }
              .guest-card-body{
                p{
                 margin:0.5rem 0;
                 font-size:0.9rem;
                 color:$gray9;
                }
              }
            }
          }
          /**
             活动详情
           */
          .active-describe{
            font-size:0.9rem;
            color:$gray9;
          }
          /**
           活动流程
           */
          .active-flow{
            font-size:0.9rem;
            color:$gray9;
          }
      }
      /**
        活动报名按钮
        */
        .active-regist{
          margin:2rem 0 5rem;
          height:2.5rem;
          line-height:2.5rem;
          text-align:center;
          a{
            display:inline-block;
            width:100%;
            background:$theme;
            color:$white;
          }
        }
  }
</style>
