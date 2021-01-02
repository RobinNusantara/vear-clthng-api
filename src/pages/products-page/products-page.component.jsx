import React, {Fragment, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
  filterMenCollections,
  filterWomenCollections,
  defaultCollections,
  destroyProductsState,
} from '../../actions/products.action';
import {
  productsFetchSelector,
  productsLoadingSelector,
  productsValueSelector,
  productsFilterSelector,
} from '../../utils/products-selectors';
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
  const value = useSelector(productsValueSelector);
  const _filter = useSelector(productsFilterSelector);
  const location = useLocation();
  const {category} = useParams();

  useEffect(() => {
    dispatch(fetchProducts(category));
    return () => dispatch(destroyProductsState());
  }, [dispatch, category]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <SearchBar/>
            {
              location.pathname.match('/collections/hijab') ? null :
              <Tabs className={classes.tabs} value={value}>
                <Tab
                  className={classes.tab}
                  label="all" {...a11yProps(0)}
                  onClick={() => dispatch(defaultCollections())}
                  disabled={isFetching}/>
                <Tab
                  className={classes.tab}
                  label="men" {...a11yProps(1)}
                  onClick={() => dispatch(filterMenCollections(products))}
                  disabled={isFetching}/>
                <Tab
                  className={classes.tab}
                  label="women" {...a11yProps(2)}
                  onClick={() => dispatch(filterWomenCollections(products))}
                  disabled={isFetching}/>
              </Tabs>
            }
            <TabPanel value={value} index={0}>
              <Grid className={classes.grid} container spacing={2}>
                {
                  isFetching ? <Spinner /> :
                  products.map((product) => <CardItem key={product.id} {...product}/>)
                }
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid className={classes.grid} container spacing={2}>
                {_filter.map((product) => <CardItem key={product.id} {...product}/>)}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid className={classes.grid} container spacing={2}>
                {_filter.map((product) => <CardItem key={product.id} {...product}/>)}
              </Grid>
            </TabPanel>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}>
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    'id': `product-tab-${index}`,
    'aria-controls': `product-tabpanel-${index}`,
  };
}

export default ProductsPage;
