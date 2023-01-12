import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const helperTextDoctorIdSlice = createSlice({
  name: "helperTextDoctorId",
  initialState,
  reducers: {
    setHelperTextDoctorId: (state) => {
      state.value = "Doctor ID is empty";
    },
    resetHelperTextDoctorId: (state) => {
      state.value = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHelperTextDoctorId, resetHelperTextDoctorId } =
  helperTextDoctorIdSlice.actions;

export default helperTextDoctorIdSlice.reducer;
