import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Button } from 'antd-mobile';

import t1 from '../../assets/img/t7.png';

const Index = ({ dispatch, user }: any) => {
  let [phone, changePhone] = useState('');
  let [password, changePassword] = useState('');

  return (
    <div className={styles.index_root}>
      <div className={styles.index_root_item}>
        <div className={styles.index_root_item_left}>
          <img src={t1} alt="" />
          <span>健康城</span>
        </div>
        <div className={styles.index_root_item_right}>
          <div className={styles.index_root_item_right_title}>
            300人会议中心
          </div>
          <div className={styles.index_root_item_right_desc}>可容纳300人</div>
          <div className={styles.index_root_item_right_tag}>
            <div>
              <div>会议</div>
              <div>会议</div>
              <div>会议</div>
              <div>会议</div>
            </div>
          </div>
          <div className={styles.index_root_item_right_count}>
            累计120次预定｜100次使用
          </div>
          <div className={styles.index_root_item_right_num}>100</div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ user }: any) => ({ user }))(Index);
