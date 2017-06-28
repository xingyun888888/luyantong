<template>
  <div class="search-container">
    <div class="search-input">
      <input type="text" v-model="keyword">
    </div>
    <div class="search-result">
       <div class="tab-content">
         <a href="">热门搜索</a><a href="">最近搜索</a>
       </div>
       <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
      mounted(){

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
  .search-container{
     .search-input{

     }
     .search-result{
        .tab-content{
          text-align:center;
          a{
            display:inline-block;
            border:1px solid #ccc;
            padding:0 0.5rem;
          }
        }
     }
  }
</style>
