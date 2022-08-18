import { createSlice } from "@reduxjs/toolkit";

import { fetchData, fetchCountries, fetchOneData } from "./services";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    covidData: "",
    countries: [],
    country: "",
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.covidData = action.payload;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
    [fetchOneData.fulfilled]: (state, action) => {
      state.country = action.payload;
    },
  },
});

export default covidSlice.reducer;
