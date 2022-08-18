import { configureStore } from "@reduxjs/toolkit";

import covidSlice from "./covidSlice/covidSlice";
import themeSlice from "./themeSlice/themeSlice";
import languageSlice from "./languageSlice/languageSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

export const store = configureStore({
  reducer: {
    covid: covidSlice,
    theme: themeSlice,
    language: languageSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
