import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Body extends Component {
  render() {
    return (
      <main>
        <h1>Welcome to Bex's Bakes</h1>
        <Grid container spacing={24}>
          <Grid item sm={12} md={6} lg={4}></Grid>
        </Grid>
      </main>
    );
  }
}

export default Body;