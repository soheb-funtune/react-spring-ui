import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { useMediaQuery, useTheme } from "@mui/material";

import { AppBar, Toolbar, Typography, Link, Button, Box } from "@mui/material";
import { Image } from "@mui/icons-material";
import { Link as RRDLink } from "react-router-dom";

const Header = ({ handleDrawerOpen, handleDrawerClose, open }) => {
  // const theme = useTheme();
  const lessthan767 = useMediaQuery("(max-width:767px)");

  const bottomBarCss = {
    cursor: "pointer",
    fontSize: "13px",
    textDecoration: "none",
    color: "primary.main",
    position: "relative",
    paddingBottom: "5px",
    "&:hover": {
      color: "primary.main",
    },
    "&::after": {
      content: '""',
      backgroundColor: "primary.main",
      position: "absolute",
      right: "0px",
      bottom: "0px",
      left: "0px",
      height: "2px",
      width: "0px",
      borderRadius: "40px",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
    },
  };
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        background: "white",
        color: "primary.main",
        // boxShadow: "5px 0px 10px gray",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          mr: 0,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerClose}
        edge="start"
        sx={{
          mr: 0,
          ...(!open && { display: "none" }),
        }}
      >
        <CancelIcon />
      </IconButton>
      <Box sx={{ color: "white" }} variant="h6" sx={{ flexGrow: 1 }}>
        <RRDLink to="/">
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            component={"img"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56_C0-3tNNAHTAWWfRE7vniYzYiFhVq8iMb9qK2UbkG0aKE9alsLQZ2sYp_89wO6F5ss&usqp=CAU"
            }
            width="auto"
            height="50px"
            alt="logo"
          ></Box>
        </RRDLink>
      </Box>
      <Box
        style={{ display: lessthan767 ? "none" : "flex" }}
        sx={{
          gap: "15px",
          fontSize: "14px",
        }}
      >
        <Link
          sx={{
            ...bottomBarCss,
          }}
          href="#"
          color="inherit"
        >
          About
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Team
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Portfolio
        </Link>
        <Link
          sx={{
            ...bottomBarCss,
          }}
        >
          Corporate Partners
        </Link>
        <RRDLink
          to={"/add-post"}
          sx={{
            ...bottomBarCss,
          }}
        >
          Add Post
        </RRDLink>
        
        <RRDLink
          to={"/user-operations"}
          sx={{
            ...bottomBarCss,
          }}
        >
          User
        </RRDLink>
      </Box>
    </Toolbar>
  );
};

export default Header;
