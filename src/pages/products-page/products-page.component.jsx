import React, {Fragment, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
  searchAnyProduct,
  filterMenCollections,
  filterWomenCollections,
  defaultCollections,
  destroyProductsState,
} from '../../actions/products.action';
import {
  productsFetchSelector,
  productsLoadingSelector,
  productQuerySelector,
  productsValueSelector,
  productsFilterSelector,
} from '../../utils/products-selectors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PageWrapper from '../../components/container/container.component';
import MuiSpinner from '../../components/mui-spinner/mui-spinner.component';
import MuiCard from '../../components/mui-card/mui-card.component';
import MuiSearchBar from '../../components/mui-search-bar/mui-search-bar.component';
import useStyles from './products-page.styles';

function ProductsPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(productsFetchSelector);
  const isFetching = useSelector(productsLoadingSelector);
  const query = useSelector(productQuerySelector);
  const value = useSelector(productsValueSelector);
  const results = useSelector(productsFilterSelector);
  const location = useLocation();
  const {category} = useParams();

  useEffect(() => {
    dispatch(fetchProducts(category));
    return () => dispatch(destroyProductsState());
  }, [dispatch, category]);

  const handleChange = (event) => dispatch(searchAnyProduct(event.target.value));

  const collection = (val) => val.productName.toLowerCase().includes(query.toLowerCase());

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <MuiSearchBar handleChange={handleChange} disabled={isFetching}/>
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
                  isFetching ? <MuiSpinner /> :
                  products.filter(collection).map((product) => <MuiCard key={product.id} {...product}/>)
                }
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid className={classes.grid} container spacing={2}>
                {results.filter(collection).map((product) => <MuiCard key={product.id} {...product}/>)}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid className={classes.grid} container spacing={2}>
                {results.filter(collection).map((product) => <MuiCard key={product.id} {...product}/>)}
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
      {value === index && (<div>{children}</div>)}
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
