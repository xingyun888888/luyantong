<template>
  <div class="zm-card">
    <div class="zm-card-left">
      <div class="zm-card-photo">
        <img :src="photo" alt="">
      </div>
    </div>
    <div class="zm-card-middle">
       <div class="zm-card-header">
         <span class="zm-card-title">{{title}}</span><span>{{position}}</span>
       </div>
       <div class="zm-card-body">
         <span v-for="item in body">{{item}}</span>
       </div>
    </div>
    <div class="zm-card-right">
       <div class="zm-card-info">{{number}}个回答</div>
       <div class="zm-card-button"><button @click="attention">关注</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    props:{
      photo:{
          type:String,
          default:""
      },
      title:{
         type:String,
         default:"姓名"
      },
      position:{
         type:String,
         default:"总监"
      },
      body:{
          type:Array,
          default:()=>["互联网","电子商务","电子商务"]
      },
      number:{
          type:String,
          default:"0"
      },
      attention:{
          type:Function,
          default:function(){
              alert("关注");
              return true;
          }
      }

    },
    data(){
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
   @import "../../style/valiable.scss";
   .zm-card{
     overflow:hidden;
     color:$gray9;
     border-top:1px solid #aaa;
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
         border:1px solid #aaa;
         img{
           width:100%;
           height:100%;
           vertical-align:bottom;
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
         align-self:flex-start;
         flex:1;
         .zm-card-title{
           margin-right:0.5rem;
         }
       }
       .zm-card-body{
         align-self:flex-end;
         span{
           margin-right:0.1rem;
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
            border:0;
            outline:0;
            padding:0.3rem 1rem;
            border-radius:5rem;
          }
        }
     }
   }
</style>
