import React, {Fragment, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProduct, destroyProductsState} from '../../actions/products.action';
import {insertItemToCart} from '../../actions/carts.action';
import {insertItemToWishlist} from '../../actions/wishlist.action';
import {authUserSelector} from '../../utils/auth-selectors';
import {productFetchSelector, productsLoadingSelector} from '../../utils/products-selectors';
import {bagsLoadingSelector, bagsErrorSelector} from '../../utils/carts-selector';
import {favoritesLoadingSelector, favoritesErrorSelector} from '../../utils/favorites-selectors';
import {formatPrice, errorMessage, actionError} from '../../utils/utils';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';
import Delayed from '../../components/delayed/delayed.component';
import PageWrapper from '../../components/container/container.component';
import MuiSpinner from '../../components/mui-spinner/mui-spinner.component';
import MuiButton from '../../components/mui-button/mui-button.component';
import MuiSnackbar from '../../components/mui-snackbar/mui-snackbar.component';
import useStyles from './product-page.styles';

function ProductPage() {
  const classes = useStyles();
  const {id} = useParams();
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);
  const product = useSelector(productFetchSelector);
  const isFetching = useSelector(productsLoadingSelector);
  const cartErrorMessage = useSelector(bagsErrorSelector);
  const cartLoading = useSelector(bagsLoadingSelector);
  const wishlistErrorMessage = useSelector(favoritesErrorSelector);
  const wishlistLoading = useSelector(favoritesLoadingSelector);
  const [cartOpenSnackbar, setCartOpenSnackbar] = useState(false);
  const [wishlistOpenSnackbar, setWishlistOpenSnackbar] = useState(false);
  const {
    id: _id,
    productName,
    productBrand,
    productColor,
    productCategory,
    productType,
    productSize,
    productPrice,
    images,
  } = product;

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => dispatch(destroyProductsState());
  }, [dispatch, id]);

  const handleOpenCartSnackbar = () => {
    setCartOpenSnackbar(true);
    dispatch(insertItemToCart(_id));
  };

  const handleOpenWishlistSnackbar = () => {
    setWishlistOpenSnackbar(true);
    dispatch(insertItemToWishlist(_id));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setCartOpenSnackbar(false);
    setWishlistOpenSnackbar(false);
  };

  return (
    <Fragment>
      {
        isFetching ? <MuiSpinner/> :
        <Delayed waitBeforeShow={500}>
          {/* Desktop */}
          <div className={classes.desktop}>
          </div>
          {/* Mobile Device */}
          <div className={classes.mobile}>
            <div className={classes.mobileHeader}>
              {
                !images ? null :
                <Carousel
                  className={classes.carousel}
                  autoPlay={false}
                  animation="slide">
                  {
                    images.map((image, idx) => (
                      <div key={idx} className={classes.imageContainer}>
                        <div
                          className={classes.image}
                          style={{backgroundImage: `url(${image.productImage})`}}/>
                      </div>
                    ))
                  }
                </Carousel>
              }
            </div>
            <div className={classes.mobileContent}>
              <Container>
                <PageWrapper>
                  <Typography className={`${classes.textBold} ${classes.textUppercase}`} variant="body2">
                    {productName}
                  </Typography>
                  <Typography variant="body2" className={classes.topSpacing}>
                    {productBrand}
                  </Typography>
                  <Typography variant="body2" className={classes.topSpacing}>
                    {productColor}
                  </Typography>
                  <Typography variant="body2" className={`${classes.topSpacing} ${classes.textCapitalize}`}>
                    {productType} {productCategory}
                  </Typography>
                  <Typography variant="body2" className={classes.topSpacing}>
                    {productSize}
                  </Typography>
                  <Typography variant="body2" className={classes.topSpacing}>
                    {formatPrice(productPrice)}
                  </Typography>
                  <div className={classes._buttons}>
                    <div className={classes._button}>
                      <MuiButton
                        variant="contained"
                        color="primary"
                        _width="100%"
                        onClick={handleOpenCartSnackbar}
                        disabled={cartLoading}>
                        {cartLoading ? <CircularProgress size={18}/> : 'add to cart'}
                      </MuiButton>
                    </div>
                    <div className={classes._button}>
                      <MuiButton
                        variant="outlined"
                        color="primary"
                        _width="100%"
                        onClick={handleOpenWishlistSnackbar}>
                        {wishlistLoading ? <CircularProgress size={18}/> : 'add to favorite'}
                      </MuiButton>
                    </div>
                  </div>
                </PageWrapper>
              </Container>
            </div>
          </div>
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
        </Delayed>
      }
    </Fragment>
  );
}

export default ProductPage;
