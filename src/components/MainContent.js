import React from "react";
import { Box, Typography, Grid, Paper, Rating, Divider } from "@mui/material";

const MainContent = () => {
  return (
    <Box p={1}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "26px",
          fontWeight: 600,
          color: "primary.main",
          position: "relative",
          paddingLeft: "10px",
          marginBottom: "20px",
          textTransform: "capitalize",
          "&::after": {
            content: '""',
            backgroundColor: "third.main",
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "-5px",
            height: "100%",
            width: "5px",
            borderRadius: "40px",
          },
        }}
        gutterBottom
      >
        We back visionary companies that are changing the way we live, work, and
        play.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: "primary.main",
          paddingLeft: "10px",
          marginBottom: "30px",
          textTransform: "capitalize",
          position: "relative",
          "&::after": {
            content: '""',
            backgroundColor: "third.lite",
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "-5px",
            height: "100%",
            width: "5px",
            borderRadius: "40px",
          },
        }}
        gutterBottom
      >
        Portfolio Companies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              minHeight: "150px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Company 1</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              minHeight: "150px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Company 2</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              minHeight: "150px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Company 3</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
