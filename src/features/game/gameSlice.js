import { createSlice } from "@reduxjs/toolkit";
import { TOTAL_NUMBER_OF_CARDS } from "../../config/AppConfig";

const UNPICKED = [...Array(TOTAL_NUMBER_OF_CARDS + 1).keys()].slice(1);

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    value: {
      picked: [],
      unpicked: [...UNPICKED],
      score: 0,
      high: 0,
      complete: false,
    },
  },
  reducers: {
    push: (state, action) => {
      const pick = action.payload;
      const { picked, unpicked, score, high } = state.value;

      const alreadyPicked = picked.some((p) => p === pick);

      const newValue = alreadyPicked
        ? {
            picked: [...picked],
            unpicked: [...unpicked],
            score: 0,
            high,
            complete: false,
          }
        : {
            picked: [...picked, pick],
            unpicked: unpicked.filter((n) => n != pick),
            score: score + 1,
            high: score + 1 > high ? score + 1 : high,
            complete: TOTAL_NUMBER_OF_CARDS === score + 1,
          };

      state.value = newValue;
    },
    clear: (state) => {
      state.value = {
        picked: [],
        unpicked: [...UNPICKED],
        score: 0,
        high: state.value.high,
        complete: false,
      };
    },
  },
});

export const { push, clear } = gameSlice.actions;

export default gameSlice.reducer;
