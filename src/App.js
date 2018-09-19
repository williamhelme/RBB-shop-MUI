import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Body from './Body/';
import Header from './Header/';
import Footer from './Footer/';


const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      '"Indie Flower"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
