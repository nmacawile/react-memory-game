import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, reset, incrementBy } = scoreSlice.actions;

export default scoreSlice.reducer;
