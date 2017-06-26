<template>
  <div class="zm-card">
    <div class="zm-card-left">
      <div class="zm-card-photo">
        <img :src="value.photo" alt="">
      </div>
    </div>
    <div class="zm-card-middle">
       <div class="zm-card-header">
         <span class="zm-card-title">{{value.realname}}</span><span>{{value.position}}</span>
       </div>
       <div class="zm-card-body">
         <span v-for="item in value.investment_fields">{{item}}</span>
       </div>
    </div>
    <div class="zm-card-right">
       <div class="zm-card-info">{{value.answer}}个回答</div>
       <div class="zm-card-button"><button :class="{'isAttentionSuccess':value.isFollowing}" @click="attention($event,value.id)">{{value.isFollowing?'已关注':'+关注'}}</button></div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    mounted(){
    },
    watch:{
    },
    data(){
      return {

      }
    },
    components: {

    },
    methods:{
      ...mapActions(["followInvestor"]),
       attention(e,id){
         e.preventDefault();
         this.followInvestor({url:"/api/investors/"+id+"/follow"}).then((res)=>{
           if(res.message=="取消关注成功"){
              this.value.isFollowing=false;
              this.$vux.toast.show({
                  text:"取消关注成功"
              })
           }else if(res.message=="关注成功"){
               this.value.isFollowing=true;
               this.$vux.toast.show({
                 text:"关注成功"
               })
           }
         });
       }
    },
    props:{
        value:{
            type:Object,
            default:()=>{
                return{
                }
            }
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
