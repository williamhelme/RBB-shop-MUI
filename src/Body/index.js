import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import InsertForm from "./Components/InsertForm";
import ProductList from "./Components/ProductList";
import LoginForm from "./Components/LoginForm";

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
        items: nextProps.items,
        loading: false
      });
    }
  }

  render() {
    const { items = [], loading = true } = this.state;
    return (
      <main>
        <h1>Welcome to Bex's Bakes</h1>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route
              path="/insert"
              exact
              component={() => {
                return (
                  <div
                    style={{
                      textAlign: "right",
                      top: "-85px",
                      position: "relative",
                      marginRight: "10px"
                    }}
                  >
                    <LoginForm />
                  </div>
                );
              }}
            />
            <Route
              path="/"
              exact
              component={() => (
                <ProductList isLoading={loading} items={items} />
              )}
            />
            <Route path="/insert" exact component={InsertForm} />
          </div>
        </Router>
      </main>
    );
  }
}

export default Body;
