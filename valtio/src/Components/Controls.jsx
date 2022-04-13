import { increment, substract, incrementBy } from "../store/store";

const Controls = () => {
  return (
    <div>
      <button onClick={substract}>-</button>
      <button onClick={increment}>+</button>
      <input onChange={(e) => incrementBy(parseInt(e.target.value))} />
    </div>
  );
};

export default Controls;
