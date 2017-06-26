<template>
  <div class="request-card">
    <div class="card-left">
      <div class="card-img">
        <img :src="value.photo" alt="">
      </div>
    </div>
    <div class="card-right">
      <div class="card-right-title">
        <span class="name">{{value.summary}}</span>
        <span class="address">{{value.address}}</span>
        <span class="price">{{"￥"+value.price}}</span>
      </div>
      <div class="card-right-body">
        <p>如果你无法简洁的表达你的想法，那只能说明你还不够了解它</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      value:{
        type:Object,
        default:()=>{
          return{
            photo:"/static/images/bitmap.png",
            name:"王强",
            address:"北京",
            price:Number(160).toFixed(2)
          }
        }
      }
    },
    data(){
      return{

      }
    },
    methods:{

    },
    components:{

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/valiable.scss";
  .request-card{
      border-bottom:2px solid $borderColor;
      &:after{
         display:div;
         clear:both;
       }
      padding:0.8rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      height:6rem;
      .card-left{
        float:left;
        width:15%;
        height:6rem;
      .card-img{
        display:inline-block;
        vertical-align:top;
        width:4rem;
        height:4rem;
        border-radius:50%;
        overflow:hidden;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .card-right{
      font-weight:300;
      float:left;
      width:85%;
      box-sizing:border-box;
      padding-left:1.5rem;
    span{
      margin-right:0.2rem;
    }
    .card-right-title{
      line-height:1.6rem;
      .name{
        font-size:0.9rem;
        font-weight:500;
        margin-right:0.8rem;
      }
      .address{
        color:$gray9;
        font-size:0.9rem;
      }
      .price{
         float:right;
         color:$red;
         font-size:0.9rem;
         font-weight:500;
      }
    }
      .card-right-body{
        clear:both;
        font-size:0.8rem;
      }
    }
  }
</style>
