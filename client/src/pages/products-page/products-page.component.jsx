import React, {Fragment, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProductsCategory,
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
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PageWrapper from '../../components/container/container.component';
import MuiTabPanel, {a11yProps} from '../../components/mui-tab-panel/mui-tab-panel.component';
import MuiSpinner from '../../components/mui-spinner/mui-spinner.component';
import MuiCardProduct from '../../components/mui-card-product/mui-card-product.component';
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
    dispatch(fetchProductsCategory(category));
    return () => dispatch(destroyProductsState());
  }, [dispatch, category]);

  const handleChange = (event) => {
    const _query = event.target.value;
    dispatch(searchAnyProduct(_query))
  };

  const collection = (val) => val.productName.toLowerCase().includes(query.toLowerCase());

  const TabLayout = () => {
    if (location.pathname.match('/collections/hijab')) return null;
    return (
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
    );
  };

  const FetchingContent = () => {
    if (isFetching) return <MuiSpinner/>;
    return Content(products);
  };

  const Content = (data) => {
    return data.filter(collection).map((product) => <MuiCardProduct key={product.id} {...product}/>);
  };

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <Box marginTop={4} display={{xs: 'block', sm: 'none'}}>
              <MuiSearchBar handleChange={handleChange} disabled={isFetching}/>
            </Box>
            {TabLayout()}
            <MuiTabPanel value={value} index={0}>
              <Grid className={classes.grid} container spacing={2}>
                {FetchingContent()}
              </Grid>
            </MuiTabPanel>
            <MuiTabPanel value={value} index={1}>
              <Grid className={classes.grid} container spacing={2}>
                {Content(results)}
              </Grid>
            </MuiTabPanel>
            <MuiTabPanel value={value} index={2}>
              <Grid className={classes.grid} container spacing={2}>
                {Content(results)}
              </Grid>
            </MuiTabPanel>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default ProductsPage;
