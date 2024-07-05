import React from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = () => {
  return (
    <Box display="flex" justifyContent="center" my={4}>
      <MuiPagination count={10} color="primary" />
    </Box>
  );
};

export default Pagination;
