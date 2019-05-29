import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createTheme, Normalize } from "styled-meow";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
