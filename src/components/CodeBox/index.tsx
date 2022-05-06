import { FC, useEffect, useState } from 'react';

import styles from './index.less';

interface ICodeBox {
  onGetCode: () => Promise<string>; // 请求方法
}

let timer: any = null;
const count = 10;

const CodeBox: FC<ICodeBox> = (props) => {
  const { onGetCode } = props;
  const [number, setNumber] = useState(0);
  useEffect(() => {
    timer && clearInterval(timer);
  }, []);

  useEffect(() => {
    if (number > 0) {
      timer = setTimeout(() => {
        setNumber((pre) => --pre);
      }, 1000);
    }
    if (number === 0) {
      clearInterval(timer);
    }
  }, [number]);

  function goStart() {
    timer && clearInterval(timer);
    onGetCode().then(() => {
      setNumber(count);
    });
  }

  return (
    <div className={[`${styles.code}`, `box-position`].join(' ')}>
      {number > 0 ? (
        <div className="time">{number}s后重发</div>
      ) : (
        <div onClick={goStart}>获取验证码</div>
      )}
    </div>
  );
};

export default CodeBox;
