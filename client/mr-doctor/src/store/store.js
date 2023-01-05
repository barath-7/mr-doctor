import { configureStore } from "@reduxjs/toolkit";
import helperTextNameReducer from "../features/helperTextSlices/helperTextNameSlice";
import helperTextPhoneNumberReducer from "../features/helperTextSlices/helperTextPhoneNumberSlice";
import helperTextEmailSlice from "../features/helperTextSlices/helperTextEmailSlice";
import helperTextPasswordSlice from "../features/helperTextSlices/helperTextPasswordSlice";
import helperTextAddressSlice from "../features/helperTextSlices/helperTextAddressSlice";
import helperTextDobSlice from "../features/helperTextSlices/helperTextDobSlice";
import { userSlice } from "../features/userSlices/userSlice";
import { modalSlice } from "../features/modalSlice.js/modalSlice";
export const store = configureStore({
  reducer: {
    helperTextName: helperTextNameReducer,
    helperTextPhoneNumber: helperTextPhoneNumberReducer,
    helperTextEmail: helperTextEmailSlice,
    helperTextPassword: helperTextPasswordSlice,
    helperTextAddress: helperTextAddressSlice,
    helperTextDob: helperTextDobSlice,
    userData: userSlice,
    modal: modalSlice,
  },
});
