import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Body from "./Body/";
import Header from "./Header/";
import Footer from "./Footer/";
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
    ].join(",")
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

  render() {
    const { items = [], loading } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body items={items} loading={loading} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
