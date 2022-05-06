import { Spin } from 'antd';

import styles from './index.less';

const PageLoading = () => {
  return (
    <div className={styles.loading}>
      <Spin spinning size="large" />
    </div>
  );
};

export default PageLoading;
