import React, {Fragment, useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts, destroyProductsState} from '../../actions/products.action';
import {productsFetchSelector, productsLoadingSelector} from '../../utils/products-selectors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import CardItem from '../../components/card-item/card-item.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import useStyles from './products-page.styles';

function ProductsPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(productsFetchSelector);
  const isFetching = useSelector(productsLoadingSelector);
  const location = useLocation();
  const {category} = useParams();
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(category));
    return () => dispatch(destroyProductsState());
  }, [dispatch, category]);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <SearchBar/>
            {
              location.pathname.match('/collections/hijab') ? null :
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}>
                <Tab className={classes.tab} label="all"/>
                <Tab className={classes.tab} label="men"/>
                <Tab className={classes.tab} label="women"/>
              </Tabs>
            }
            <Grid className={classes.grid} container spacing={2}>
              {
                isFetching ? <Spinner /> :
                products.map((product) => <CardItem key={product.id} {...product}/>)
              }
            </Grid>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default ProductsPage;
