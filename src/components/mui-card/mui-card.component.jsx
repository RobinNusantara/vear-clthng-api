import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {insertItemToCart} from '../../actions/carts.action';
import {insertItemToWishlist} from '../../actions/wishlist.action';
import {authUserSelector} from '../../utils/auth-selectors';
import {bagsLoadingSelector, bagsErrorSelector} from '../../utils/carts-selector';
import {favoritesLoadingSelector, favoritesErrorSelector} from '../../utils/favorites-selectors';
import {formatPrice, errorMessage, actionError} from '../../utils/utils';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import MuiSnackbar from '../mui-snackbar/mui-snackbar.component';
import {Icon} from '@iconify/react';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import plusOutline from '@iconify/icons-eva/plus-outline';
import useStyles from './mui-card.styles';

function MuiCard({...product}) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);
  const cartErrorMessage = useSelector(bagsErrorSelector);
  const cartLoading = useSelector(bagsLoadingSelector);
  const wishlistErrorMessage = useSelector(favoritesErrorSelector);
  const wishlistLoading = useSelector(favoritesLoadingSelector);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [cartOpenSnackbar, setCartOpenSnackbar] = useState(false);
  const [wishlistOpenSnackbar, setWishlistOpenSnackbar] = useState(false);
  const {id, productName, productBrand, productPrice, images} = product;

  const mouseEnter = () => setIsMouseInside(true);

  const mouseLeave = () => setIsMouseInside(false);

  const handleOpenCartSnackbar = () => {
    setCartOpenSnackbar(true);
    dispatch(insertItemToCart(id));
  };

  const handleOpenWishlistSnackbar = () => {
    setWishlistOpenSnackbar(true);
    dispatch(insertItemToWishlist(id));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setCartOpenSnackbar(false);
    setWishlistOpenSnackbar(false);
  };

  const moveToCollectionPage = () => history.push(`/product/details/${id}`);

  return (
    <Fragment>
      <Grid item xs={6} md={4} lg={3}>
        <Card
          className={classes.root}
          elevation={0}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}>
          <CardMedia className={classes.cardImage} image={images[0].productImage}/>
          <CardActions className={classes.cardActions} disableSpacing>
            <Grow in={isMouseInside}>
              <Paper className={classes.paper}>
                <IconButton onClick={handleOpenWishlistSnackbar}>
                  <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                </IconButton>
              </Paper>
            </Grow>
            <Grow
              in={isMouseInside}
              style={{transformOrigin: '0 0 0'}}
              {...(isMouseInside ? {timeout: 1000} : {})}>
              <Paper className={`${classes.paper} ${classes.cartContainer}`}>
                <IconButton onClick={handleOpenCartSnackbar}>
                  <Icon className={classes.icon} icon={plusOutline}/>
                </IconButton>
              </Paper>
            </Grow>
          </CardActions>
          <CardContent className={classes.cardContent}>
            <Typography
              className={`${classes.textBold} ${classes._textOverflow}`}
              variant="subtitle1"
              onClick={moveToCollectionPage}>
              {productName}
            </Typography>
            <Typography className={classes.text} variant="subtitle1">
              {productBrand}
            </Typography>
            <Typography className={classes.text} variant="subtitle1">
              {formatPrice(productPrice)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Fragment>
        {
          cartLoading ? null :
          <MuiSnackbar
            open={cartOpenSnackbar}
            handleClose={handleClose}
            severity={errorMessage(cartErrorMessage) ? 'success' : 'error'}>
            {actionError(cartErrorMessage, user, 'shopping cart')}
          </MuiSnackbar>
        }
      </Fragment>
      <Fragment>
        {
          wishlistLoading ? null :
          <MuiSnackbar
            open={wishlistOpenSnackbar}
            handleClose={handleClose}
            severity={errorMessage(wishlistErrorMessage) ? 'success' : 'error'}>
            {actionError(wishlistErrorMessage, user, 'shopping wishlist')}
          </MuiSnackbar>
        }
      </Fragment>
    </Fragment>
  );
};

export default MuiCard;
