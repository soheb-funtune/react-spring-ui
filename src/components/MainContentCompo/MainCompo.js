import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Rating } from "@mui/material";
import MainContent from "../MainContent";
import FeaturedCompanies from "../FeaturedCompanies";
import Pagination from "../Pagination";
import { fetchAllMovies } from "../../API/movie-apis";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMovie } from "../../state/movieSlice";

export const MainCompo = ({ open }) => {
  const [allMovies, setAllMovies] = useState([]);
  const { movies } = useSelector((state) => state.movieSlice);

  useEffect(() => {
    window.scrollTo(0, 0);

    setAllMovies(movies);
  }, [movies]);
  return (
    <Box
      sx={{ padding: 3, ...(!open && { maxWidth: "1200px", margin: "auto" }) }}
    >
      <Grid container spacing={2}>
        {allMovies?.map((item, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/details/${item?.id}`}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  background: "gray",
                }}
              >
                <Box
                  component={"img"}
                  width={"200px"}
                  height={"300px"}
                  src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    minHeight: "300px",
                  }}
                />
                <Box
                  sx={{
                    padding: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 10px black",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                    variant="h5"
                    color={"white"}
                  >
                    {item?.original_title}
                  </Typography>
                  <Rating
                    name="read-only"
                    max={5}
                    value={item?.vote_average / 2}
                    emptyIcon={
                      <StarIcon
                        style={{ opacity: 0.7, color: "white" }}
                        fontSize="inherit"
                      />
                    }
                    readOnly
                  />
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
