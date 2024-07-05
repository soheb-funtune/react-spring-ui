import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for createRoot
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "@fontsource/roboto";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./state/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Correct use of createRoot
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
