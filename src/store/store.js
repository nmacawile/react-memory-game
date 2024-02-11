import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";
import modalReducer from "../features/modal/modalSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    modal: modalReducer,
  },
});
