import request from '@/utils/request';
// 获取用户信息接口
export function getUserInfo(options:any){
  return request(options)
}
// 登录接口
export function login(options:any){
  return request(options)
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量

export function userSubcount(options:any){
  return request(options)
}
