<template>
   <div class="quest-container">
     <h4 class="zm-title">我要提问 :</h4>
     <textarea name="" cols="30" rows="10" class="description" placeholder="请输入文本   （一句话概括，将显示在主页展示中，以便投资人精准阅读，若未填写，将筛取问题描述的前20字） "></textarea>
     <textarea name="" cols="30" rows="10" class="detail" placeholder="向王强递交BP，等待反馈。请详细说明你的项目，建议对可展示的对外运营数据多加描述，在下方依次上传BP图片，展示顺序以上传顺序为准72小时未得到反馈自动退款。"></textarea>
     <uploader
       :max="varmax"
       :images="images"
       :handle-click="true"
       :show-header="true"
       :readonly="false"
       :autoUpload="false"
       title=""
       :showHeader="false"
       size="normal"
       @preview="previewMethod"
       @add-image="addImageMethod"
       @remove-image="removeImageMethod"
     ></uploader>
     <!--选择领域-->
     <div class="isPublic">
       <p><input type="checkbox" class="isPrivate" /><span>私密提问加50元,您的问题仅恁与投资人可见</span></p>
       <p class="suggest">建议您公开提问，让更多的人看到您的需求</p>
     </div>
     <div>
       <x-button type="primary" @click.native="pay">需支付{{price}} 元，确认提交</x-button>
     </div>
     <div v-transfer-dom >
       <previewer :list="showImgs" ref="previewer" :options="options"></previewer>
     </div>
   </div>
</template>
<script>
  import Uploader from 'vux-uploader'
  import {XButton,Previewer,TransferDom} from "vux"

  export default{
      directives: {
        TransferDom
      },
      data(){
        return{
          price:"",
          uploadImg:{
            localId: [],
            serverId: []
          },
          images:[],//图片地址存储的数组
          showImgs:[],//预览图片的数组
          uploadUrl:"http://192.168.1.57/upload.php",//上传到后端服务器的地址
          varmax:10,
          options: {
            getThumbBoundsFn (index) {
              // find thumbnail element
              let thumbnail = document.querySelectorAll('.quest-container .weui-uploader__files .weui-uploader__file')[index];
              // get window scroll Y
              let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
              // optionally get horizontal scroll
              // get position of element relative to viewport
              let rect = thumbnail.getBoundingClientRect();
              // w = width
              return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
              // Good guide on how to get element coordinates:
              // http://javascript.info/tutorial/coordinates
            }
          }
        }
      },
      methods:{
        pay(){
           let _this = this;
           this.$vux.confirm.show({
               title:"确认是否支付",
               onCancel(){

               },
               onConfirm(){
                 _this.$vux.toast.show({text:"支付成功"});

               }
           })
        },
        previewMethod({url}){
            console.log("预览图片"+url);
            let index;
            for(let i=0;i<this.showImgs.length;i++){
                 if(this.showImgs[i].src==url){
                     index=i;
                     break;
                 }
            }
           this.$refs.previewer.show(index);
        },
        addImageMethod(){
          console.log("新增图片...");
          let _this= this;
          this.$wechat.chooseImage({
            count:1,//默认为9
            success: (res) => {
              _this.$vux.toast.show({text:'已选择 ' + res.localIds.length + ' 张图片'});
              res.localIds.forEach((item,index)=>{

                //解决兼容ios问题
                if(window.__wxjs_is_wkwebview){
                  _this.$wechat.getLocalImgData({
                    localId:item,
                    success:(res)=>{
                      _this.uploadImg.localId = res.localData;
                      _this.images.push({url:res.localData});//base64数据,可以用img标签显示
                      _this.showImgs.push({src:res.localData,w:800,h:400});
                    }
                  })
                }else{
                  _this.uploadImg.localId = res.localIds;
                  _this.images.push({url:item});
                  _this.showImgs.push({src:item,w:800,h:400});

                }


              })



            }
          })
        },
        removeImageMethod(){
           console.log("删除图片...");
           this.images.pop();
           this.showImgs.pop();
        }
      },
      components:{
         Uploader,XButton,Previewer
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .quest-container{
    padding:0.8rem;
    textarea{
      box-sizing:border-box;
      border:1px dashed #ccc;
      font-weight:300;
      padding:0.5rem;
      background:#f5f5f5;
      color:#666;
      font-size:0.8rem;
      resize:none;
      width:100%;
    }
    .description{
      height:4rem;
    }
    .detail{
      height:10rem;
    }
    .isPublic{
      font-size:0.9rem;
      height:3rem;
      box-sizing:border-box;
      text-align:center;
      color:$gray6;
       input.isPrivate{
         vertical-align:middle;
         margin-right:0.3rem;
         width:0.9rem;
         height:0.9rem;
       }
      .suggest{
         padding-left:1.5rem;
         font-size:0.9rem;
         color:$theme;
      }
    }
    .weui-cell{
      padding:10px 0;
       &:before{
          border:0;
        }
    }
    .weui-btn.weui-btn_primary{
      font-weight:300;
      font-size:0.9rem;
      background:$theme;
    }
  }
</style>
