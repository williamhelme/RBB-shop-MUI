import React from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../Card/";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProductList = props => {
  const { isLoading = true, items = [] } = props;
  return (
    <Grid container spacing={24} className={"containerGrid"}>
      {isLoading && (
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CircularProgress size={50} />
        </Grid>
      )}
      {!isLoading &&
        items.map(({ title, description, image, name }, key) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={key}>
            <MediaCard title={name} description={description} image={image} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductList;
