import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {productFetchSelector, productsLoadingSelector} from '../../utils/products-selectors';
import {fetchProduct, destroyProductsState} from '../../actions/products.action';
import Container from '@material-ui/core/Container';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import useStyles from './product-page.styles';

function ProductPage() {
  const classes = useStyles();
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productFetchSelector);
  const isFetching = useSelector(productsLoadingSelector);

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => dispatch(destroyProductsState());
  }, [dispatch, id]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            {
              isFetching ? <Spinner/> : <span>{product.productName}</span>
            }
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
}

export default ProductPage;
