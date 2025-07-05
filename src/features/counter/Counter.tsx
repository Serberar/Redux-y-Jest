import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { increment, decrement, incrementByAmount } from './CounterSlice';
import './Counter.css';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <div className="counter-container">
        <p className="counter-value">Contador: {count}</p>
        <button className="counter-btn" onClick={() => dispatch(increment())}>+1</button>
        <button className="counter-btn" onClick={() => dispatch(decrement())}>-1</button>
        <button className="counter-btn" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </>
  );
}

export default Counter;
