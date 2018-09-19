import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SecondaryColor = ({ children }) => <span style={{
  color: 'var(--secondary-text-color)'
}}>{children}</span>


function MediaCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={'./cake.jpg'}
          title="Cake"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Cake
          </Typography>
          <Typography component="p">
            Cake description....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <Typography>
          <SecondaryColor>View ingredients</SecondaryColor>
          </Typography>
        </Button>
        <Button size="small" color="primary">
          <Typography>
          <SecondaryColor>View Recipe</SecondaryColor>
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;