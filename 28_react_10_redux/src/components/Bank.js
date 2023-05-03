import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Bank = () => {
  const input = useRef();
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}원</h2>
      <input type="number" ref={input} />
      <button
        onClick={() =>
          dispatch({
            type: 'bank/DEPOSIT',
            payload: Number(input.current.value),
          })
        }
      >
        입금
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'bank/WITHDRAW',
            payload: Number(input.current.value),
          })
        }
      >
        출금
      </button>
    </>
  );
};

export default Bank;
