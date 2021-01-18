import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Button } from 'antd-mobile';
const Index = ({ dispatch, user }: any) => {
  let [phone, changePhone] = useState('');
  let [password, changePassword] = useState('');

  return (
    <div className={styles.index_root}>
      <div>123</div>
      <Button>这是按钮</Button>
    </div>
  );
};

export default connect(({ user }: any) => ({ user }))(Index);
