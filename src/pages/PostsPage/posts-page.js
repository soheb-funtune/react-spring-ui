import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { deletePosts, getAllPosts } from "../../state/postSlice";

const PostsPage = () => {
  const { userDetails } = useSelector((state) => state.movieSlice);
  const { allPosts } = useSelector((state) => state.postSlice);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails?.userId) {
      navigate("/posts-page");
    } else {
      navigate("/sign-in");
    }
  }, [userDetails?.userId]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    allPosts && setPosts(allPosts);
  }, [allPosts]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePosts(id));
    }
  };

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
      <h3>All Posts</h3>
      <Box>
        {posts &&
          posts.map((post) => (
            <Box
              key={post.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Box>{post.title}</Box>
              <Box>{post.content}</Box>
              <Button
                onClick={() => navigate("/add-post", { state: { post } })}
                variant="outlined"
                size="small"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(post?.postId)}
                variant="outlined"
                size="small"
              >
                Delete
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PostsPage;
