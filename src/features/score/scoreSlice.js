import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "counter",
  initialState: {
    value: { current: 0, high: 0 },
  },
  reducers: {
    increment: (state) => {
      const { current, high } = state.value;
      const incremented = current + 1;
      state.value = {
        current: incremented,
        high: incremented > high ? incremented : high,
      };
    },
    reset: (state) => {
      state.value = { current: 0, high: state.value.high };
    },
    incrementBy: (state, action) => {
      const { current, high } = state.value;
      const incremented = current + action.payload;
      state.value = {
        current: incremented,
        high: incremented > high ? incremented : high,
      };
    },
  },
});

export const { increment, reset, incrementBy } = scoreSlice.actions;

export default scoreSlice.reducer;
