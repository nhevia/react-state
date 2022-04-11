import { useDispatch } from "react-redux";
import {
  increment,
  substract,
  incrementBy,
} from "./Components/Counter/CounterSlice";
import Counter from "./Components/Counter/Counter";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>redux test</p>
        <div>
          <button type="button" onClick={() => dispatch(substract())}>
            -
          </button>
          <button type="button" onClick={() => dispatch(increment())}>
            +
          </button>
          <input
            onChange={(e) => dispatch(incrementBy(parseInt(e.target.value)))}
          />
        </div>

        <Counter />
      </header>
    </div>
  );
}

export default App;
