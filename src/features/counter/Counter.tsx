import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { increment, decrement, incrementByAmount } from './counterSlice';
import styles from './counter.module.css';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles['counter-container']}>
      <p className={styles['counter-value']}>Contador: {count}</p>
      <button
        className={styles['counter-btn']}
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        className={styles['counter-btn']}
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>
      <button
        className={styles['counter-btn']}
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
  );
}

export default Counter;
