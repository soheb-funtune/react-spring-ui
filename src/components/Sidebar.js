import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import { styled, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, setSelectedGenre } from "../state/movieSlice";

const Sidebar = ({ handleDrawerClose, DrawerHeader }) => {
  const [genresList, setGenres] = useState([]);
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movieSlice);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    genres && setGenres(genres);
  }, [genres]);

  return (
    <Box>
      <DrawerHeader></DrawerHeader>
      {/* <Divider /> */}
      <List>
        {genresList &&
          genresList?.map(({ name, id }, index) => (
            <ListItem
              onClick={() => {
                dispatch(setSelectedGenre(id));
                handleDrawerClose();
              }}
              sx={{
                "&:hover & .MuiSvgIcon-root": {
                  color: "primary.main",
                },
              }}
              key={name}
              disablePadding
            >
              <ListItemButton
                sx={{
                  textAlign: { xs: "center", md: "right" },
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {/* <ListItemIcon>
                <MuiIcons />
              </ListItemIcon> */}
                <ListItemText
                  sx={{ paddingRight: "20px", fontSize: "14px" }}
                  primary={name}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Sidebar;
