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
        <p>2024年3月1日 - 2024年3月31日</p>

        <h2>参与方式</h2>
        <p>1. 关注公众号</p>
        <p>2. 分享活动页面</p>
        <p>3. 邀请好友参与</p>

        <h2>奖品发放</h2>
        <p>活动结束后7个工作日内发放</p>
      </div>
    </div>
  );
}
