
import  * as userInfo from '../services/userInfo';
export default {
  namespace: 'user',
  state: {
    count: 0,
  },

  effects: {

    * getUserInfo({ payload, callback }:any,{ call, put }:any){
      // 请求services中的方法
      const res = yield call( userInfo.getUserInfo, payload );
      if( callback ){
        callback(res);
      }
      yield put({ type: 'save', payload: res })
    },
    // 登录
    * login( { payload, callback }:any, { call, put }:any ){
      const res = yield call( userInfo.login, payload );
      if( callback ){
        callback(res);
      }
      // 保存登陆人信息
      yield put({ type: 'save', payload: res })
    },
    // 获取用户信息 , 歌单，收藏，mv, dj 数量
    * userSubcount( { payload, callback }:any, { call, put }:any ){
      const res = yield call( userInfo.userSubcount, payload );
      if( callback ){
        callback(res);
      }
    }
  },

  // 操作state中的数据
  reducers: {
    add( state:any, { payload }:any ){
      state.count++
      return state
    },
    save( state:any, { payload }:any ){
      state.userInfo = payload;
      return state
    }
  },
}
