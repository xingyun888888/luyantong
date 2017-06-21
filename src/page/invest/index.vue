<template>
  <div class="zm-container">
    <search ref="search"
            v-if="searchIsShow"
            position="absolute"
            @on-cancel="onCancel"
            @on-change="getResult"
            :results="results"
            @result-click="resultClick" >
    </search>
    <!--<div class="invest-field" @click="setFocus" v-else ><span>投资人关注领域</span><x-icon class="invest-search" type="ios-search" size="20" ></x-icon></div>-->
    <div class="list-title"><b></b><span>投资人关注领域</span><span class="zm-search" @click="setFocus">
      <svg t="1497520483268" class="icon" style="width:1.6rem;height:1.6rem;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14340" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M993.924741 940.790519l-172.86637-172.86637C888.452741 688.564148 929.185185 585.860741 929.185185 473.581037c0-251.354074-203.757037-455.111111-455.111111-455.111111s-455.111111 203.757037-455.111111 455.111111 203.757037 455.111111 455.111111 455.111111c111.767704 0 214.072889-40.353185 293.281185-107.216593l172.942222 172.942222c14.810074 14.810074 38.817185 14.810074 53.627259 0C1008.734815 979.607704 1008.734815 955.600593 993.924741 940.790519zM474.074074 852.840296c-209.464889 0-379.259259-169.79437-379.259259-379.259259s169.79437-379.259259 379.259259-379.259259 379.259259 169.79437 379.259259 379.259259S683.538963 852.840296 474.074074 852.840296z" p-id="14341" fill="#1296db"></path></svg>
    </span></div>
    <grid :rows="4" class="field-list">
      <grid-item v-for="(i,index) in 8" :key="i" class="text-center">
          <router-link to="moreField" tag="li">
            <div>
              <svg width="3.8rem" height="3.8rem" viewBox="0 0 50 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: sketchtool 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
                <title>E3234A8E-80DB-4FBC-8B32-C43FF3F6976E</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="找投资" transform="translate(-25.000000, -130.000000)">
                    <g id="企业服务" transform="translate(25.000000, 130.000000)">
                      <g>
                        <path d="M27.7165777,2.55547807 C16.2756758,2.55547807 7,12.6580913 7,25.1202788 C7,37.5805205 16.2756758,47.6832728 27.7165777,47.6832728 C39.1574796,47.6832728 48.4329003,37.5796867 48.4329003,25.1193059 C48.4329003,12.6580913 39.1574796,2.55547807 27.7165777,2.55547807" id="Fill-1" fill="#E0EDFC"></path>
                        <path d="M26.8320637,20.6846323 L24.700126,18.5496471 C22.4579971,16.3043131 18.8239051,16.3043131 16.5846905,18.5496471 C14.3425615,20.7949811 14.3425615,24.4342678 16.5846905,26.6766833 L26.8208225,36.9274474 L26.8462193,36.9274474 L37.0823513,26.6766833 C39.3243415,24.4314882 39.3243415,20.7920625 37.0823513,18.5496471 C34.8402223,16.3043131 31.2061304,16.3043131 28.966777,18.5496471 L26.8320637,20.6846323 Z" id="Fill-3" fill="#4295E8"></path>
                        <path d="M24.9434073,20.9140994 L22.8901578,18.8579149 C20.7310193,16.69569 17.2309888,16.69569 15.074487,18.8579149 C12.9152097,21.0202789 12.9152097,24.5253125 15.074487,26.6848969 L24.9325825,36.5569451 L24.9570077,36.5569451 L34.8151032,26.6848969 C36.9742417,24.522533 36.9742417,21.0176383 34.8151032,18.8579149 C32.6558258,16.69569 29.1557953,16.69569 26.9992936,18.8579149 L24.9434073,20.9140994 Z" id="Fill-5" fill="#95BFFC"></path>
                        <path d="M24.9587841,39.2787802 C24.8344373,39.2787802 24.687053,39.2295819 24.6003155,39.1427204 L12.7022935,27.2275517 C9.92142072,24.4399242 9.92142072,19.9065899 12.7022935,17.121742 C15.4830275,14.336894 20.0098909,14.3339755 22.793678,17.121742 C22.9757573,17.3040815 22.9757573,17.5994105 22.793678,17.7788315 C22.6115987,17.9613101 22.3166913,17.9613101 22.1375264,17.7788315 C19.7178978,15.3558832 15.7808493,15.3558832 13.3613595,17.7788315 C10.9418697,20.2019188 10.9418697,24.1445953 13.3613595,26.5704621 L24.944351,38.1700111 L36.5273425,26.5704621 C38.9468323,24.1475138 38.9468323,20.2046984 36.5273425,17.7788315 C34.1078527,15.3558832 30.1706654,15.3558832 27.7511756,17.7788315 L20.281622,25.2590626 C20.0995427,25.4415411 19.8046353,25.4415411 19.6254704,25.2590626 C19.4461667,25.076723 19.4433911,24.781533 19.6254704,24.601973 L27.095024,17.121742 C29.8758968,14.336894 34.4026214,14.3339755 37.1864085,17.121742 C39.9701957,19.9095084 39.9701957,24.4428428 37.1864085,27.2275517 L25.2883865,39.1427204 C25.201649,39.2295819 25.083131,39.2787802 24.9587841,39.2787802" id="Fill-7" fill="#1C70D7"></path>
                        <g id="Group-11" transform="translate(0.000000, 0.067543)" fill="#539FFD">
                          <path d="M24.9449339,48.7966977 C11.8460489,48.7966977 1.228272,38.1627703 1.22813322,25.045022 C1.22813322,11.8901665 11.8052476,1.29626485 24.9414644,1.29445813 C38.0420147,1.29251243 48.6625672,11.9272737 48.6625672,25.044883 C48.6625672,28.0580724 48.1009247,30.9392323 47.0786716,33.5910779 C46.9639005,33.8887695 47.0976844,34.2244022 47.3844038,34.3635195 L47.3844038,34.3635195 C47.7083162,34.520565 48.0977328,34.366994 48.2272145,34.0306664 C49.2884648,31.274309 49.8766143,28.2828003 49.889382,25.1549539 C49.9453103,11.3338362 38.7459066,0.0711708063 24.9445175,0.0714487629 C11.1688027,0.0717267196 0.000208169935,11.2558694 -6.93899782e-05,25.0523879 C-0.000208169935,38.8819832 11.2776062,50.1090702 25.0870446,50.0317982 C30.515145,50.0015009 35.5316241,48.2332796 39.612865,45.2565026 C39.8970864,45.0491469 39.9525984,44.6468046 39.7336036,44.3713495 L39.7336036,44.3713495 C39.5289032,44.1138227 39.1579443,44.0619838 38.8921807,44.2558585 C34.9777533,47.1110295 30.1582029,48.7966977 24.9449339,48.7966977" id="Fill-9"></path>
                        </g>
                        <path d="M46.0085254,36.0364295 C44.9036982,38.1683572 43.4861997,40.1116913 41.815983,41.8045864 C41.5980984,42.025423 41.5814448,42.3750925 41.7746265,42.6178876 L41.775598,42.6191385 C42.0054176,42.9082134 42.4364681,42.9311448 42.6957091,42.6681978 C44.4491939,40.8892751 45.9373313,38.8476833 47.0978093,36.6084644 C47.2576838,36.2997935 47.1329207,35.9192708 46.8203882,35.7677844 L46.8203882,35.7677844 C46.5215949,35.62283 46.161461,35.7413785 46.0085254,36.0364295" id="Fill-12" fill="#539FFD"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span class="field-title">{{fieldNames[index]}}</span>
          </router-link>
      </grid-item>
    </grid>
    <div class="list-title"><b></b><span>投资人列表</span></div>
    <router-link v-for="(item,index) in list" :key="index" to="investorDetail" >
      <investor-card  :value="value" ></investor-card>
    </router-link>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="circles">
      <div slot="no-results" >
        <p style="font-size:1rem;padding:1rem;text-align:center;" @click="changeFilter">加载失败,请点我重试</p>
      </div>
      <div slot="no-more">
        <p style="font-size:1rem;padding:1rem;text-align:center;" @click="changeFilter">没有更多信息了</p>
      </div>
    </infinite-loading>
  </div>
