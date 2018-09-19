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


function MediaCard({
  title = 'Cake',
  description = 'Cake description...',
  image = './cake.jpg'
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={image}
          title="Cake"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
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
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

MediaCard.defaultProps = {
  title: 'Cake',
  description: 'Cake description...',
  image: './cake.jpg'
};

export default MediaCard;