import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextAddressSlice = createSlice({
  name: "helperTextAddress",
  initialState,
  reducers: {
    setHelperTextAddress: (state) => {
      state.value = "Address/Pincode is empty";
    },
    resetHelperTextAddress: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextAddress, resetHelperTextAddress } =
  helperTextAddressSlice.actions;

export default helperTextAddressSlice.reducer;
