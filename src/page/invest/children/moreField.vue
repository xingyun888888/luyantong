<template>
  <div class="more-filed-container">
     <router-link tag="li" v-for="i in 8" :key="i" to="/investorList">
        <invest-field-cell></invest-field-cell>
     </router-link>
  </div>
</template>
<script>
  import investFieldCell from "../../../components/common/investFieldCell.vue"
  export default{
    data(){
       return{

       }
    },
    components:{investFieldCell},
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  .more-filed-container{
    margin-bottom:5rem;
  }
</style>
