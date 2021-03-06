import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Body from "./Body/";
import Header from "./Header/";
import { auth, recipesCollection } from "./config/firebaseConfig";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      '"Indie Flower"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    useNextVariants: true
  }
});

const getRecipes = async () => {
  const querySnapshot = await recipesCollection.get();
  let data = [];
  querySnapshot.forEach(function(doc) {
    data.push(doc.data());
  });
  return data;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  async componentWillMount() {
    this.removeAuthListener = auth.onAuthStateChanged(user => {
      this.setState({
        authenticated: !!user,
        user: user,
        loading: false
      });
    });

    const data = await getRecipes();
    this.setState({
      items: data
    });
  }

  componentWillUnmount() {
    this.removeAuthListener = null;
  }

  render() {
    const { items = [] } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body items={items} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
