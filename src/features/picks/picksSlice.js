import { createSlice } from "@reduxjs/toolkit";

export const picksSlice = createSlice({
  name: "picks",
  initialState: { value: [] },
  reducers: {
    push: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clear: (state) => {
      state.value = [];
    }
  }
});

export const { push, clear } = picksSlice.actions;

export default picksSlice.reducer;
