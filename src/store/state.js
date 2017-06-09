/**
 * Created by gaochao on 6/8/17.
 */
export default{
  shop:[],
  session:(process.env.NODE_ENV == 'development' ? 'oAnmJxNOk4geid2KrRdZA3ZsUUWc' : ''),
  system:(/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android')
}
