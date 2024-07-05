import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../state/movieSlice";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { userDetails } = useSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addPost({ ...data, user: userDetails?.userId }));
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
        <h1>Add Post</h1>
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
          Create Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
