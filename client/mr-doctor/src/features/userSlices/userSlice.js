import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUserData = createAction("user/setUserData");

const initialState = {
  value: {},
};

export const userSlice = createReducer(initialState, (builder) => {
  builder.addCase(setUserData, (state, action) => {
    console.log(action.payload);
    state.userData = action.payload;
    return state;
  });
});

// Action creators are generated for each case reducer function
