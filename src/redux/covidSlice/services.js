import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchData = createAsyncThunk("covid/fetchData", async () => {
  const { data } = await Axios.get("https://covid19.mathdro.id/api");
  return data;
});

export const fetchOneData = createAsyncThunk(
  "covid/fetchOneData",
  async (country) => {
    const { data } = await Axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return data;
  }
);

export const fetchCountries = createAsyncThunk(
  "covid/fetchCountries",
  async () => {
    const { data } = await Axios.get(
      "https://covid19.mathdro.id/api/countries"
    );
    return data.countries;
  }
);
