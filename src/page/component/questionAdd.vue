<template>
   <div class="quest-container">
     <h4>我要提问:</h4>
     <textarea name="" cols="30" rows="10" class="description" placeholder="dsfdsfsd"></textarea>
     <textarea name="" cols="30" rows="10" class="detail" placeholder="dfsdfsd"></textarea>
     <uploader
       :max="varmax"
       :images="images"
       :handle-click="true"
       :show-header="true"
       :readonly="false"
       :autoUpload="false"
       size="normal"
       @preview="previewMethod"
       @add-image="addImageMethod"
       @remove-image="removeImageMethod"
     ></uploader>
     <!--选择领域-->
     <div class="isPublic">
       <p><input type="checkbox"  /><span>私密提问加50元,您的问题仅恁与投资人可见</span></p>
       <p class="suggest">建议您公开提问，让更多的人看到您的需求</p>
     </div>
     <div>
       <x-button type="primary" @click.native="pay">需支付{{price}} 元，确认提交</x-button>
     </div>
     <x-dialog v-model="show" class="dialog-demo">
       <div class="img-box">
         <img :src="showImgUrl" style="max-width:100%">
       </div>
       <div @click="show=false">
         <span class="vux-close">
           <svg t="1497436283912" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12306" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M184.64768 836.34176c3.9936 3.9936 9.23648 5.98016 14.47936 5.98016 5.24288 0 10.48576-2.00704 14.49984-6.00064l292.70016-293.04832 292.70016 293.04832c3.9936 4.01408 9.23648 6.00064 14.49984 6.00064 5.24288 0 10.48576-2.00704 14.47936-5.98016 8.00768-7.9872 8.00768-20.95104 0.02048-28.95872L535.61344 514.64192 828.0064 221.92128c7.9872-8.00768 7.9872-20.97152-0.02048-28.95872-8.02816-8.00768-20.97152-8.00768-28.95872 0.02048L506.30656 486.03136 213.6064 192.98304c-8.00768-8.00768-20.97152-8.00768-28.95872-0.02048-8.00768 7.9872-8.00768 20.95104-0.02048 28.95872l292.37248 292.72064L184.6272 807.38304C176.64 815.37024 176.64 828.35456 184.64768 836.34176z" p-id="12307" fill="#bfbfbf"></path></svg>
         </span>
       </div>
     </x-dialog>
   </div>
</template>
<script>
  import Uploader from 'vux-uploader'
  import {XButton,XDialog} from "vux"

  export default{
      data(){
        return{
          show: false,//是否放大预览图片
          price:"",
          uploadImg:{
            localId: [],
            serverId: []
          },
          images:[],//图片地址存储的数组
          uploadUrl:"http://192.168.1.57/upload.php",//上传到后端服务器的地址
          varmax:3,
          showImgUrl:""//预览图片的地址
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
           this.showImgUrl=url;
           this.show=true;
        },
        addImageMethod(){
          console.log("新增图片...");
          let _this= this;
          this.$wechat.chooseImage({
            success: (res) => {
              _this.uploadImg.localId = res.localIds;
              _this.$vux.toast.show({text:'已选择 ' + res.localIds.length + ' 张图片'});
              res.localIds.forEach((item,index)=>{
                  _this.images.push({url:item});
              })
            }
          })
        },
        removeImageMethod(){
           console.log("删除图片...");
           this.images.pop();
        }
      },
      components:{
         Uploader,XButton,XDialog
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .quest-container{
    padding:0.8rem;
    h4{
      font-weight:300;
      margin:0.5rem 0;
    }
    textarea{
      box-sizing:border-box;
      border:1px dashed #666;
      font-weight:300;
      padding:0.5rem;
      background:#f2f2f2;
      color:#666;
      font-size:1rem;
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
      padding:0 0.8rem;
      color:$gray6;
       input{
         vertical-align:middle;
         margin-right:0.3rem;
       }
      .suggest{
         padding-left:1rem;
         font-size:0.8rem;
         color:$gray9;
      }
    }
    .weui-cell{
       &:before{
          border:0;
        }
    }
    .weui-btn.weui-btn_primary{
      font-weight:300;
      font-size:0.9rem;
      background:$theme;
    }
    .dialog-demo {
      .img-box {
        height: 350px;
        overflow: hidden;
      }
      .vux-close {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }
</style>
