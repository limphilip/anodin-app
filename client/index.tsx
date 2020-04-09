import React from 'react';
import ReactDOM from 'react-dom';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  AppBar,
} from '@material-ui/core';
import LoginCard from './components/LoginCard';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginCard />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
