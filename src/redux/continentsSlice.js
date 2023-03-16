/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://disease.sh/v3/covid-19/continents";

export const getContinentsData = createAsyncThunk(
  "continents/getContinentsData",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);
export const getContinentData = createAsyncThunk(
  "continents/getContinentData",
  async (id, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}/${id}`);
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
  continents: [],
  continent: {},
};

const continentsSlice = createSlice({
  name: "continents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get meals
    builder
      .addCase(getContinentsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContinentsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.continents = res;
      })
      .addCase(getContinentsData.rejected, (state) => {
        state.isLoading = false;
      });

    // get single meal
    builder
      .addCase(getContinentData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContinentData.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.continent = res;
      })
      .addCase(getContinentData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const continentsActions = continentsSlice.actions;
export default continentsSlice.reducer;
