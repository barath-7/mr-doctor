import { configureStore } from "@reduxjs/toolkit";
import helperTextNameReducer from "../features/helperTextNameSlice";
export const store = configureStore({
  reducer: {
    helperTextName: helperTextNameReducer,
  },
});
