import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Body from "./Body/";
import Header from "./Header/";
import Footer from "./Footer/";
import PropTypes from "prop-types";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    const { firebase } = this.props;
    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var db = firebase.firestore();
        db.collection("recipes")
          .get()
          .then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              data.push(doc.data());
            });
            debugger;
            this.setState({
              authenticated: true,
              items: data,
              user: user,
              loading: false
            });
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    const { items = [] } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Body items={items} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default App;
