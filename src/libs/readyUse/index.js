/**
 * Created by gaochao on 6/9/17.
 */
/**
 * import VueLazyload from 'vue-lazyload'

 Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'assets/logo.png',
  loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
  attempt: 1
})
 *
 *
 */

/**
 * mounted : function() {
  localStorage.removeItem("goodname")
  document.title="主页"
  //openid丢失时获取openid
  if(localStorage.getItem("openid")==null){
    if(getQuery.getQueryString("code")==null){
      let fromurl=location.href;
      let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx066707bb3a2536a&redirect_uri="+fromurl+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
      //window.location.href=url
    }else{
      API.user.getopenid({"code":getQuery.getQueryString("code")}).then(
        (resp) => {
          localStorage.setItem("openid",resp.body.result)
        }
      )
    }
  }
 *
 */


/**
 *
 获取openid
 if(getQuery.getQueryString("openid")){
    localStorage.setItem("openid",getQuery.getQueryString("openid"));
  }


 //scrollBehavior的参数

 router.push({ name: 'user', params: { userId: 123 }})
 const router = new VueRouter({
    scrollBehavior (to, from, savedPosition) {
      // to 和 from 都是 路由信息对象
    }
  })
 * @type {VueRouter}
 */



/**
 * router实例

 router.app: 配置了 router 的 Vue 根实例。

 router.mode: 路由使用的 模式。

 route.currentRoute: 当前路由对应的 路由信息对象.

 route.beforeEach(guard)

 route.push() 跳转路由,会向 history 栈添加一个新的记录

 等价于
 <router-link :to="...">

 router.push({ name: 'user', params: { userId: 123 }})

 router.push({ path: 'register', query: { plan: 'private' }})
 route.replace(): 它不会向 history 添加新记录，替换掉当前的 history 记录。
 *
 *
 */

/**
 * //H5+
 // 监听plusready事件
 document.addEventListener("plusready", function() {
	// 扩展API加载完毕，现在可以正常调用扩展API
	plus.key.addEventListener("backbutton", function() {
		if(!ROOT_APP.back()) {
			plus.runtime.quit();
		}
	});
}, false);
 *
 *
 *
 */


/**
 * Token 验证
 *
 *  export default {
	isOnline:function(){
		if(localStorage.getItem('token')){
			return true;
		}else{
			return false;
		}
	},
	setToken:function(value){
		localStorage.setItem('token',value);
	}
}
 *
 *
 *
 *
 *
 */



/***
 *
 *   //http请求配置
 import axios from 'axios'
 import config from '../config/base'
 export default{
  post:function(url,params,successCallBack){
  	ROOT_STATE.netLoading = true;
    //设置请求参数
    config.serviceConfig.data=params;
    //返回请求数据
    axios.post(url,{},config.serviceConfig)
    .then(function (response) {
      //成功回调
      ROOT_STATE.netLoading = false;
      successCallBack(response.data);
    })
    .catch(function (response) {
      //失败回调
      console.log(response);
    });
  }
}
 *
 *
 *
 *
 *
 *
 */


/**
 *
 *   import Vue from 'vue';
     Vue.mixin({
      methods:{
        goto:function(value){
          this.$router.push(value);
        }
      }
    });

 *
 *
 */

/**
 * //APP应用的全局配置
 import Qs from 'qs'
 export default {
	serviceConfig: {
		//请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
		url: '/',

		// 请求方法同上
		method: 'post', // default
		// 基础url前缀
		baseURL: window.ENV === 'dev' ? 'http://192.168.0.109:90/' : 'http://wqt.trade/',

		transformRequest: [function(data) {
			// 这里可以在发送请求之前对请求数据做处理
			var serizeData = Qs.stringify(data);
			return serizeData;
		}],

		transformResponse: [function(data) {
			// 这里提前处理返回的数据
			var objData = Qs.parse(data);
			return objData;
		}],

		// 请求头信息
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		},
		//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
		data: {
			//默认空对象
		},

		//设置超时时间
		timeout: 100000,
		//返回数据类型
		responseType: 'json', // default
	}
}
 Contact GitHub API Training Shop Blog About

 *
 *
 */





/**
 * watch: {
    '$route'(to, from) {
      const toDepth = compact(to.path.split('/')).length
      const fromDepth = compact(from.path.split('/')).length
      this.transitionName = toDepth > fromDepth ? 'vux-pop-in' : 'vux-pop-out'
    }
  }


 export function compact(array) {
  function f(element) {
    if (element !== false || element !== null || element !== 0 || element !== "" || element !== undefined || element !== NaN) {
      return element;
    }
  }
  var filtered = array.filter(f);
  return filtered;
}
 *
 *
 */



/***
 // 这是目前用的比较多的方式
 <keep-alive>
 <router-view v-if="!$route.meta.notKeepAlive"></router-view>
 </keep-alive>
 <router-view v-if="$route.meta.notKeepAlive"></router-view>


 routes: [
 { path: '/', redirect: '/index',  component: Index, meta: { keepAlive: true }},
 {
   path: '/common',
   component: TestParent,
   children: [
     { path: '/test2', component: Test2, meta: { keepAlive: true } }
   ]
 }
 ....
 // 表示index和test2都使用keep-alive
 */


