import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUser, deleteUser } from "../../state/movieSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const User = () => {
  const { userDetails } = useSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    defaultValues: {
      username: userDetails?.username,
      email: userDetails?.email,
    },
  });

  const updateHandle = (data) => {
    console.log("updateHanlde", data, userDetails?.userId);
    if (data?.username && data?.email && userDetails?.userId && true) {
      dispatch(updateUser({ data, id: userDetails?.userId }));
    }
  };

  const onSubmit = (data) => {
    console.log("onSubmit");
    console.log(data);
    updateHandle(data);
    // dispatch(updateUser(data,useDetails?.useId));
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
        <h1>Edit User</h1>
        <TextField
          {...register("username", { required: true })}
          label="Username"
          variant="outlined"
          error={errors?.username}
        />
        <TextField
          {...register("email", {
            required: true,
          })}
          label="Email"
          type="email"
          variant="outlined"
          error={errors?.email}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Update User
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteUser(userDetails?.userId));
              reset();
              navigate("/");
            }}
            variant="contained"
            color="primary"
          >
            Delete User
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
