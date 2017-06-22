<template>
  <div class="withdraw-deposit-apply-container">
      <div class="zm-row">
        <span class="small-label">账户余额</span><span>{{accountMoney}}&nbsp;元</span>
      </div>
      <div class="zm-row">
        <span class="small-label">提现金额</span><input type="text" class="input-money" v-model="withdrawDepositMoney">&nbsp;元 <a href="javascript:void(0)" class="all-money" @click="withdrawDepositMoney=accountMoney">全部提现</a>
      </div>
    <div class="save-button">
      <x-button text="提交"  @click.native="save" :disabled="false" type="primary"></x-button>
    </div>
  </div>
</template>
<script>
  import {XButton} from 'vux';
  export default{
      data(){
        return{
          accountMoney:"1009.00",
          withdrawDepositMoney:""
        }
      },
      components:{
        XButton
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/valiable.scss";
  .withdraw-deposit-apply-container{
    padding:2rem;
    .zm-row{
       font-size:0.9rem;
       font-weight:600;
       color:$gray9;
       margin-bottom:2rem;
      .small-label{
         margin-right:2rem;
      }
      .input-money{
        width:4rem;
        border-bottom:1px solid $gray9;
        color:$theme;
        font-size:0.9rem;
      }
      .all-money{
        margin-left:3rem;
        color:$theme;
        font-weight:500;
      }
    }
  }
</style>
