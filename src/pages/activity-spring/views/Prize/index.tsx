import { NavBar, List } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const prizes = [
  { name: '一等奖', desc: 'iPhone 15 Pro', count: 1 },
  { name: '二等奖', desc: '小米手环', count: 10 },
  { name: '三等奖', desc: '10元红包', count: 100 },
];

export default function Prize() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <NavBar onBack={() => navigate(-1)}>奖品列表</NavBar>
      <List header="本次活动奖品">
        {prizes.map((prize) => (
          <List.Item key={prize.name} description={`数量：${prize.count}份`}>
            {prize.name} - {prize.desc}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
