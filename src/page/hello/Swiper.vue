<template>
  <div>
    <router-link to="swiper" tag="span">swiper</router-link>
    <router-link to="timeline" tag="span" >timeline</router-link>
  </div>
</template>
<script>
  import { XSwitch, Group } from 'vux'
  export default {
    components: {
      XSwitch,
      Group
    },
    data () {
      return {
        value1: true
      }
    }
  }
</script>
