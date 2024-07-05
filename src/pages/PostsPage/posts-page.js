import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";

const PostsPage = () => {
  const { userDetails } = useSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails?.userId) {
      navigate("/posts-page");
    } else {
      navigate("/sign-in");
    }
  }, [userDetails?.userId]);
  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box></Box>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/add-post");
          }}
        >
          Add Post
        </Button>
      </Box>
      PostsPage
    </Box>
  );
};

export default PostsPage;