</template>
<script>

   import {mapActions} from "vuex"
   import investorCard from '../common/investorCard.vue'
   import {Grid,GridItem,GroupTitle,Search,Icon} from "vux"
   import InfiniteLoading from 'vue-infinite-loading';
   import reSetTitleUtil from "../common/RestTitle"
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
         reSetTitleUtil.reSetTitle("找投资");
       },

       data(){
         return{
           value:{
             photo:"/static/images/photo.png",
             name:"姓名",
             position:"创投孵化器/创投总监",
             fields:["互联网","电子商务","电子商务"],
             attention:this.attentionInvestor,
             answer:"160",
           },
           searchIsShow:false,
           fieldNames:["企业服务","金融服务","互联网","学习教育","生活消费","机械硬件","食品链","更多分类"],
           results: [],
           list:[]
         }
       },
       components:{investorCard,Grid,GridItem,GroupTitle,Search,Icon,InfiniteLoading},
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
         },
         onInfinite() {
           setTimeout(() => {
             const temp = [];
             for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
               temp.push(i);
             }
             this.list = this.list.concat(temp);
             this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
             if (this.list.length / 6 === 10) {
               this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
               this.$vux.toast.show({
                 text:"没有更多信息了",
                 type:'text',
                 width:'80%',
                 time:1500
               })
             }
           }, 500);
         },
         changeFilter() {
           this.list = [];
           this.$nextTick(() => {
             this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
           });
         }
       }

   }
</script>
<style lang="scss" scoped>
  @import '../../style/valiable.scss';
  .text-center{
    text-align:center;
  }
  .invest-field{
    text-align:center;
    height:3rem;
    line-height:3rem;
    span{

    }
    /*.invest-search{*/
      /*display:inline-block;*/
      /*vertical-align:middle;*/
      /*margin-left:1rem;*/
      /*width:1.5rem;*/
      /*height:1.5rem;*/
    /*}*/
  }
  .zm-container{
    margin-bottom:5rem;
  }
  .field-list{
    a{
      text-decoration:none;
    }
    .field-title{
      color:$gray6;
      font-weight:600;
      font-size:0.9rem;
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
</style>
