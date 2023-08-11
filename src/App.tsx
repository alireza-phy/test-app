import React from "react";
import "./App.css";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as StyledComponentThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import ContextProvider from "./store/context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <StyledComponentThemeProvider theme={theme}>
          <div className="App">
            <Routes />
          </div>
        </StyledComponentThemeProvider>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
