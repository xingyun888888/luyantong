<template>
   <div class="quest-container">
     <h4>我要提问:</h4>
     <textarea name="" cols="30" rows="10" class="description" placeholder="dsfdsfsd"></textarea>
     <textarea name="" cols="30" rows="10" class="detail" placeholder="dfsdfsd"></textarea>
     <uploader
       :max="varmax"
       :images="images"
       :handle-click="false"
       :show-header="true"
       :readonly="false"
       :upload-url="uploadUrl"
       size="camera"
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

   </div>
</template>
<script>
  import Uploader from 'vux-uploader'
  import {XButton} from "vux"
  export default{
      data(){
        return{
          price:"",
          images:[],
          uploadUrl:"www.baidu.com",
          varmax:3
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
        previewMethod(){

        },
        addImageMethod(){

        },
        removeImageMethod(){

        }
      },
      components:{
         Uploader,XButton
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
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
  }
</style>
