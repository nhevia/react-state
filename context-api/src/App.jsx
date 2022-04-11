import { useReducer } from "react";
import { reducer, initialValues, Context } from "./store/store";
import Counter from "./components/Counter";
import Controls from "./components/Controls";

function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <Counter />
        <Controls />
      </div>
    </Context.Provider>
  );
}

export default App;
