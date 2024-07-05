import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { createPosts, editPosts } from "../../state/postSlice";

const AddPost = () => {
  const location = useLocation();
  const editPost = location.state?.post;
  console.log({ editPost });
  const { userDetails } = useSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      title: editPost?.title || "",
      content: editPost?.content || "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    if (editPost) {
      dispatch(
        editPosts({ ...data, postId: editPost?.postId, userId: editPost?.id })
      );
      navigate("/posts-page");
    } else {
      dispatch(createPosts({ ...data, userId: userDetails?.userId }));
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 300,
          margin: "0 auto",
        }}
      >
        <h1>{editPost ? "Edit" : "Add"} Post</h1>
        <TextField
          {...register("title", { required: true })}
          label="Title"
          variant="outlined"
          error={errors?.title}
        />
        <TextField
          {...register("content", {
            required: true,
          })}
          label="Content"
          type="text"
          variant="outlined"
          error={errors?.content}
        />
        <Button type="submit" variant="contained" color="primary">
          {editPost ? "Edit" : "Create"} Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
