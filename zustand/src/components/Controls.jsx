import React from "react";
import { useStore } from "../store/store";

const Controls = () => {
  const increment = useStore((state) => state.increment);
  const substract = useStore((state) => state.substract);
  const incrementBy = useStore((state) => state.incrementBy);

  return (
    <div>
      <button onClick={substract}>-</button>
      <button onClick={increment}>+</button>
      <input onChange={e => incrementBy(parseInt(e.target.value))}/>
    </div>
  );
};

export default Controls;
