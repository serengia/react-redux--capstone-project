/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://disease.sh/v3/covid-19/countries";

export const getCountriesData = createAsyncThunk(
  "countries/getCountriesData",
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
export const getCountryData = createAsyncThunk(
  "countries/getCountryData",
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
  countries: [],
  country: {},
  countrySearchTerm: "",
  countryFilterByCasesNumArr: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    triggerCountrySearch: (state, action) => {
      const searchTerm = action.payload;
      state.countrySearchTerm = searchTerm?.toLowerCase();
    },
    triggerCountryFilterByCases: (state, action) => {
      const numArr = action.payload?.split(",");
      state.countryFilterByCasesNumArr = numArr;
    },
  },
  extraReducers: (builder) => {
    // get meals
    builder
      .addCase(getCountriesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;
        // console.log("Countries>", res);

        state.countries = res;
      })
      .addCase(getCountriesData.rejected, (state) => {
        state.isLoading = false;
      });

    // get single meal
    builder
      .addCase(getCountryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryData.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.country = res;
      })
      .addCase(getCountryData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const countriesActions = countriesSlice.actions;
export default countriesSlice.reducer;
