import React,{useState} from 'react';
import { connect } from  'dva';
import styles from './index.less';
import { Input, Button,message } from 'antd';
const Index = ({ dispatch, user }:any) => {
  let [ phone,changePhone ] = useState('');
  let [ password,changePassword ] = useState('');

  function add(){
    console.log(user)
    dispatch({
      type: 'user/getUserInfo',
      payload: {
        url: '/cellphone/existence/check',
        data: {
          phone: '18515600765'
        }
      },
      callback: ( res:any ) => {
        console.log(res, user)
      }
    })
  }
  // 登录的方法
  let login = () => {
    // 校验账号密码
    if( !phone && !password  ){
      message.warning('请输入正确的用户名或者密码！');
      return
    }
    dispatch({
      type: 'user/login',
      payload: {
        url: '/login/cellphone',
        data: {
          phone,
          password
        }
      },
      callback: ( res:any ) => {
        console.log(res, user)
        if( res.code === 200 ){
          message.success('登录成功')
        }else{
          message.error(res.msg)
        }
      }
    })
  }
  // 获取用户信息 , 歌单，收藏，mv, dj 数量
  let getSubcount = () => {
    dispatch({
      type: 'user/userSubcount',
      payload: {
        url: '/user/subcount',
        data: {}
      },
      callback: ( res:any ) => {
        console.log(res, user)
      }
    })
  }

  return (
    <div className={styles.index_root}>
      <h1>网易云登录</h1>

      <div>
        <div>
          <span>手机号:</span>
          <Input value={phone} onChange={ e => { changePhone(e.target.value) } } />
        </div>
        <div>
          <span>密码:</span>
          <Input.Password value={password} onChange={ e => { changePassword(e.target.value) } } />
        </div>
        <div className={styles.btn}>
          <Button onClick={login}>登录</Button>
        </div>
        <div className={styles.btn}>
          <Button onClick={login}>获取用户信息</Button>
        </div>

      </div>
      <h1>修改网易云密码</h1>
      <div>
        <div>
          <span>手机号:</span>
          <Input />
        </div>
        <div>
          <span>验证码:</span>
          <Input />
          <Button> 发送验证码 </Button>
        </div>
        <div>
          <span>手机号:</span>
          <Input />
        </div>
      </div>
    </div>
  );
}


export default connect(({ user }:any)=>( { user } ))(Index)
