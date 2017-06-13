<template>
  <div class="zm-container">
    <search ref="search" v-if="searchIsShow" @on-cancel="onCancel"></search>
    <div class="invest-field" @click="setFocus" v-else ><span>投资人关注领域</span><x-icon class="invest-search" type="ios-search" size="20" ></x-icon></div>
    <grid :rows="4" class="field-list">
      <grid-item v-for="(i,index) in 8" :key="i" class="text-center">
          <router-link to="moreField" tag="li">
            <div>
              <svg t="1497354660072" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M522.987239 20.030196c4.181229 0.338714 8.356318 0.805342 12.544711 0.995677C600.840374 23.985274 663.055344 39.466873 722.155371 67.348897c53.422723 25.203008 100.869339 58.941414 141.967362 101.345176 66.188468 68.290339 109.50502 148.911518 129.315204 242.056941 7.676843 36.096103 11.343349 72.621994 10.531867 109.451808-2.293229 104.153128-33.253358 199.015659-95.315856 282.877649-72.738651 98.28856-169.202657 161.219845-288.334941 189.062983-30.40959 7.106862-61.33288 10.830673-92.566232 11.638061-114.347305 2.957355-218.030735-28.9084-309.653479-97.379864C127.811967 838.927911 67.7398 750.190891 37.470403 641.519866c-8.414647-30.210046-13.662161-61.025888-15.687284-92.357478-0.561795-8.691963-1.239224-17.375739-1.863441-26.063609 0-7.238868 0-14.476713 0-21.715581 0.217964-1.470491 0.536212-2.934842 0.636496-4.41352 0.735757-10.812253 1.231037-21.644973 2.168386-32.438806 3.108804-35.800367 10.215666-70.842465 21.762653-104.845906 45.065382-132.712581 130.647549-230.091422 256.506025-291.64022C360.114754 39.131229 422.978501 24.043602 488.730017 21.026896c4.187369-0.192382 8.361435-0.656963 12.541641-0.995677C508.510526 20.030196 515.748371 20.030196 522.987239 20.030196zM512.433882 37.864376C251.916497 37.306674 40.883129 248.009514 37.689391 505.934864c-3.282766 265.120216 210.060203 477.8052 468.474694 480.764602 264.904299 3.035126 477.597469-210.220862 480.43612-468.831828C989.516628 252.215302 774.177188 37.393655 512.433882 37.864376z" p-id="2374" fill="#bfbfbf"></path><path d="M255.69659 498.700089c0 30.723745 24.907273 55.625902 55.629995 55.625902 30.723745 0 55.626925-24.902156 55.626925-55.625902 0-30.722722-24.90318-55.629995-55.626925-55.629995C280.603863 443.070094 255.69659 467.977367 255.69659 498.700089L255.69659 498.700089zM474.667743 498.700089c0 30.723745 24.907273 55.625902 55.631018 55.625902 30.722722 0 55.625902-24.902156 55.625902-55.625902 0-30.722722-24.90318-55.629995-55.625902-55.629995C499.575016 443.070094 474.667743 467.977367 474.667743 498.700089L474.667743 498.700089zM678.529781 498.700089c0 30.723745 24.907273 55.625902 55.629995 55.625902 30.723745 0 55.631018-24.902156 55.631018-55.625902 0-30.722722-24.907273-55.629995-55.631018-55.629995C703.437054 443.070094 678.529781 467.977367 678.529781 498.700089L678.529781 498.700089zM678.529781 498.700089" p-id="2375" fill="#bfbfbf"></path></svg>
            </div>
            <span class="field-title">{{fieldNames[index]}}</span>
          </router-link>
      </grid-item>
    </grid>
    <div class="list-title">投资人列表</div>
    <investor-card v-for="(item,index) in 10" :key="index" :value="value" ></investor-card>
  </div>
</template>
<script>

   import {mapActions} from "vuex"
   import investorCard from '../../components/common/investorCard.vue'
   import {Grid,GridItem,GroupTitle,Search,Icon} from "vux"
   function getResult (val) {
     let rs = []
     for (let i = 0; i < 20; i++) {
       rs.push({
         title: `${val} result: ${i + 1} `,
         other: i
       })
     }
     return rs
   }
   export default {
       mounted(){
         console.log(this);
       },

       data(){
         return{
           value:{
             photo:"",
             name:"姓名",
             position:"总监",
             fields:["互联网","电子商务","电子商务"],
             attention:this.attentionInvestor,
             answer:"160",
           },
           searchIsShow:false,
           fieldNames:["企业服务","金融服务","互联网","学习教育","生活消费","机械硬件","食品链","更多分类"],
           results: []
         }
       },
       components:{investorCard,Grid,GridItem,GroupTitle,Search,Icon},
       methods:{
         ...mapActions(["attentionInvestor"]),
         setFocus(){
             this.searchIsShow=true;
             this.$nextTick(()=>{
               this.$refs.search.setFocus();
             })
         },
         resultClick (item) {
           window.alert('you click the result item: ' + JSON.stringify(item))
         },
         getResult (val) {
           this.results = val ? getResult(this.value) : []
         },
         onSubmit () {
           this.$vux.toast.show({
             type: 'text',
             position: 'top',
             text: 'on submit'
           })
         },
         onFocus () {
           console.log('on focus')
         },
         onCancel () {
           console.log('on cancel')
           this.searchIsShow=false;
         }
       }

   }
</script>
<style lang="scss" scoped>
  .text-center{
    text-align:center;
  }
  .invest-field{
    text-align:center;
    height:3rem;
    line-height:3rem;
    span{

    }
    .invest-search{
      display:inline-block;
      vertical-align:middle;
      margin-left:1rem;
      width:1.5rem;
      height:1.5rem;
    }
  }
  .list-title{
    height:3rem;
    line-height:3rem;
    padding-left:0.8rem;
  }
  .zm-container{
    margin-bottom:5rem;
  }
  .field-list{
    a{
      text-decoration:none;
    }
    .field-title{
      color:#999;
    }
  }

  .weui-grids.field-list{
     &:before,&:after{
       border:0;
     }
     .weui-grid.text-center{
       &:before,&:after{
          border:0;
       }
     }
  }
  .weui-search-bar__cancel-btn{
    font-weight:300;
  }
</style>
