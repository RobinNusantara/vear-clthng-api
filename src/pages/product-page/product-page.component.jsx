import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {productFetchSelector, productsLoadingSelector} from '../../utils/products-selectors';
import {fetchProduct, destroyProductsState} from '../../actions/products.action';
import {insertItemToWishlist} from '../../actions/wishlist.action';
import {insertItemToCart} from '../../actions/carts.action';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Carousel from 'react-material-ui-carousel';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import {Icon} from '@iconify/react';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import useStyles from './product-page.styles';

function ProductPage() {
  const classes = useStyles();
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productFetchSelector);
  const isFetching = useSelector(productsLoadingSelector);
  const {
    id: _id,
    // productName,
    // productBrand,
    // productColor,
    // productCategory,
    // productType,
    // productSize,
    // productPrice,
    images,
  } = product;

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => dispatch(destroyProductsState());
  }, [dispatch, id]);

  const addProductToWishlist = () => dispatch(insertItemToWishlist(_id));

  const addProductToCart = () => dispatch(insertItemToCart(_id));

  return (
    <Fragment>

      {/* Desktop */}
      <div className={classes.desktop}>
      </div>
      {/* Mobile Device */}
      <div className={classes.mobile}>
        {
          isFetching ? <Spinner/> :
            <Fragment>
              <div className={classes.mobileHeader}>
                {
                !images ? <span></span> :
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
                  </PageWrapper>
                </Container>
              </div>
            </Fragment>
        }
        <div className={classes.buttons}>
          <Container>
            <div className={classes.actions}>
              <Paper className={classes.paper}>
                <IconButton className={classes.favoriteButton} onClick={addProductToWishlist}>
                  <Icon className={classes.favoriteIcon} icon={outlineFavoriteBorder}/>
                </IconButton>
              </Paper>
              <Button
                className={classes.cartButton}
                variant="contained"
                color="primary"
                size="large"
                onClick={addProductToCart}>add to cart</Button>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPage;
