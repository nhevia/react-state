import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    substract: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, substract, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
