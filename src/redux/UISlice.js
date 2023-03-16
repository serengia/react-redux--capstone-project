/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "countries",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    checkContinents: (state) => {
      state.view = "continents";
    },
    checkCountries: (state) => {
      state.view = "countries";
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
