import { useSelector, useDispatch } from 'react-redux';
import { Bank } from '../Bank';
import { deposit, withdraw } from '../store/bankReducer';

export const BankContainer = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <Bank
      money={money}
      onDeposit={() => dispatch(deposit())}
      onWithdraw={() => dispatch(withdraw())}
    />
  );
};
