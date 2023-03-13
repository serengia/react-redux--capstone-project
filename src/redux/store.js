import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./mealsSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice,
  },
});

export default store;
