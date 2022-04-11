import React from "react";
import { useDispatch } from "react-redux";
import { increment, substract, incrementBy } from "./CounterSlice";

const Controls = () => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default Controls;
