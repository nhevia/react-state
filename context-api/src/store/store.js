import { createContext } from "react";

export const initialValues = {
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "substract":
      return { counter: state.counter - 1 };
    case "incrementBy":
      return { counter: action.payload.amount };
  }
};

export const Context = createContext();
