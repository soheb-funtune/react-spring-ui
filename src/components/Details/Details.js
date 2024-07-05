import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../API/movie-apis";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../state/movieSlice";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Details = () => {
  const { movieDetails } = useSelector((state) => state.movieSlice);
  const [movieDetail, setMovieDetails] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("details", id);

  useEffect(() => {
    console.log({ id });
    id && dispatch(getMovie(id));
  }, [id]);

  useEffect(() => {
    console.log({ movieDetails });
    movieDetails && setMovieDetails(movieDetails);
  }, [movieDetails]);

  return (
    <Container>
      <Box>
        <h5
          style={{
            fontSize: "14px",
          }}
          sx={{
            color: "third.main",
          }}
        >
          Movie Details
        </h5>

        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box
              component={"img"}
              src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
              sx={{
                objectFit: "fill",
                width: "100%",
                // minHeight: "500px",
                height: "auto",
              }}
              alt="poster"
            ></Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ gap: "10px" }}>
              <Typography
                variant="
              h5"
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                {movieDetail?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                {movieDetail?.tagline}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                {movieDetail?.overview}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  // justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "third.main",
                  }}
                >
                  Genres :
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    // fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  {movieDetail?.genres?.reduce(
                    (accumulator, currentValue, index) => {
                      return index === 0
                        ? currentValue.name
                        : `${accumulator}, ${currentValue.name}`;
                    },
                    ""
                  )}
                </Typography>
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "primary.main",
                  }}
                >
                  Runtime : {JSON.stringify(movieDetail?.runtime)[0]}h :
                  {JSON.stringify(movieDetail?.runtime)[1] +
                    JSON.stringify(movieDetail?.runtime)[2]}
                  min
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "primary.main",
                  }}
                >
                  Release Date : {movieDetail?.release_date}
                </Typography>
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "primary.main",
                  }}
                >
                  budget : {movieDetail?.budget}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "primary.main",
                  }}
                >
                  Revenue : {movieDetail?.revenue}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "primary.main",
                }}
              >
                IMDB Rating : {movieDetail?.imdb_id}
              </Typography>
              <Typography
                component={"a"}
                href={movieDetail?.homepage}
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "third.main",
                }}
                target="_blank"
              >
                Movie Home Page Link
              </Typography>{" "}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
