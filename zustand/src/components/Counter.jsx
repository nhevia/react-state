import React from "react";
import { useStore } from "../store/store";

const Counter = () => {
  const count = useStore((state) => state.count);

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
};

export default Counter;
