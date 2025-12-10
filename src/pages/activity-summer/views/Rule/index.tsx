import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default function Rule() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <NavBar onBack={() => navigate(-1)}>活动规则</NavBar>
      <div className={styles.content}>
        <h2>活动时间</h2>
        <p>2024年6月1日 - 2024年8月31日</p>

        <h2>参与方式</h2>
        <p>1. 点击分享按钮生成专属海报</p>
        <p>2. 分享给好友</p>
        <p>3. 好友扫码参与即可获得积分</p>

        <h2>积分兑换</h2>
        <p>100积分可兑换10元优惠券</p>
      </div>
    </div>
  );
}
