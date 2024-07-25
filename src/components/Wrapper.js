import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export const Wrapper = ({ children }) => {
  // const navigate = useNavigate();
  // const { userDetails } = useSelector((state) => state.movieSlice);

  //   useEffect(() => {
  //     if (!userDetails?.useId) {
  //       navigate("/");
  //     }
  //   }, [userDetails?.useId, navigate]); // Add dependencies here to avoid running on every render

  return <div>{children}</div>;
};
