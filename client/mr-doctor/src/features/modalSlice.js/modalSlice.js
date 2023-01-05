import { createAction, createReducer } from "@reduxjs/toolkit";

export const setModal = createAction("modal/setModal");
export const resetModal = createAction("modal/resetModal");

const initialState = {
  value: { show: false, title: "", message: "" },
};

export const modalSlice = createReducer(initialState, (builder) => {
  builder.addCase(setModal, (state, action) => {
    state.modal = action.payload;
  });
  builder.addCase(resetModal, (state, action) => {
    state.modal = { show: false, title: "", message: "" };
  });
});

// Action creators are generated for each case reducer function
