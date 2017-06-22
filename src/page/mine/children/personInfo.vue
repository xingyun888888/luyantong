<template>
  <div class="person-info-container">
    <header>
      <div class="person-photo">
        <img :src="photo" alt="">
      </div>
      <div class="name">
         <h4>王强</h4>
      </div>
    </header>
    <div class="info-content">

    </div>
  </div>
</template>
<script>
  export default{
      mounted(){

      },
      data(){
          return{
             photo:"/static/images/bitmap.png"
          }
      },
      methods:{

      },
      components:{

      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
  .person-info-container{
      header{
        width:100%;
        height:4rem;
        background:$theme;
        text-align:center;
        .person-photo{
            display:inline-block;
            overflow:hidden;
            border-radius:50%;
            border:0.4rem solid #fff;
            width:6rem;
            height:6rem;
            margin-top:1rem;
            img{
              width:100%;
              height:100%;
            }
         }
        .name{
          h4{
            font-size:1.0rem;
            font-weight:500;
          }
        }
      }
      .info-content{

      }

  }
</style>
