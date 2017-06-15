/**
 * Created by gaochao on 6/9/17.
 */
import {getInfo} from './axios';

var  serviceUrl = 'http://smile888.applinzi.com/getToken.php';

/**
 * 获取token
 * @param params
 */
var getToken=(params) =>getInfo(serviceUrl,params,'get');


var attentionInvestor=(params) =>getInfo(serviceUrl,params,'post');


var getQuestion=(params) => getInfo(serviceUrl,params,'get');







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
  login,              //登录
  getToken,           //获取用户token
  attentionInvestor,  //关注投资人
  getQuestion,        //获得投资人问题




  getImageCode,       //获取图片验证码
  getSmsCode,         //获取短信验证码
}

