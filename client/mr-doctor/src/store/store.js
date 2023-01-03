import { configureStore } from "@reduxjs/toolkit";
import helperTextNameReducer from "../features/helperTextSlices/helperTextNameSlice";
import helperTextPhoneNumberReducer from "../features/helperTextSlices/helperTextPhoneNumberSlice";
import helperTextEmailSlice from "../features/helperTextSlices/helperTextEmailSlice";
import helperTextPasswordSlice from "../features/helperTextSlices/helperTextPasswordSlice";
export const store = configureStore({
  reducer: {
    helperTextName: helperTextNameReducer,
    helperTextPhoneNumber: helperTextPhoneNumberReducer,
    helperTextEmail: helperTextEmailSlice,
    helperTextPassword: helperTextPasswordSlice,
  },
});
