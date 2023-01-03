import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextPhoneNumberSlice = createSlice({
  name: "helperTextPhoneNumber",
  initialState,
  reducers: {
    setHelperTextPhoneNumber: (state) => {
      state.value = "Phone number is incorrect or empty";
    },
    resetHelperTextPhoneNumber: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextPhoneNumber, resetHelperTextPhoneNumber } =
  helperTextPhoneNumberSlice.actions;

export default helperTextPhoneNumberSlice.reducer;
