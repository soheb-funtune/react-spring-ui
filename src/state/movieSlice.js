import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchgenres, fetchMovies, fetchSingleMovie } from "../API/movie-apis";

import { userSignInAPI, updateUserAPI, deleteUserAPI } from "../API/spring-api";

const initialState = {
  value: 2003,
  movies: null,
  status: null,
  movieDetails: null,
  genres: null,
  selectedGenre: null,
  userDetailsGoogleAuth: null,
  userDetails: {
    userId: null,
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setGooglAuthDetails: (state, action) => {
      console.log("userDetailsGoogleAuth", action.payload);
      state.userDetailsGoogleAuth = action.payload;
    },
    setSelectedGenre: (state, action) => {
      console.log("setSelectedGenre", action.payload);
      state.selectedGenre = action.payload;
    },
    // setUserDetails: (state, action) => {
    //   console.log("update User", action.payload);
    //   state.userDetails = action.payload;
    // },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        console.log("Movies fetched successfully:", action.payload); // Debugging message
        state.movies = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        console.log("Movie fetched successfully:", action.payload); // Debugging message
        state.movieDetails = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMovie.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        console.log("Movie fetched successfully:", action.payload); // Debugging message
        state.genres = action.payload;
        state.status = "succeeded";
      })
      .addCase(getGenres.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(userSignIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        console.log("user fetched successfully:", action.payload); // Debugging message
        state.userDetails = { ...action.payload, userId: action.payload._Id };
        state.status = "succeeded";
      })
      .addCase(userSignIn.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("user fetched successfully:", action.payload); // Debugging message
        state.userDetails = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log("delete fetched successfully:", action.payload); // Debugging message
        state.userDetails = {};
        state.status = "succeeded";
      })
      .addCase(deleteUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setSelectedGenre,
  // setUserDetails,
  setGooglAuthDetails,
} = movieSlice.actions;

export default movieSlice.reducer;

// Movies
export const getMovies = createAsyncThunk("movie/getMovies", async (genres) => {
  const responce = await fetchMovies(genres);
  return responce?.results;
});
export const getMovie = createAsyncThunk("movie/getMovie", async (id) => {
  const responce = await fetchSingleMovie(id);
  return responce;
});
export const getGenres = createAsyncThunk("movie/getGenres", async () => {
  const responce = await fetchgenres();
  return responce?.genres;
});

// User Requests
export const userSignIn = createAsyncThunk("userSignIn", async (data) => {
  const responce = await userSignInAPI(data);
  console.log(responce);
  return responce;
});
export const updateUser = createAsyncThunk("updateUser", async (obj) => {
  console.log("Update User in slice", obj);
  const responce = await updateUserAPI(obj?.data, obj?.id);
  console.log(responce);
  return responce;
});
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  console.log("Delete User in slice", id);
  const responce = await deleteUserAPI(id);
  console.log(responce);
  return responce;
});
