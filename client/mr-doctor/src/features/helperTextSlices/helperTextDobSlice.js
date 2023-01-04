import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextDobSlice = createSlice({
  name: "helperTextDob",
  initialState,
  reducers: {
    setHelpertextDob: (state) => {
      state.value = "Date of Birth cannot be empty";
    },
    resetHelpertextDob: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelpertextDob, resetHelpertextDob } =
  helperTextDobSlice.actions;

export default helperTextDobSlice.reducer;
