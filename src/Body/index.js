import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Components/Card/";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  render() {
    return (
      <main>
        <h1>Welcome to Bex's Bakes</h1>
        <Grid container spacing={24} className={"containerGrid"}>
          {this.state.items.map(({ title, description, image, name }, key) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={key}>
              <Card title={name} description={description} image={image} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
  }
}

export default Body;
