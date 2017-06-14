<template>
  <div class="invest-head">
    <div class="invest-card-head">
      <div class="zm-card-left">
        <div class="zm-card-photo">
          <img :src="value.photo" alt="">
        </div>
      </div>
      <div class="zm-card-right">
        <div class="zm-card-header">
          <span class="zm-card-title">{{value.name}}</span>
          <span class="address">{{value.address}}</span>
          <span class="answer-nummber">{{value.answered}}个回答</span>
          <span class="listened-number">{{value.listened}}人关注</span>
        </div>
        <div class="zm-card-body">
          <span class="position">{{value.position}}</span>
          <button :class="{'isAttentionSuccess':isAttentionSuccess}" @click="attention(value.name)">{{isAttentionSuccess?'已关注':'+关注'}}</button>
        </div>
      </div>
    </div>
    <div class="invest-card-body">
       <a class="zm-label" v-for="item in value.label">{{item}}</a>
    </div>
    <div class="invest-card-foot">
      <p>的方式发送到过节费上东国际佛国际法的两个疯掉了国际法的老规矩了解过路费等会就发过了会根据法律积分落户</p>
    </div>
  </div>
</template>
<script>

  import {mapActions} from "vuex"
  export default{
    props:{
       value:{
           type:Object,
           default:()=>{
               return{
                   photo:"",
                   address:"北京",
                   name:"王强",
                   number:"12",
                   listened:"20",
                   answered:"30",
                   position:"创投孵化器/创投总监",
                   attention:function(param){
                       return new Promise((resolve,reject)=>{
                         resolve("关注成功");
                       })
                   },
                   label:["金融服务",'企业服务','机械硬件']
               }
           }
       }
    },
    data(){
       return{
         isAttentionSuccess:false
       }
    },
    methods:{
      ...mapActions,
      attention(param){
        if(this.isAttentionSuccess) return;
        param = JSON.stringify(param);
        this.value.attention(param).then((res)=>{
          this.$vux.toast.show({text:"关注成功"})
          this.isAttentionSuccess=true;
        });
      }
    },
    components:{

    }
  }
</script>
<style lang="scss" scoped>
@import "../../style/valiable.scss";
  .invest-head{
  	box-sizing:border-box;
  	padding:0.8rem;
  	.invest-card-head{
  		width:100%;
  		overflow:hidden;
  		height:4rem;
  		.zm-card-left{
  			float:left;
  			width:15%;
  		    height:4rem;
        line-height:4rem;
  		    .zm-card-photo{
  		    	display:inline-block;
  		    	width:3rem;
  		    	height:3rem;
  		    	border-radius:50%;
  		    	border:1px solid #aaa;
  		    }
  		}
  		.zm-card-right{
        box-sizing:border-box;
  			width:85%;
  			float:left;
      padding-left:0.5rem;
  			.zm-card-header{
  				span{
  				  margin-right:0.5rem;
  				  color:$gray9;
  				}
  				.address{
  					font-size:0.9rem;
  				}
  				.answer-nummber{
  					font-size:0.9rem;
  					float:right;
  				}
  				.listened-number{
  					font-size:0.9rem;
  					float:right;
  				}
  			}
  			.zm-card-body{
          .position{
            font-size:0.9rem;
          }
  				button{
  				  float:right;
  				  background:$theme;
  				  border:0;
  				  outline:0;
  				  width:4rem;
  				  padding:0.3rem;
  				  border-radius:2rem;
  				  color:$white;
            font-size:0.8rem;
  				}
          button.isAttentionSuccess{
            background:$isAttentionColor;
          }
  			}
  		}
  	}
  	.invest-card-body{
  		clear:both;
  		a.zm-label{
            background:$textBackgroundGray;
            width:4rem;
            padding:0.3rem 0.5rem;
            border-radius:1.5rem;
            font-size:0.9rem;
            margin-right:0.5rem;
            color:$gray3;
  		}
  	}
  	.invest-card-foot{
  		margin-top:1rem;
  		font-size:0.9rem;
  		color:$gray3;
  	}
  }

</style>
