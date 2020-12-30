import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {insertItemToCart} from '../../actions/carts.action';
import {insertItemToWishlist} from '../../actions/wishlist.action';
import {formatPrice, url} from '../../utils/utils';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import {Icon} from '@iconify/react';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import plusOutline from '@iconify/icons-eva/plus-outline';
import useStyles from './card-item.styles';

function CardItem({...product}) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMouseInside, setIsMouseInside] = useState(false);
  const {id, productName, productBrand, productPrice, images} = product;

  const mouseEnter = () => setIsMouseInside(true);

  const mouseLeave = () => setIsMouseInside(false);

  const addItemToCart = () => dispatch(insertItemToCart(id));

  const addItemToWishlist = () => dispatch(insertItemToWishlist(id));

  return (
    <Fragment>
      <Grid item xs={6} md={4} lg={3}>
        <Card
          className={classes.root}
          elevation={0}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}>
          <CardMedia className={classes.cardImage} image={`${url}/images/${images[0].productImage}`}/>
          <CardActions disableSpacing className={classes.cardActions}>
            <Grow in={isMouseInside}>
              <Paper className={classes.paper}>
                <IconButton onClick={addItemToWishlist}>
                  <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                </IconButton>
              </Paper>
            </Grow>
            <Grow
              in={isMouseInside}
              style={{transformOrigin: '0 0 0'}}
              {...(isMouseInside ? {timeout: 1000} : {})}>
              <Paper className={`${classes.paper} ${classes.cartContainer}`}>
                <IconButton onClick={addItemToCart}>
                  <Icon className={classes.icon} icon={plusOutline}/>
                </IconButton>
              </Paper>
            </Grow>
          </CardActions>
          <CardContent className={classes.cardContent}>
            <Typography
              className={`${classes.text} ${classes.textBold}`}
              variant="subtitle2"
              onClick={() => history.push(`/collection/details/${id}`)}>
              {productName}
            </Typography>
            <Typography className={classes.text} variant="subtitle2">
              {productBrand}
            </Typography>
            <Typography className={classes.text} variant="subtitle2">
              {formatPrice(productPrice)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default CardItem;
