import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incCounter, decCounter } from './actions/index';

function App() {
  const myCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello, I can count</h1>
      <div className="section">
        <a
          className="qty"
          title="decrement"
          onClick={() => dispatch(decCounter())}
        >
          <span>-</span>
        </a>
        <input
          name="qty"
          type="text"
          className="qty_input"
          readOnly
          value={myCounter}
        />
        <a
          className="qty"
          title="increment"
          onClick={() => dispatch(incCounter())}
        >
          <span>+</span>
        </a>
      </div>
    </>
  );
}

export default App;
