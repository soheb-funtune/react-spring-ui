import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../state/movieSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignIn = () => {
  const { userDetails } = useSelector((state) => state.movieSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  useEffect(() => {
    if (userDetails?.userId) {
      navigate("/");
    }
  }, [userDetails?.userId, navigate]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userSignIn(data));
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
        <h1>Sign In</h1>
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
