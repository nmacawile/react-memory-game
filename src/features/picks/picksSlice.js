import { createSlice } from "@reduxjs/toolkit";
import { TOTAL_NUMBER_OF_CARDS } from "../../config/AppConfig";

const UNPICKED = [...Array(TOTAL_NUMBER_OF_CARDS + 1).keys()].slice(1);

export const picksSlice = createSlice({
  name: "picks",
  initialState: { value: { picked: [], unpicked: [...UNPICKED] } },
  reducers: {
    push: (state, action) => {
      const pick = action.payload;
      state.value = {
        picked: [...state.value.picked, pick],
        unpicked: state.value.unpicked.filter((n) => n != pick),
      };
    },
    clear: (state) => {
      state.value = { picked: [], unpicked: [...UNPICKED] };
    },
  },
});

export const { push, clear } = picksSlice.actions;

export default picksSlice.reducer;
