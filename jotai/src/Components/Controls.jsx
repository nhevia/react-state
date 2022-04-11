import React from "react";
import { useSetAtom } from "jotai";
import { countAtom } from "../store/store";

const Controls = () => {
  // for write-only, prevents unnecesary renders with `useSetAtom` (similar to Recoil)
  const setCount = useSetAtom(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <input onChange={(evt) => setCount(parseInt(evt.target.value))} />
    </div>
  );
};

export default Controls;
