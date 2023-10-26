import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";
import picksReducer from "../features/picks/picksSlice";

export default configureStore({
  reducer: {
    score: scoreReducer,
    picks: picksReducer,
  },
});
