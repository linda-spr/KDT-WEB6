import { useState } from 'react';
import './styles/Box.css';

function App() {
  const [number, setNumber] = useState(100);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      Redux Test
      <Box1 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
}

const Box1 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box1: {number}</h2>
      <Box2 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
};

const Box2 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
};

const Box3 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box3: {number} </h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default App;
