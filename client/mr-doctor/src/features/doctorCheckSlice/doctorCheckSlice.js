import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "NA",
};

export const doctorCheckSlice = createSlice({
  name: "doctorCheck",
  initialState,
  reducers: {
    isDoctor: (state) => {
      state.value = "true";
    },
    isNotDoctor: (state) => {
      state.value = "false";
    },
  },
});

export const { isDoctor, isNotDoctor } = doctorCheckSlice.actions;

export default doctorCheckSlice.reducer;
