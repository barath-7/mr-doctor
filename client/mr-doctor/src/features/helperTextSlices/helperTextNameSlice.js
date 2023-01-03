import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextNameSlice = createSlice({
  name: "helperTextName",
  initialState,
  reducers: {
    setHelperTextName: (state) => {
      state.value = "Name cannot be empty";
    },
    resetHelperTextName: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextName, resetHelperTextName } =
  helperTextNameSlice.actions;

export default helperTextNameSlice.reducer;
