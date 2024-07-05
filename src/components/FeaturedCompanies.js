import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const companies = [
  { name: "Aurora Solar", logo: require("../images/aurora.png") },
  { name: "NYSE: BLND", logo: require("../images/blend.png") },
  { name: "NYSE: DOMA", logo: require("../images/doma.png") },
  { name: "Flyhomes", logo: require("../images/flyhomes.png") },
];

const FeaturedCompanies = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: "primary.main",
          paddingLeft: "10px",
          marginBottom: "20px",
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
        Featured
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.name}>
            <Paper
              elevation={3}
              style={{ padding: "14px", textAlign: "center" }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                width="100%"
                height="100px"
                sx={{ objectFit: "contain" }}
              />
              <Typography
                variant="subtitle"
                sx={{ fontSize: "14px", color: "third.main" }}
                gutterBottom
              >
                {company.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCompanies;
