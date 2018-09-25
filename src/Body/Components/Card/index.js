import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

const SecondaryColor = ({ children }) => (
  <span
    style={{
      color: "var(--secondary-text-color)"
    }}
  >
    {children}
  </span>
);

class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      title = "Cake",
      description = "Cake description...",
      image = "./tools.jpg"
    } = this.props;
    return (
      <Card>
        <CardMedia
          image={image}
          component="img"
          title="Cake"
          style={{
            textAlign: "center",
            width: "inherit",
            margin: "0px auto"
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Typography>
              <SecondaryColor>View ingredients</SecondaryColor>
            </Typography>
          </Button>
          <Button size="small">
            <Typography>
              <SecondaryColor>View recipe</SecondaryColor>
            </Typography>
          </Button>
        </CardActions>
        <Collapse in={false} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Method:
            </Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

MediaCard.defaultProps = {
  title: "Cake",
  description: "Cake description...",
  image: "./tools.jpg"
};

export default MediaCard;
