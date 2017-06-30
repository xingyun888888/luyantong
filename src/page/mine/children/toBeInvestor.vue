<template>
  <div class="tobe-investor-container">
     <div class="head-info">
        <p>
          <span>填写以下信息时请仔细与证件内容核对，提交后2个工作日内反馈审核结果，若未收到结果请致电客服反馈</span>
        </p>
     </div>
     <div class="person-info-form">
       <div class="zm-form-item">
         <div class="title">
           <i></i><b>真实姓名</b>
         </div>
         <div >
           <input type="text" class="username" name="username">
         </div>
       </div>
       <div class="zm-form-item">
         <div class="title">
           <i></i><b>电话号码</b>
         </div>
         <div >
           <input type="text" class="username" name="username">
         </div>
       </div>
       <div class="zm-form-item">
         <div class="title">
           <i></i><b>从业年限</b>
         </div>
         <div class="content" >
           <selector placeholder="请选择年限" v-model="yearsLimit"  title=""  name="yearsLimit" :options="list"></selector>
         </div>
       </div>
       <div class="zm-form-item">
         <div class="title">
           <i></i><b>关注领域</b>
         </div>
         <div class="content" >
           <checker
             v-model="selectedField"
             type="checkbox"
             default-item-class="default-item"
             selected-item-class="item-selected"
           >
             <checker-item v-for="(item,index) in allField" :key="index" :value="item">{{item}}</checker-item>
           </checker>
         </div>
       </div>


       <div class="zm-form-item">
         <div class="title">
           <i></i><b>我的名片</b>
         </div>
         <div class="content" >
            <div class="front-view" @click="uploadFrontView">
              <img :src="frontViewUrl" alt="">
            </div>
            <div class="back-view" @click="uploadBackView">
              <img :src="backViewUrl" alt="">
            </div>
         </div>
         <div class="zm-remark">
           <p><i>&nbsp;</i><span>此处可不上传名片，平台将默认您为天使投资人</span></p>
           <div class="zm-dashed-line"></div>
         </div>
       </div>

       <div class="zm-form-item">
         <div class="title">
           <i></i><b>提问需支付金额</b>
         </div>
         <div class="content">
           <checker
             v-model="selectedAskMoney"
             default-item-class="askMoney-default-item"
             selected-item-class="askMoney-item-selected"
           >
             <checker-item v-for="(item,index) in allAskMoney" :key="index" :value="item">{{item}}</checker-item>
           </checker>
         </div>
       </div>

       <div class="zm-form-item">
         <div class="title">
           <i></i><b>其他人偷听我的回答需支付金额</b>
         </div>
         <div class="content" >
           <checker
             v-model="selectedSeeMoney"
             default-item-class="seeMoney-default-item"
             selected-item-class="seeMoney-item-selected"
           >
             <checker-item v-for="(item,index) in allSeeMoney" :key="index" :value="item">{{item}}</checker-item>
           </checker>
         </div>
       </div>

       <div>

       </div>

       <div class="save-button">
         <x-button text="提交"  @click.native="save" :disabled="false" type="primary"></x-button>
       </div>

     </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import {Selector,Checker,CheckerItem,XButton} from  'vux';
  export default{
      mounted(){
        this.updateLoadingStatus({isLoading:false});
      },
      data(){
        return{
          frontViewUrl:"",
          backViewUrl:"",
          yearsLimit:'',
          list: [{key: '1-3年', value: '1-3年'}, {key: '3-7年', value: '3-7年'},{key: '7年以上', value: '7年以上'}],
          selectedField:[],
          allField:['互联网','电子商务','企业服务','生活消费','游戏动漫','医疗健康','智能硬件','在线教育','金融投资','内容产业'],
          selectedAskMoney:"",
          allAskMoney:["￥50",'￥100','￥200','￥300'],
          selectedSeeMoney:"",
          allSeeMoney:["￥1",'￥2','￥3','￥5']
        }
      },
      methods:{
        ...mapMutations(["updateLoadingStatus"]),
        save(){

        },
        uploadFrontView(){
          let _this= this;
          this.$wechat.chooseImage({
            count:1,
            success: (res) => {
              if(window.__wxjs_is_wkwebview){
                _this.$wechat.getLocalImgData({
                  localId:res.localIds[0],
                  success:(res)=>{
                    _this.frontViewUrl = res.localData;
                  }
                })
              }else{
                _this.frontViewUrl = res.localIds[0];
              }
              _this.$vux.toast.show({text:'已选择 ' + res.localIds.length + ' 张图片'});
            }
          })
        },
        uploadBackView(){
          let _this= this;
          this.$wechat.chooseImage({
            count:1,
            success: (res) => {
              if(window.__wxjs_is_wkwebview){
                _this.$wechat.getLocalImgData({
                  localId:res.localIds[0],
                  success:(res)=>{
                    _this.backViewUrl = res.localData;
                  }
                })
              }else{
                _this.backViewUrl = res.localIds[0];
              }
              _this.$vux.toast.show({text:'已选择 ' + res.localIds.length + ' 张图片'});

            }
          })
        }
      },
      components:{
        Selector,Checker,CheckerItem,XButton
      },
      watch:{
        selectedField:{
            handler(curVal,oldVal){
              console.log(curVal);
            },
            deep:true
        },
        selectedSeeMoney(curVal){
            console.log(curVal);
        },
        selectedAskMoney(curVal){
            console.log(curVal);
        }

      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
  .tobe-investor-container{
      /*margin-bottom:5rem;*/
      padding:0.8rem;
      cursor: url('/static/images/some-cursor.ico') default;
     .head-info{
        font-size:0.9rem;
        color:#666;
        padding:0.8rem;
        p{
           text-align:center;
           span{
             font-size:0.8rem;

           }

           /*i{*/
              /*padding-left:1.2rem;*/

              /*background:url("/static/images/warning.png") no-repeat center center;*/
              /*background-size:60%;*/
            /*}*/
        }

     }
     .person-info-form{
        margin:1rem 0.8rem;
        .zm-form-item{
            .zm-remark{
              text-align:center;
              p{
                color:#999;
                font-size:0.9rem;
                margin:0.8rem 0;
                i{
                  padding-left:1.2rem;
                  background:url("/static/images/warning.png") no-repeat center center;
                  background-size:60%;
                }
              }
              .zm-dashed-line{
                border-bottom:1px dashed #ccc;
              }
            }
            .content{
              padding-left:0.8rem;
              .front-view,.back-view{
                 border:1px dotted #ccc;
                 height:12rem;
                 margin-bottom:0.8rem;
                 margin-right:1rem;
                 text-align:center;
                 line-height:12rem;
                 img{
                   max-width:100%;
                   max-height:100%;
                 }
              }
              .front-view{
                background:url("/static/images/front-view.png") no-repeat center center;
              }
              .back-view{
                background:url("/static/images/back-view.png") no-repeat center center;
              }
            }
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

            input{
              margin-top:1rem;
              padding-left:1rem;
              margin-left:0.8rem;
              font-size:1rem;
              color:#666;
              width:80%;
              border-bottom:1px solid #ccc;
              -webkit-appearance: none;
              border-radius:0;
            }
        }

     }
    .default-item{
      width:6rem;
      height: 2rem;
      line-height:2rem;
      text-align: center;
      border: 1px solid #eee;
      background-color:#f2f2f2;
      margin-top:0.6rem;
      margin-right:0.8rem;
      border-radius:0.5rem;
      color:#999;
    }
    .item-selected{
      color: #fff;
      background:$theme;
      border-color:transparent;
    }

  .askMoney-default-item,.seeMoney-default-item{
      font-size:1rem;
      padding: 5px 10px;
      margin-right:0.8rem;
      margin-top:0.5rem;
      line-height:2rem;
      width:6rem;
      text-align:center;
      color:#999;
      border-radius:0.2rem;
      border:1px solid $borderColor;
    }
  .askMoney-item-selected,.seeMoney-item-selected {
      background:$white url("/static/images/selected.png") no-repeat right bottom;
      background-size:20%;
      border-color:$theme;
    }
  .askMoney-item-disabled,.seeMoney-item-disabled {
      color: #999;
    }

    .save-button{
      margin-top:2rem;
    }
  }
</style>
