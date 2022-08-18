import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    handleDarkMode: (state, action) => {
        console.log(action.payload)
      state.dark = !state.dark;
    },
  },
});

export const { handleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
