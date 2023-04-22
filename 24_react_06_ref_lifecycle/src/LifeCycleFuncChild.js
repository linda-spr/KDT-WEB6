import { useEffect, useState } from 'react';

// 자식 컴포넌트
const LifeCycleFuncChild = (props) => {
  // console.log('props >>> ', props); // {number: 5}
  const { number } = props; // 5
  const [text, setText] = useState('');

  // useEffect(() => {
  //   // mount 시점에 실행
  //   console.log('mount!!!');

  //   return () => {
  //     // unmount 시점에 실행
  //     console.log('unmount!!!');
  //   };
  // }, []);

  // // mount & update 시점에 실행
  // useEffect(() => {
  //   console.log('mount or update!!!');
  // });

  // text state가 바뀔때마다 실행
  useEffect(() => {
    console.log('mount or update!!!!!');
  }, [text]);

  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
