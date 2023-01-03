import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextNameSlice = createSlice({
  name: "helperTextName",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
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
