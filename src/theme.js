import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#283618",
    },
    secondary: {
      main: "#fefae0",
    },
    third: {
      main: "#ffb703",
      lite: "#ffd60a",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
