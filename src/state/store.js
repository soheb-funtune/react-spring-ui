import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    movieSlice: movieSlice,
    postSlice: postSlice,
  },
});
