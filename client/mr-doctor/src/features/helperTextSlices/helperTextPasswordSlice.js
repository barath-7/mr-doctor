import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextPasswordSlice = createSlice({
  name: "helperTextPassword",
  initialState,
  reducers: {
    setHelperTextPassword: (state) => {
      state.value = "Password is empty";
    },
    resetHelperTextPassword: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextPassword, resetHelperTextPassword } =
  helperTextPasswordSlice.actions;

export default helperTextPasswordSlice.reducer;
