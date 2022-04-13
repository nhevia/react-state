import { proxy } from "valtio";

export const state = proxy({ count: 0 });

export const increment = () => {
  ++state.count;
};
export const substract = () => {
  --state.count;
};
export const incrementBy = (by) => {
  state.count = by;
};

// Can expose a single object to simplify usage
// export const countActions = {
//   increment: () => ++state.count,
//   substract: () => --state.count,
//   incrementBy: (by) => (state.count = by),
// };
