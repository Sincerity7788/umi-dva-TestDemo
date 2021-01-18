import qs from 'qs';
import constant from './constant';
export default function ( options:any ){
  /*
  * 封装一个请求的方法
  * 参数
  *   url
  *   method
  *   data
  *
  * */
  interface LooseObject {
    [key: string]: any
  }
  let objInfo:LooseObject = {}
  let url = constant.url;
  // 验证url
  if ( !options.url ) {
    throw '请输入正确的url';
    return
  }
  // 验证请求方式
  if ( !options.method ) {
    // 如果没有写请求方式，默认是get方式
    options.method = 'GET';
  }
  try{
    let status = false;
    // 当前是get请求
    if ( options.method === 'GET' || options.method === 'get' ) {
      options.url += `?${qs.stringify(options.data)}`;
      objInfo.method = 'GET'
    }
    // 当前是post请求
    if( options.method === 'POST' || options.method === 'post' ){
      objInfo.data = qs.stringify(options.data);
      status = true;
      objInfo.method = 'POST'
    }
    let obj = null;
    // 默认header
    if( !options.headers &&  status){
      obj = {
       'Content-Type': 'application/json'
      }
    }else{
      obj = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    objInfo.headers = obj;

  }catch( e:any ){
    console.error(e);
    return
  }
  return fetch(constant.url + options.url,{
    ...objInfo
  })
    .then( res => res.json() )
    .then( res => {
      return res
    } )
}
