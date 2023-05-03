const initialState = 0;

const counterReducer = (state = initialState, action) => {
  console.log('dispatch 실행 !', state, action);
  const { payload, type } = action;

  switch (type) {
    case 'bank/DEPOSIT':
      return state + payload;
    case 'bank/WITHDRAW':
      return state - payload;
    default:
      return state;
  }
};

export default counterReducer;
