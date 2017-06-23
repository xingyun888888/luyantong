<template>
  <div class="invest-preference-container">
    <div class="invest-preference">
      <div class="title">
        <i></i><b>投资偏好阶段</b><span>(多选，最多选择3个)</span>
      </div>
      <checklist :max="3" :label-position="labelPosition" required :options="investPreferenceList" v-model="investPreferenceSelected" @on-change="change"></checklist>
    </div>
    <div class="zm-split-line"></div>
    <div class="resident-city">
      <div class="title">
        <i></i><b>常驻城市</b><span>(最多选择2个)</span>
      </div>
      <group>
        <x-address @on-show="logShow" v-model="residentCityOne" title="" :list="addressData" placeholder="请选择地址" ></x-address>
        <x-address @on-show="logShow" v-model="residentCityTwo" title="" :list="addressData" placeholder="请选择地址" ></x-address>
      </group>
    </div>
    <div class="zm-split-line"></div>
    <div class="invest-plan-number">
      <div class="title">
        <i></i><b>计划一年内投资项目个数</b>
      </div>
      <group >
        <radio :options="planInvestNumber" @on-change="change" v-model="planInvestNumberSelected" ></radio>
      </group>

    </div>
    <div class="zm-split-line"></div>
    <div class="single-invest-limit">
      <div class="title">
        <i></i><b>单个项目项目投资预期额度</b>
      </div>
      <group >
        <radio :options="singleInvestLimit" @on-change="change" v-model="singleInvestLimitSelected" ></radio>
      </group>
    </div>
    <div class="zm-split-line"></div>
    <div class="invest-case">
      <div class="title">
        <i></i><b>投资案例</b>
      </div>
      <group>
        <x-textarea  placeholder="根据您以往的投资经历，简单的描述。" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
      </group>
    </div>
    <div class="save-button">
      <x-button text="保存"  @click.native="save" :disabled="isSave" type="primary"></x-button>
    </div>


  </div>
</template>
<script>
  import {Checklist,Group,Radio,XTextarea,XButton,XAddress,ChinaAddressV3Data} from 'vux'
  import {mapActions} from "vuex"
  export default{
      mounted(){
        this.getInvestPreference().then((res)=>{
            console.log(res);
            this.investPreferenceList=res.investment_stages;
            this.investPreferenceSelected=res.investment_stages_checked;
            this.planInvestNumber=res.plan_to_invest_amount;
            this.planInvestNumberSelected=res.plan_to_invest_amount_checked;
        });
      },
      data(){
          return{
            addressData: ChinaAddressV3Data,
            residentCityOne: [],
            residentCityTwo:[],
            isSave:false,
            labelPosition: '',
            investPreferenceList: [],
            investPreferenceSelected:[],
            planInvestNumber:['1-5','6-10','11-20','21-50','51-100','101及以上'],
            planInvestNumberSelected:[],
            singleInvestLimit:['RMB 100-500万','RMB 500-1000万','RMB 1000-5000万','RMB 10000万以上'],
            singleInvestLimitSelected:[]

          }
      },
      methods:{
        ...mapActions(['getInvestPreference']),
        logShow (str) {
          console.log('on-show')
        },
        save(){

        },
        change (val) {
          console.log('change', val)
        },
        onEvent (event) {
          console.log('on', event)
        }
      },
      components:{
        Checklist,Group,Radio,XTextarea,XButton,XAddress
      }
  }
</script>
<style lang="scss" scoped>
  .invest-preference-container{
     margin-bottom:5rem;
     .invest-preference,.resident-city,.invest-plan-number,.single-invest-limit,.invest-case,.save-button{
       padding:0.5rem 1rem;
     }




     .title{
        height:4rem;
        line-height:4rem;
        i{
          display:inline-block;
          width:0.3rem;
          height:1rem;
          background:#539ffd;
          vertical-align:middle;
        }
        b{
          margin-left:0.5rem;
          display:inline-block;
          vertical-align:middle;
          font-size:1.0rem;
          color:#666;
          font-weight:500;
        }
        span{
          margin-left:0.8rem;
          color:#539ffd;
          font-size:0.8rem;
          vertical-align:middle;
          font-weight:500;
        }
     }


  }
</style>
