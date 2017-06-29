/**
 * Created by gaochao on 6/9/17.
 */
import {getInfo} from './axios';

var  serviceUrl = 'http://smile888.applinzi.com/getToken.php';


var serverUrl="http://192.168.1.30/api/";

/**
 * 获取token
 * @param params
 */
var getToken=(params) =>getInfo(serviceUrl,params,'get');

/**
 * 获取微信配置信息
 * @param params
 */
var getWechatConfig=(params) =>getInfo("/api/wechat/jsconfig",params,'get');

/**
 * 获取微信支付参数
 * @param params
 */
var getWechatPayParameter=(params)=>getInfo("/api/wechat/payment/jsspi-parameters",params,"get");
/**
 * 获得所有投资人列表
 * @param params
 */
var getInvestors=(params) =>getInfo("/api/investors",params,'get');

/**
 * 获得投资人详情
 * @param params
 */
var getInvestorDetail = (params) =>getInfo(params.url,"",'get');

/**
 * 关注投资人
 * @param params
 */
var followInvestor=(params) =>getInfo(params.url,"",'post');

/**
 * 获得投资人问题
 * @param params
 */
var getQuestion=(params) => getInfo(params.url,"",'get');


/**
 * 获得问题详情
 * @param params
 */
var getQuestionDetail=(params)=>getInfo(params.url,"","get");

/**
 *  获取投资偏好信息
 * @param params
 */
var getInvestPreference=(params)=>getInfo("/api/investor/preferences",params,'get');

/**
 * 获得领域列表
 * @param params
 */
var getCategories=(params)=>getInfo("/api/categories",params,"get");

/**
 * 获得当前领域对应的投资人列表
 * @param params
 */
var getFieldInvestorList=(params)=>getInfo(params.url,"","get");

/**
 * 获得我的问题列表
 * @param params
 */
var getMyQuestion=(params)=>getInfo("/api/questions/user",params,"get");

/**
 * 获得我的回答列表
 * @param params
 */
var getMyAnswer=(params)=>getInfo("api/questions/investor",params,"get");


/**
 * 获得听过的问题
 * @param params
 */
var getListenedQuestion=(params)=>getInfo("api/questions/listens",params,"get");


/**
 * 保存提交问题
 * @param params
 */
var saveQuestion=(params)=>getInfo("api/questions",params,"post");





/**
 * 登录接口
 * @param { } openId,username,password
 */
var login = (params) => getInfo(serviceUrl,params,'post');

/**
 * 获取图片验证码
 * @param {mobile}
 */
var getImageCode = (params) => getInfo('http://10.160.10.50:8019/common/verification/Image/'+params.mobile,{},'get');

/**
 * 获取手机短信验证码(把图形验证码传给后端校验)
 * @param {mobile，verifyCode}
 */
var getSmsCode = (params) => getInfo('http://10.160.10.50:8019/common/verification/mobile/'+params.mobile,{"verifyCode":params.verifyCode},'get');


export {
  login,               //登录

  getToken,            //获取用户token

  getWechatConfig,     //获取微信配置

  getWechatPayParameter,//获取js支付参数

  getInvestors,        //获取投资人信息

  followInvestor,      //关注投资人

  getQuestion,         //获得投资人问题

  getInvestPreference, //获取投资偏好信息

  getInvestorDetail,   //获取投资人详情

  getCategories,       //获取投资领域列表

  getFieldInvestorList,//获取投资人列表

  saveQuestion,        //向投资人提交问题

  getQuestionDetail,   //获得问题详情

  getMyQuestion,       //获得我的问题

  getMyAnswer,         //获得我的回答列表

  getListenedQuestion, //获得听过的问题


  getImageCode,        //获取图片验证码

  getSmsCode,          //获取短信验证码
}

