import React, { useContext } from "react";
import { Context } from "../store/store";

const Controls = () => {
  const { dispatch } = useContext(Context);

  return (
    <div>
      <button onClick={() => dispatch({ type: "substract" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <input
        onChange={(e) => dispatch({ type: "incrementBy", payload: { amount: parseInt(e.target.value) } })}
      />
    </div>
  );
};

export default Controls;
