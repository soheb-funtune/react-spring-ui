import React from "react";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      p={2}
      bgcolor="secondary.main"
      color="white"
    >
      <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Services</Button>
      <Button color="inherit">Contact</Button>
    </Box>
  );
};

export default Navbar;
