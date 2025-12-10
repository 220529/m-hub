import { NavBar, Button, Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default function Share() {
  const navigate = useNavigate();

  const handleShare = () => {
    Toast.show({ content: '长按保存图片分享给好友' });
  };

  return (
    <div className={styles.page}>
      <NavBar onBack={() => navigate(-1)}>分享海报</NavBar>
      <div className={styles.shareCard}>
        <h3>🌊 夏季清凉活动</h3>
        <p>邀请好友一起参与</p>
        <p style={{ marginTop: 40, fontSize: 24 }}>扫码参与活动</p>
      </div>
      <div className={styles.btnWrap}>
        <Button block color="primary" onClick={handleShare}>
          保存海报
        </Button>
      </div>
    </div>
  );
}
