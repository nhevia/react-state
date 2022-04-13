import { useSnapshot } from "valtio";
import { state } from "../store/store";

const Counter = () => {
  const { count } = useSnapshot(state);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
