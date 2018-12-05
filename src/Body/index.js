import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import Grid from "@material-ui/core/Grid";
import Card from "./Components/Card/";
import CircularProgress from "@material-ui/core/CircularProgress";
import InsertForm from "./Components/InsertForm";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.setState({
        items: nextProps.items
      });
    }
  }

  render() {
    const { loading = true } = this.props;
    return (
      <main>
        <h1>Welcome to Bex's Bakes</h1>
        <Router>
          <Grid container spacing={24} className={"containerGrid"}>
            <Route
              path="/"
              exact
              component={() => (
                <div>
                  {loading && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <CircularProgress size={50} />
                    </Grid>
                  )}
                  {this.state.items.map(
                    ({ title, description, image, name }, key) => (
                      <Grid item xs={12} sm={12} md={6} lg={3} key={key}>
                        <Card
                          title={name}
                          description={description}
                          image={image}
                        />
                      </Grid>
                    )
                  )}
                </div>
              )}
            />
            <Route path="/insert" exact component={InsertForm} />
          </Grid>
        </Router>
      </main>
    );
  }
}

export default Body;
