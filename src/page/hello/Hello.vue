<template>
  <div class="hello">
    <router-link to="swiper" tag="span">swiper</router-link>
    <router-link to="timeline" tag="span" >timeline</router-link>
    <weui-distpicker></weui-distpicker>
    <div>
      <group title="$t('isLink is set to true when link exists')">
        <cell v-for="(item,index) in list" :key="index" title="$t('Go to Radio Demo')" link="/component/radio" inline-desc='link="/component/radio"'></cell>
      </group>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="circles">
          <div slot="no-results" >
            <p style="font-size:1rem;padding:1rem;text-align:center;" @click="changeFilter">加载失败,请点我重试</p>
          </div>
          <div slot="no-more">
          </div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
  //import {Group,Cell} from "vux"
  // foot from "../../components/footer/footGuide"
  import InfiniteLoading from 'vue-infinite-loading';

  import { Cell,Group } from 'vux'

  import WeuiDistpicker from "weui-distpicker"

  export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [],
    }
  },
  methods:{
    onInfinite() {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.$vux.toast.show({
          text:"没有更多信息了",
          type:'text',
          width:'80%',
          time:1500
        })
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        if (this.list.length / 6 === 10) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        }
      }, 2000);
    },
    changeFilter() {
      this.list = [];
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
    getMsg(){
        alert(this.msg);
    }

  },
  components:{
     WeuiDistpicker,InfiniteLoading,Cell,Group
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
