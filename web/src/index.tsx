import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import App from "./App";
import store from "./store/index";
import customTheme from "./style/theme";
import reportWebVitals from "./reportWebVitals";

const globalStyleConfig = {
  body: {
    margin: 0,
  },
};

const theme = createTheme(customTheme);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyleConfig} />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
