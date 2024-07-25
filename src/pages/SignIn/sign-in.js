import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGooglAuthDetails, userSignIn } from "../../state/movieSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

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

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google token response:", tokenResponse);
      try {
        // Request the ID token
        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        console.log("Google user info:", data);

        // Send the ID token to your backend
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}auth/google_login`,
          {
            token: data.sub, // Use the 'sub' field as the ID token
          }
        );

        console.log("Backend response:", response.data);

        // Store the JWT token
        localStorage.setItem("token", response.data.access_token);
        dispatch(
          setGooglAuthDetails({ ...data, token: response.data.access_token })
        );
      } catch (error) {
        console.error("Error during login:", error);
        if (error.response) {
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

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
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            let decodedData = jwtDecode(credentialResponse?.credential);
            console.log(decodedData);
            dispatch(setGooglAuthDetails({ decodedData, credentialResponse }));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
        <Button onClick={() => handleLogin()} variant="contained">
          Login with Google
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
