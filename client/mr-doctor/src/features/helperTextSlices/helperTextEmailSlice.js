import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextEmailSlice = createSlice({
  name: "helperTextEmail",
  initialState,
  reducers: {
    setHelperTextEmail: (state) => {
      state.value = "Email is incorrect or empty";
    },
    resetHelperTextEmail: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextEmail, resetHelperTextEmail } =
  helperTextEmailSlice.actions;

export default helperTextEmailSlice.reducer;
