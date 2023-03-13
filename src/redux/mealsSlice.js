/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://themealdb.com/api/json/v1/1";

export const getMeals = createAsyncThunk(
  "rockets/getMeals",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}/search.php?s=chicken`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

const initialState = {
  isLoading: false,
  meals: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get meals
    builder
      .addCase(getMeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        console.log("RESULTS> ", res);

        state.meals = res;
      })
      .addCase(getMeals.rejected, (state) => {
        state.isLoading = false;
        state.meals = [];
      });
  },
});

export const mealsActions = mealsSlice.actions;
export default mealsSlice.reducer;
