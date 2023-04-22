import { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(5);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
