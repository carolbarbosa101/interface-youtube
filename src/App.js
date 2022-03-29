import React from 'react';
import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

const useStyles= makeStyles({
  root: {
    background: 'red',
    height: '100vh',
  },
});

  function App(){
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#f44336',
        }
      }
    });

  const classes = useStyles();

    return(
    <ThemeProvider theme={theme}>
   <div className={classes.root}>

   </div>
    </ThemeProvider>
    );
  }
export default App;
