import React, {Fragment, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {addProductToCart} from '../../actions/cart.action';
import {addProductToWishlist} from '../../actions/wishlist.action';
import {formatPrice} from '../../utils/utils';
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

function CardItem({addProductToCart, addProductToWishlist, ...props}) {
  const classes = useStyles();
  const {productImageUrl, productName, productColor, productPrice} = props;
  const [isMouseInside, setIsMouseInside] = useState(false);

  const data = {
    'productName': props.productName,
    'productLabel': props.productLabel,
    'productImageUrl': props.productImageUrl,
    'productColor': props.productColor,
    'productSize': props.productSize,
    'productPrice': props.productPrice,
  };

  const uid = useSelector((state) => state.firebase.auth.uid);
  const auth = useSelector((state) => state.firebase.auth);

  const mouseEnter = () => setIsMouseInside(true);

  const mouseLeave = () => setIsMouseInside(false);

  return (
    <Fragment>
      <Grid item xs={6} md={4} lg={3}>
        <Card
          className={classes.root}
          elevation={0}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}>
          <CardMedia className={classes.cardImage} image={productImageUrl}/>
          <CardActions disableSpacing className={classes.cardActions}>
            <Grow in={isMouseInside}>
              <Paper className={classes.paper}>
                <IconButton onClick={(event) => {
                  event.preventDefault();
                  if (isLoaded(auth) && !isEmpty(auth)) {
                    addProductToWishlist(uid, data);
                  }
                }}>
                  <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                </IconButton>
              </Paper>
            </Grow>
            <Grow
              in={isMouseInside}
              style={{transformOrigin: '0 0 0'}}
              {...(isMouseInside ? {timeout: 1000} : {})}>
              <Paper className={`${classes.paper} ${classes.cartContainer}`}>
                <IconButton onClick={(event) => {
                  event.preventDefault();
                  if (isLoaded(auth) && !isEmpty(auth)) {
                    addProductToCart(uid, {...data, 'productAmount': 1});
                  } else {
                    console.log('you are not authorized');
                  }
                }}>
                  <Icon className={classes.icon} icon={plusOutline}/>
                </IconButton>
              </Paper>
            </Grow>
          </CardActions>
          <CardContent className={classes.cardContent}>
            <Typography className={`${classes.text} ${classes.textHeader}`} variant="subtitle1">
              {productName.toUpperCase()}
            </Typography>
            <Typography className={classes.text} variant="subtitle1">
              {productColor.toUpperCase()}
            </Typography>
            <Typography className={classes.text} variant="subtitle1">
              {formatPrice(productPrice)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (uid, data) => dispatch(addProductToCart(uid, data)),
    addProductToWishlist: (uid, data) => dispatch(addProductToWishlist(uid, data)),
  };
};

export default connect(null, mapDispatchToProps)(CardItem);
