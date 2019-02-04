import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import EditableList from "../EditableList/";
import fb, { auth, recipesCollection } from "../../../config/firebaseConfig";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: "right"
  },
  input: {
    display: "none"
  }
});

export const Section = ({ heading, control: Control }) => (
  <FormGroup
    style={{
      padding: "1em"
    }}
  >
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Typography variant="h4" align="right">
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>{Control}</FormControl>
      </Grid>
    </Grid>
  </FormGroup>
);

class InsertForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: false,
      isLoading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recipeRef = null;
    this.instructionsRef = null;
  }

  componentDidMount() {
    const that = this;

    this.authListener = auth.onAuthStateChanged(user => {
      if (user) {
        const profile = fb.auth().currentUser;
        profile.getIdTokenResult().then(idToken => {
          // Parse the ID token.
          that.setState({
            isAdmin: idToken && idToken.claims && idToken.claims.admin,
            isLoading: false
          });
        });
      } else {
        that.setState({
          isAdmin: false,
          isLoading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.authListener && this.authListener();
    this.authListener = null;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit() {
    if (this.state.isAdmin) {
      const recipe = this.recipeRef.getItems();
      const instructions = this.instructionsRef.getItems();

      recipesCollection.add({
        name: this.state.name,
        description: this.state.description,
        recipe: recipe,
        instructions: instructions
      });
    }
  }

  render() {
    const { props, state } = this;
    const { classes } = props;
    let {
      name = "",
      description = "",
      isAdmin = false,
      isLoading = true
    } = state;

    if (isLoading) {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CircularProgress size={50} />
        </Grid>
      );
    }

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
              padding: "1em"
            }}
          >
            {!isAdmin && (
              <Typography variant="h3" color={"error"}>
                This is an admin page and for display purposes only. You will be
                unable to add items.
              </Typography>
            )}
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <Typography variant="h4" align="right">
                  General
                </Typography>
              </Grid>
              <Grid item xs={8} style={{ paddingTop: 0 }}>
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

          <Section
            control={<EditableList innerRef={ref => (this.recipeRef = ref)} />}
            heading={"Recipe"}
          />

          <Section
            control={
              <EditableList innerRef={ref => (this.instructionsRef = ref)} />
            }
            heading={"Cooking Instructions"}
          />

          <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleSubmit}
            disabled={!isAdmin}
          >
            Submit
          </Button>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(InsertForm);
