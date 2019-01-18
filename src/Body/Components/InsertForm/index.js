import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import EditableList from "../EditableList/";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: "right"
  },
  input: {
    display: "none"
  }
});

// const Spacer = () => (
//   <div
//     style={{
//       borderTop: "1px solid darkgray",
//       marginLeft: "2em",
//       marginRight: "2em"
//     }}
//   />
// );

export const Section = ({ heading, control: Control }) => (
  <FormGroup
    style={{
      padding: "2em"
    }}
  >
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Typography variant="display1" align="right">
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <Control />
        </FormControl>
      </Grid>
    </Grid>
  </FormGroup>
);

class InsertForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { props, state } = this;
    const { classes } = props;
    let { name = "", description = "" } = state;

    return (
      <div
        style={{
          padding: "2em"
        }}
      >
        <Card
          raised
          style={{
            borderTop: "4px solid var(--secondary-text-color)"
          }}
        >
          <FormGroup
            style={{
              padding: "2em"
            }}
          >
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <Typography variant="display1" align="right">
                  General
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <TextField
                    label="Name"
                    placeholder="Name"
                    id="insert-form-name"
                    onChange={this.handleChange("name")}
                    value={name}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    placeholder="Description"
                    id="insert-form-description"
                    onChange={this.handleChange("description")}
                    value={description}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </FormGroup>

          <Section control={EditableList} heading={"Recipe"} />

          <Section control={EditableList} heading={"Cooking Instructions"} />

          <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(InsertForm);
