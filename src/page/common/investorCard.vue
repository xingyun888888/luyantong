<template>
  <div class="zm-card">
    <div class="zm-card-left">
      <div class="zm-card-photo">
        <img :src="value.photo" alt="">
      </div>
    </div>
    <div class="zm-card-middle">
       <div class="zm-card-header">
         <span class="zm-card-title">{{value.name}}</span><span>{{value.position}}</span>
       </div>
       <div class="zm-card-body">
         <span v-for="item in value.fields">{{item}}</span>
       </div>
    </div>
    <div class="zm-card-right">
       <div class="zm-card-info">{{value.answer}}个回答</div>
       <div class="zm-card-button"><button :class="{'isAttentionSuccess':isAttentionSuccess}" @click="attention($event,value.name)">{{isAttentionSuccess?'已关注':'+关注'}}</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){

    },
    components: {

    },
    methods:{
       attention(e,param){
         e.preventDefault();
         console.log(2333);
         if(this.isAttentionSuccess) return;
         param = JSON.stringify(param);
         this.value.attention(param).then((res)=>{
             this.$vux.toast.show({text:"关注成功.."})
             this.isAttentionSuccess=true;
         });
       }
    },
    props:{
        value:{
            type:Object,
            default:()=>{
                return{
                  photo:"",
                  name:"姓名",
                  position:"创投孵化器/创投总监",
                  fields:["互联网","电子商务","电子商务"],
                  attention:function(param){
                    return new Promise((resolve,reject)=>{
                      resolve(false);
                    })
                  },
                  answer:"160",
                }
            }
        }

    },
    data(){
      return {
         isAttentionSuccess:false
      }
    }
  }
</script>
<style lang="scss" scoped>
   @import "../../style/valiable.scss";
   .zm-card{
     overflow:hidden;
     color:$gray9;
     border-bottom:1px solid $borderColor;
     background:#fff;
     box-sizing:border-box;
     padding:0.5rem;
     min-height:4rem;
     .zm-card-left{
       float:left;
       width:20%;
       text-align:center;
      .zm-card-photo{
         overflow:hidden;
         width:4rem;
         height:4rem;
         display:inline-block;
         border-radius:50%;
         border:1px solid $borderColor;
         img{
           width:100%;
           height:100%;
           vertical-align:middle;
         }
      }
     }
     .zm-card-middle{
       padding-left:0.8rem;
       min-height:4rem;
       float:left;
       display:flex;
       flex-direction:column;
       font-size:0.9rem;
       .zm-card-header{
         color:$gray3;
         align-self:flex-start;
         flex:1;
         span{
           font-weight:500;
         }
         .zm-card-title{
           margin-right:0.5rem;
         }
       }
       .zm-card-body{
         align-self:flex-start;
         span{
           margin-right:0.3rem;
           font-size:0.8rem;
         }
       }
     }
     .zm-card-right{
        min-height:4rem;
        float:right;
        display:flex;
        flex-direction:column;
        .zm-card-info{
          font-size:0.9rem;
          align-self:flex-start;
          flex:1;
        }
        .zm-card-button{
          align-self:flex-end;
          button{
            background:$theme;
            color:$white;
            font-size:0.7rem;
            border:0;
            outline:0;
            padding:0.3rem 1rem;
            border-radius:5rem;
            font-weight:600;
          }
          button.isAttentionSuccess{
            background:$isAttentionColor;
          }
        }
     }
   }
</style>
