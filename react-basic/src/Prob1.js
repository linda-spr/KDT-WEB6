import { useState } from 'react';

// const Prob1 = () => {
//   const [color, setColor] = useState('black');
//   const [text, setText] = useState('검정색 글씨');

//   const onClickRed = () => {
//     setText('빨간색 글씨');
//     setColor('red');
//   };
//   const onClickBlue = () => {
//     setText('파란색 글씨');
//     setColor('blue');
//   };

//   return (
//     <>
//       <h1 style={{ color: color }}>{text}</h1>
//       <button onClick={onClickRed}>빨간색</button>
//       <button onClick={onClickBlue}>파란색</button>
//     </>
//   );
// };

// state 변수 1개로 풀어보기
const Prob1 = () => {
  const [state, setState] = useState({
    color: 'black',
    text: '검정색 글씨',
  });

  const onClickRed = () => {
    setState({
      color: 'red',
      text: '빨간색 글씨',
    });
  };

  const onClickBlue = () => {
    setState({
      color: 'blue',
      text: '파란색 글씨',
    });
  };

  return (
    <>
      <h1 style={{ color: state.color }}>{state.text}</h1>
      <button onClick={onClickRed}>빨간색</button>
      <button onClick={onClickBlue}>파란색</button>
    </>
  );
};

export default Prob1;
