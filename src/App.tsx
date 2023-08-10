import React from 'react';
import './App.css';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as StyledComponentThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <StyledComponentThemeProvider theme={theme}>
    <div className="App">
     <Routes />
    </div>
    </StyledComponentThemeProvider>
    </ThemeProvider>
  );
}

export default App;
