import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase/InputBase";
import Paper from "@material-ui/core/Paper/Paper";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

const AddIcon = () => <Icon>add_circle</Icon>;
const CloseIcon = () => <Icon>close_circle</Icon>;

const styles = theme => {
  return {
    root: { flexGrow: 10, maxWidth: 400 },
    inputBaseStyle: { marginRight: "15px", width: 1000 },
    paper: { marginTop: "2px" }
  };
};

class EditableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [...props.items]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChangeEntry = this.onChangeEntry.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.deleteEmptyItem = this.deleteEmptyItem.bind(this);
  }

  onChangeEntry = event => {
    this.setState({ term: event.target.value });
  };

  onChangeItem = (event, index) => {
    var array = this.state.items;

    array[index] = event.target.value;
    this.setState({
      items: array
    });
  };

  deleteEmptyItem = (event, index) => {
    if (event.target.value === "") {
      this.deleteItem(index);
    }
  };

  addItem() {
    if (this.state.term !== "") {
      this.setState({
        term: "",
        items: [this.state.term].concat(this.state.items)
      });
    }
  }

  deleteItem(indexNum) {
    var array = this.state.items;

    array.splice(indexNum, 1);
    this.setState({
      items: array
    });
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.addItem();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <Paper className="floating insert-section" elevation={2}>
            <ListItem>
              <FormControl>
                <InputBase
                  className={`${classes.inputBaseStyle} insert-field`}
                  placeholder="New Entry"
                  value={this.state.term}
                  onKeyPress={this.onKeyPress}
                  onChange={this.onChangeEntry}
                />

                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Add"
                    className={"add-button"}
                    onClick={this.addItem}
                  >
                    <AddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </FormControl>
            </ListItem>
          </Paper>

          {this.state.items.map((element, index) => (
            <Paper
              className={`${classes.paper} list-item`}
              elevation={2}
              key={index}
            >
              <ListItem>
                <ListItemIcon>
                  <Typography
                    style={{ fontWeigt: 800, fontSize: 16 }}
                  >{`${index + 1}.`}</Typography>
                </ListItemIcon>
                <FormControl>
                  <InputBase
                    className={classes.inputBaseStyle}
                    value={element}
                    onChange={event => this.onChangeItem(event, index)}
                    onBlur={event => this.deleteEmptyItem(event, index)}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      className={`delete-item`}
                      aria-label="Delete"
                      onClick={() => this.deleteItem(index)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </FormControl>
              </ListItem>
            </Paper>
          ))}
        </List>
      </div>
    );
  }
}

EditableList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditableList);
