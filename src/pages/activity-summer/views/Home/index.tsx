import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌊 夏季清凉活动</h1>
      <p className={styles.desc}>分享好友，一起清凉一夏</p>
      <div className={styles.buttons}>
        <Button color="primary" onClick={() => navigate('/rule')}>
          活动规则
        </Button>
        <Button color="success" onClick={() => navigate('/share')}>
          立即分享
        </Button>
      </div>
    </div>
  );
}
