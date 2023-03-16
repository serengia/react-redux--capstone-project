import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;
