import React from "react";
import { useAtom } from "jotai";
import { countAtom } from "../store/store";

const Counter = () => {
  const [count] = useAtom(countAtom);

  return <div>Counter: {count}</div>;
};

export default Counter;
