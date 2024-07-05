import React, { useEffect, useState } from "react";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import { Grid, Box } from "@mui/material";
import { MuiDrawer } from "./components/MuiDrawer/mui-drawer";
import { MainCompo } from "./components/MainContentCompo/MainCompo";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./components/Details/Details";
import { getMovies } from "./state/movieSlice";
import SignIn from "./pages/SignIn/sign-in";
import PostsPage from "./pages/PostsPage/posts-page";
import AddPost from "./pages/AddPost/add-post";
import { User } from "./pages/UserOperations/user";
import { Wrapper } from "./components/Wrapper";

function App() {
  const { genres, selectedGenre, userDetails } = useSelector(
    (state) => state.movieSlice
  );
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Change the URL path without reloading the page
    window.location.pathname !== "/" &&
      !userDetails?.userId &&
      window.location.assign("/");
  }, [userDetails?.userId]);

  useEffect(() => {
    selectedGenre ? dispatch(getMovies(selectedGenre)) : dispatch(getMovies());
  }, [selectedGenre, dispatch]);

  const handleOpen = (val) => {
    setOpen(val);
  };

  return (
    <Box className="App" id="root">
      <BrowserRouter>
        <Routes>
          {userDetails?.userId ? (
            <Route
              path="/"
              element={
                <Wrapper>
                  <MuiDrawer handleOpen={handleOpen} />
                </Wrapper>
              }
            >
              <Route
                index
                element={
                  <Wrapper>
                    <MainCompo open={open} />
                  </Wrapper>
                }
              />
              <Route
                path="details/:id"
                element={
                  <Wrapper>
                    <Details />
                  </Wrapper>
                }
              />
              <Route
                path="posts-page"
                element={
                  <Wrapper>
                    <PostsPage />
                  </Wrapper>
                }
              />
              <Route
                path="add-post"
                element={
                  <Wrapper>
                    <AddPost />
                  </Wrapper>
                }
              />
              <Route
                path="user-operations"
                element={
                  <Wrapper>
                    <User />
                  </Wrapper>
                }
              />
            </Route>
          ) : (
            <Route path="/" element={<SignIn />} />
          )}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
