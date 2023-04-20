import { useState } from 'react';

const Prob2 = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
    // !true => flase
    // !fale => true
  };

  return (
    <>
      <button onClick={toggle}>{visible ? ' 사라져라!' : '보여라!'}</button>
      <h1>{visible && '안녕하세요'}</h1>
    </>
  );
};

export default Prob2;
