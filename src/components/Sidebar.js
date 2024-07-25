import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

import { useTheme } from "@mui/material/styles";
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
