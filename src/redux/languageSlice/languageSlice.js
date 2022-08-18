import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: false,
  },
  reducers: {
    languageMode: (state, action) => {
      console.log(action.payload);
      state.language = !state.language;
    },
  },
});

export const { languageMode } = languageSlice.actions;

export default languageSlice.reducer;
