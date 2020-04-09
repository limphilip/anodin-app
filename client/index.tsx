import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  AppBar,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Typography variant="h6">Anodin Online</Typography>
      </AppBar>
      <Typography style={{ marginTop: 50 }}>
        On lâche pas l&apos;progrès... !
      </Typography>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
