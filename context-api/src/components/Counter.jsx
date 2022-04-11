import React, { useContext } from "react";
import { Context } from "../store/store";

const Counter = () => {
  const { state } = useContext(Context);

  // return <div>Counter</div>;
  return <div>Counter: {state.counter}</div>;
};

export default Counter;
