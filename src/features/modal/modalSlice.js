import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: false },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, show, hide } = modalSlice.actions;

export default modalSlice.reducer;
