import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌸 春季活动</h1>
      <p className={styles.desc}>参与活动赢取丰厚奖品</p>
      <div className={styles.buttons}>
        <Button color="primary" onClick={() => navigate('/rule')}>
          活动规则
        </Button>
        <Button color="success" onClick={() => navigate('/prize')}>
          奖品列表
        </Button>
      </div>
    </div>
  );
}
